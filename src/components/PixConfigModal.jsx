import React, { useState } from 'react';
import { X, Check, Key, User, ShieldCheck, CreditCard, Link as LinkIcon } from 'lucide-react';

export default function PixConfigModal({ currentKey, currentHolder, currentCardLink, onClose, onSave }) {
  const [key, setKey] = useState(currentKey || '');
  const [holder, setHolder] = useState(currentHolder || '');
  const [cardLink, setCardLink] = useState(currentCardLink || '');
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      key: key.trim(),
      holder: holder.trim(),
      cardLink: cardLink.trim()
    });
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2A27]/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-[#EFE6D5] animate-scaleUp">
        
        {/* Modal Header */}
        <div className="bg-[#5B6E4E] p-5 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Key size={14} /> Configuracoes de Recebimento
          </div>
          <h3 className="font-serif text-xl font-bold text-white mt-1">
            Configurar PIX & Cartao
          </h3>
          <p className="text-xs text-white/80 mt-0.5">
            Insira os dados onde os convidados farao os pagamentos e doacoes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* PIX Key */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#2B2A27]">
              Chave PIX (E-mail, CPF, Celular ou Aleatoria)
            </label>
            <div className="relative">
              <Key size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5B6E4E]" />
              <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Ex: 63.066.276/0001-92 ou e-mail"
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-[#D4A373]/50 text-sm font-mono text-[#2B2A27] focus:outline-none focus:ring-2 focus:ring-[#5B6E4E]"
                required
              />
            </div>
          </div>

          {/* Account Holder */}
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#2B2A27]">
              Nome do Titular da Conta PIX
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5B6E4E]" />
              <input
                type="text"
                value={holder}
                onChange={(e) => setHolder(e.target.value)}
                placeholder="Ex: Bruna & Pedro"
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-[#D4A373]/50 text-sm text-[#2B2A27] focus:outline-none focus:ring-2 focus:ring-[#5B6E4E]"
                required
              />
            </div>
          </div>

          {/* Card Link */}
          <div className="space-y-1 pt-2 border-t border-[#EFE6D5]">
            <label className="block text-xs font-bold text-[#2B2A27]">
              Link de Pagamento com Cartao (Opcional)
            </label>
            <div className="relative">
              <CreditCard size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C86D51]" />
              <input
                type="url"
                value={cardLink}
                onChange={(e) => setCardLink(e.target.value)}
                placeholder="Ex: https://link.mercadopago.com.br/... ou Stripe"
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-[#D4A373]/50 text-sm font-mono text-[#2B2A27] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
              />
            </div>
            <p className="text-[10px] text-[#2B2A27]/60 pt-0.5">
              Crie um link de cobranca no Mercado Pago, Stripe, PicPay ou InfinitePay e cole aqui.
            </p>
          </div>

          <div className="bg-[#EFE6D5]/40 p-3 rounded-xl text-[11px] text-[#2B2A27]/80 leading-relaxed border border-[#D4A373]/30">
            <strong>Como funciona:</strong> O PIX gera o QR Code e o codigo Copia e Cola instantaneamente. Se você preencher o link de cartão, o botão "Pagar com Cartão" redirecionara os convidados para a sua tela de pagamento segura.
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-[#2B2A27]/70 hover:text-[#2B2A27] font-semibold py-2 px-3 cursor-pointer"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className={`text-xs font-semibold px-5 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer ${
                saved
                  ? 'bg-green-600 text-white'
                  : 'bg-[#5B6E4E] hover:bg-[#445439] text-white'
              }`}
            >
              {saved ? (
                <>
                  <Check size={14} /> Salvo com Sucesso!
                </>
              ) : (
                <>
                  <ShieldCheck size={14} /> Salvar Configuracoes
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
