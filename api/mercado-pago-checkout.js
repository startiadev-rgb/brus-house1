import { GIFTS_DATA } from '../src/data/gifts.js';

const money = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

function grossUp(subtotal, rate) {
  return Math.ceil((subtotal / (1 - rate)) * 100) / 100;
}

function buildItems(inputItems) {
  if (!Array.isArray(inputItems) || inputItems.length === 0 || inputItems.length > 30) {
    throw new Error('Pagamento inválido.');
  }

  return inputItems.map((input) => {
    if (input.id === 'custom-amount') {
      const customAmount = Number(input.customAmount);
      if (!Number.isFinite(customAmount) || customAmount < 1 || customAmount > 10000) {
        throw new Error('Valor personalizado inválido.');
      }
      return { id: input.id, title: 'Mimo personalizado', quantity: 1, unit_price: money(customAmount) };
    }

    const gift = GIFTS_DATA.find((entry) => entry.id === input.id && !entry.isCustom);
    const quantity = Number(input.quantity);
    if (!gift || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      throw new Error('Mimo inválido.');
    }
    return { id: gift.id, title: gift.title, quantity, unit_price: gift.price };
  });
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'Método não permitido.' });
  }

  const accessToken = process.env.MP_ACCESS_TOKEN;
  if (!accessToken) return response.status(503).json({ error: 'Pagamento por cartão ainda não configurado.' });

  try {
    const items = buildItems(request.body?.items);
    const subtotal = money(items.reduce((sum, item) => sum + item.unit_price * item.quantity, 0));
    const configuredRate = Number(process.env.MP_CARD_FEE_RATE || '0.0498');
    const rate = Number.isFinite(configuredRate) && configuredRate >= 0 && configuredRate < 0.2 ? configuredRate : 0.0498;
    const cardTotal = grossUp(subtotal, rate);
    const fee = money(cardTotal - subtotal);
    const siteUrl = (process.env.SITE_URL || 'https://brus-house1.vercel.app').replace(/\/$/, '');
    const maxInstallments = Math.min(3, Math.max(1, Number(process.env.MP_MAX_INSTALLMENTS) || 3));

    const preferenceItems = [
      ...items.map((item) => ({ ...item, currency_id: 'BRL' })),
      ...(fee > 0 ? [{ id: 'card-fee', title: 'Acréscimo do cartão', quantity: 1, unit_price: fee, currency_id: 'BRL' }] : []),
    ];

    const mercadoPagoResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: preferenceItems,
        payer: request.body?.payerName ? { name: String(request.body.payerName).trim().slice(0, 50) } : undefined,
        back_urls: {
          success: `${siteUrl}/?payment=approved`,
          pending: `${siteUrl}/?payment=pending`,
          failure: `${siteUrl}/?payment=failure`,
        },
        auto_return: 'approved',
        external_reference: `brus-house-${Date.now()}`,
        statement_descriptor: 'BRUS HOUSE',
        payment_methods: {
          excluded_payment_types: [
            { id: 'ticket' },
            { id: 'bank_transfer' },
            { id: 'debit_card' },
            { id: 'prepaid_card' },
            { id: 'atm' },
          ],
          installments: maxInstallments,
        },
      }),
    });

    const result = await mercadoPagoResponse.json();
    if (!mercadoPagoResponse.ok || !result.init_point) {
      console.error('Mercado Pago preference error', mercadoPagoResponse.status, result);
      return response.status(502).json({ error: 'Não foi possível abrir o cartão agora. Tente novamente.' });
    }

    return response.status(200).json({
      checkoutUrl: result.init_point,
      subtotal,
      fee,
      total: cardTotal,
      installments: maxInstallments,
    });
  } catch (error) {
    return response.status(400).json({ error: error instanceof Error ? error.message : 'Não foi possível criar o checkout.' });
  }
}
