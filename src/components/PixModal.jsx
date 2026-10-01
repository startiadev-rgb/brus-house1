import { useEffect, useMemo, useRef, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { Check, Copy, CreditCard, ExternalLink, LoaderCircle, QrCode, X } from 'lucide-react';

const CARD_FEE_RATE = Number(import.meta.env.VITE_MP_CARD_FEE_RATE || '0.0498');
const CARD_INSTALLMENTS = 3;

function cardPrice(subtotal) {
  return Math.ceil((subtotal / (1 - CARD_FEE_RATE)) * 100) / 100;
}

function crc16(value) {
  let crc = 0xffff;
  for (let index = 0; index < value.length; index += 1) {
    crc ^= value.charCodeAt(index) << 8;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc & 0x8000) !== 0 ? (crc << 1) ^ 0x1021 : crc << 1;
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, '0');
}

function generatePixPayload({ pixKey, merchantName, amount }) {
  const rawKey = pixKey || '';
  const isCnpj = /^\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/.test(rawKey) || /^\d{14}$/.test(rawKey);
  const cleanKey = isCnpj ? rawKey.replace(/\D/g, '') : rawKey.trim();
  const keyField = `01${String(cleanKey.length).padStart(2, '0')}${cleanKey}`;
  const merchantAccount = `0014BR.GOV.BCB.PIX${keyField}`;
  const tag26 = `26${String(merchantAccount.length).padStart(2, '0')}${merchantAccount}`;
  const cleanName = merchantName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').slice(0, 25);
  const tag59 = `59${String(cleanName.length).padStart(2, '0')}${cleanName}`;
  const amountText = Number(amount).toFixed(2);
  const tag54 = `54${String(amountText.length).padStart(2, '0')}${amountText}`;
  const rawPayload = `000201${tag26}520400005303986${tag54}5802BR${tag59}6009SAO PAULO62070503***6304`;
  return `${rawPayload}${crc16(rawPayload)}`;
}

