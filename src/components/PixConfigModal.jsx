import React, { useState } from 'react';
import { X, Check, Key, User, ShieldCheck } from 'lucide-react';

export default function PixConfigModal({ currentKey, currentHolder, onClose, onSave }) {
  const [key, setKey] = useState(currentKey);
  const [holder, setHolder] = useState(currentHolder);
  const [saved, setSaved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ key: key.trim(), holder: holder.trim() });
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
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-1 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
            <Key size={14} /> Configurações de Recebimento
          </div>
          <h3 className="font-serif text-xl font-bold text-white mt-1">
            Configurar Chave PIX Real
          </h3>
          <p className="text-xs text-white/80 mt-0.5">
            Insira o PIX onde os convidados farão os depósitos dos presentes.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#2B2A27]">
              Chave PIX (E-mail, CPF, Celular ou Aleatória)
            </label>
            <div className="relative">
              <Key size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5B6E4E]" />
              <input
                type="text"
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Ex: casanova.brunaepedro@gmail.com ou CPF"
                className="w-full bg-white pl-10 pr-4 py-2.5 rounded-xl border border-[#D4A373]/50 text-sm font-mono text-[#2B2A27] focus:outline-none focus:ring-2 focus:ring-[#5B6E4E]"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-bold text-[#2B2A27]">
              Nome do Titular da Conta
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

          <div className="bg-[#EFE6D5]/40 p-3 rounded-xl text-[11px] text-[#2B2A27]/80 leading-relaxed border border-[#D4A373]/30">
            💡 <strong>Dica:</strong> Essa chave PIX será usada instantaneamente para gerar os QR Codes e o código "Copia e Cola" em todos os botões de presente da Landing Page.
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="text-xs text-[#2B2A27]/70 hover:text-[#2B2A27] font-semibold py-2 px-3"
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
                  <ShieldCheck size={14} /> Salvar Chave PIX
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