export default function PixModal({ gift, pixKey, pixHolder, cardLink, onClose, onSuccess }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [customValue, setCustomValue] = useState('100');
  const [step, setStep] = useState('details');
  const [copyState, setCopyState] = useState('idle');
  const [cardState, setCardState] = useState('idle');
  const [cardError, setCardError] = useState('');
  const closeButtonRef = useRef(null);
  const modalRef = useRef(null);
  const stepRef = useRef(null);
  const finalPrice = gift.isCustom ? Number(customValue) || 0 : gift.price;
  const finalCardPrice = cardPrice(finalPrice);
  const cardFee = Math.max(0, finalCardPrice - finalPrice);
  const pixPayload = useMemo(
    () => generatePixPayload({ pixKey, merchantName: pixHolder || 'Bru e Cat', amount: finalPrice }),
    [finalPrice, pixHolder, pixKey],
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const trigger = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyboard = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;

      const focusable = modalRef.current?.querySelectorAll(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyboard);
      trigger?.focus?.();
    };
  }, [onClose]);

  useEffect(() => {
    if (step !== 'details') stepRef.current?.focus();
  }, [step]);

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(pixPayload);
      setCopyState('copied');
      window.setTimeout(() => setCopyState('idle'), 2500);
    } catch {
      setCopyState('error');
    }
  };

  const proceed = (event) => {
    event.preventDefault();
    if (!name.trim() || finalPrice <= 0) return;
    setStep('payment');
  };

  const startCardCheckout = async () => {
    if (!name.trim() || finalPrice <= 0 || cardState === 'loading') return;
    setCardState('loading');
    setCardError('');

    const items = gift.items
      ? gift.items.map((item) => ({ id: item.id, quantity: item.quantity }))
      : [{ id: gift.id, quantity: 1, ...(gift.isCustom ? { customAmount: finalPrice } : {}) }];

    try {
      const checkoutResponse = await fetch('/api/mercado-pago-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items, payerName: name.trim() }),
      });
      const checkout = await checkoutResponse.json();
      if (!checkoutResponse.ok || !checkout.checkoutUrl) throw new Error(checkout.error || 'Não foi possível abrir o cartão.');
      window.location.assign(checkout.checkoutUrl);
    } catch (error) {
      setCardState('error');
      setCardError(error instanceof Error ? error.message : 'Não foi possível abrir o cartão agora.');
    }
  };

  const saveMessage = () => {
    onSuccess({
      id: `gift-${Date.now()}`,
      name: name.trim(),
      message: message.trim() || 'Que essa casa seja cheia de encontros bons!',
      giftTitle: gift.items
        ? gift.items.map((item) => `${item.quantity > 1 ? `${item.quantity}× ` : ''}${item.title}`).join(' + ')
        : gift.title,
      date: 'Agora',
    });
    confetti({
      particleCount: 70,
      spread: 64,
      origin: { y: 0.72 },
      colors: ['#bd2738', '#f8f4f1', '#221c1b'],
      disableForReducedMotion: true,
    });
    setStep('success');
  };

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section ref={modalRef} className="pix-modal" role="dialog" aria-modal="true" aria-labelledby="pix-modal-title">
        <header className="pix-modal-header">
          <div>
            <small>{gift.items ? 'Seus mimos' : 'Seu mimo'}</small>
            <h2 id="pix-modal-title">{gift.title}</h2>
          </div>
          <button ref={closeButtonRef} type="button" className="icon-button" onClick={onClose} aria-label="Fechar">
            <X size={20} strokeWidth={2} />
          </button>
        </header>

        {step === 'details' && (
          <form className="pix-form" onSubmit={proceed}>
            {gift.isCustom && (
              <label className="field">
                <span>Qual valor você quer enviar?</span>
                <span className="money-input"><b>R$</b><input type="number" min="1" step="1" value={customValue} onChange={(event) => setCustomValue(event.target.value)} required /></span>
              </label>
            )}
            {gift.items && (
              <div className="pix-cart-summary">
                {gift.items.map((item) => <span key={item.id}><b>{item.quantity}× {item.title}</b><small>{(item.price * item.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</small></span>)}
              </div>
            )}
            {!gift.isCustom && <p className="pix-price">{finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>}
            <label className="field">
              <span>Seu nome</span>
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Como a gente te chama?" autoComplete="name" required />
            </label>
            <label className="field">
              <span>Um recado, se quiser</span>
              <textarea rows="3" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Vale mensagem curta, piada interna e conselho de casa." />
            </label>
            <div className="payment-options" aria-label="Escolha como pagar">
              <section className="payment-option">
                <span className="payment-option-heading"><QrCode size={19} aria-hidden="true" /><b>PIX à vista</b><small>Sem taxa</small></span>
                <strong>{finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                <button className="primary-button" type="submit">Gerar PIX</button>
              </section>
              <section className="payment-option">
                <span className="payment-option-heading"><CreditCard size={19} aria-hidden="true" /><b>Cartão de crédito</b><small>Até {CARD_INSTALLMENTS}x</small></span>
                <div className="card-breakdown">
                  <span><small>Subtotal</small><b>{finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></span>
                  <span><small>Acréscimo do cartão ({(CARD_FEE_RATE * 100).toLocaleString('pt-BR', { maximumFractionDigits: 2 })}%)</small><b>{cardFee.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</b></span>
                </div>
                <strong>{finalCardPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} <small>ou até {CARD_INSTALLMENTS}× de {(finalCardPrice / CARD_INSTALLMENTS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</small></strong>
                <button className="secondary-button" type="button" onClick={startCardCheckout} disabled={cardState === 'loading'}>
                  {cardState === 'loading' ? <LoaderCircle className="spin" size={18} aria-hidden="true" /> : <CreditCard size={18} aria-hidden="true" />}
                  {cardState === 'loading' ? 'Abrindo checkout…' : 'Pagar com cartão'}
                </button>
              </section>
            </div>
            {cardError && <p className="inline-error" role="alert">{cardError}</p>}
          </form>
        )}

        {step === 'payment' && (
          <div ref={stepRef} className="pix-payment" tabIndex="-1" aria-label="Pagamento por PIX">
            <div className="pix-qr"><QRCodeSVG value={pixPayload} size={176} level="H" includeMargin /></div>
            <p className="pix-payment-value">{finalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            <p>Escaneie o QR Code ou copie o código para o app do seu banco.</p>
            <p className="pix-recipient">Confira o favorecido no banco: <strong>{pixHolder}</strong> · CNPJ final {pixKey.replace(/\D/g, '').slice(-6)}</p>
            <button className="primary-button" type="button" onClick={copyPix}>
              {copyState === 'copied' ? <Check size={18} /> : <Copy size={18} />}
              {copyState === 'copied' ? 'Código copiado' : 'Copiar código PIX'}
            </button>
            <span className="sr-only" role="status" aria-live="polite">
              {copyState === 'copied' ? 'Código PIX copiado.' : copyState === 'error' ? 'Não foi possível copiar o código PIX.' : ''}
            </span>
            {copyState === 'error' && <p className="inline-error">Não foi possível copiar. Selecione o código abaixo.</p>}
            <textarea className="pix-code" readOnly value={pixPayload} aria-label="Código PIX copia e cola" />
            {cardLink && (
              <a className="secondary-button" href={cardLink} target="_blank" rel="noreferrer">
                Pagar por cartão em checkout seguro <ExternalLink size={16} />
              </a>
            )}
            <div className="pix-confirmation">
              <p>O site não confere o pagamento automaticamente. Depois de transferir, salve seu recado neste aparelho.</p>
              <button type="button" className="secondary-button" onClick={saveMessage}>Já fiz o PIX</button>
            </div>
            <button type="button" className="text-button" onClick={() => setStep('details')}>Voltar</button>
          </div>
        )}

        {step === 'success' && (
          <div ref={stepRef} className="pix-success" tabIndex="-1" aria-live="polite">
            <span><Check size={30} /></span>
            <h3>Recado guardado.</h3>
            <p>Obrigada, {name}. Ele já aparece nesta página no seu aparelho.</p>
            <button className="primary-button" type="button" onClick={onClose}>Ver os recados</button>
          </div>
        )}
      </section>
    </div>
  );
}
