import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { Heart, Copy, Check, X, Settings, Send, ShieldCheck, Smartphone, Info } from 'lucide-react';

export default function PixModal({ gift, pixKey, pixHolder, onClose, onSuccess, onOpenPixConfig }) {
  const [donorName, setDonorName] = useState('');
  const [customValue, setCustomValue] = useState('100');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState('form'); // 'form' | 'pix' | 'success'

  // Calculate effective price
  const finalPrice = gift?.isCustom
    ? parseFloat(customValue) || 0
    : gift?.price || 0;

  // Generate formatted PIX Copia e Cola payload
  const pixPayload = `00020126580014BR.GOV.BCB.PIX0136${pixKey || 'casanova.brunaepedro@gmail.com'}520400005303986540${finalPrice.toFixed(2).replace('.', '')}5802BR5925${pixHolder || 'Bru e Cat'}6009SAO PAULO62070503***6304`;

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixPayload);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleProceedToPix = (e) => {
    e.preventDefault();
    if (!donorName.trim()) {
      alert('Por favor, informe seu nome ou apelido para o cartão de presente!');
      return;
    }
    if (gift?.isCustom && finalPrice <= 0) {
      alert('Por favor, digite um valor válido para o presente!');
      return;
    }
    setStep('pix');
  };

  const handleConfirmPayment = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C86D51', '#5B6E4E', '#D4A373', '#F9F6F0']
    });

    const newGiftEntry = {
      id: `gift-${Date.now()}`,
      name: donorName.trim() || 'Amigo Anônimo',
      message: message.trim() || 'Desejo toda a felicidade do mundo para essa casa nova! ❤️',
      amount: finalPrice,
      giftTitle: gift?.title || 'Contribuição Especial',
      date: 'Agora'
    };

    onSuccess(newGiftEntry);
    setStep('success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B2A27]/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#EFE6D5] my-6 animate-scaleUp">
        
        {/* Header */}
        <div className="terracotta-gradient p-5 sm:p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <X size={20} />
          </button>

          <div className="flex items-center gap-2 text-white/90 text-xs font-semibold uppercase tracking-wider mb-1">
            <Heart size={14} className="fill-white" /> Bru's House
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            {gift?.title || 'Presentear com Amor'}
          </h3>
          <p className="text-xs text-white/80 mt-1">
            Sua contribuição vai direto para a montagem do lar da Bru & Cat.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5">

          {/* STEP 1: FORM INPUTS */}
          {step === 'form' && (
            <form onSubmit={handleProceedToPix} className="space-y-4">
              
              {/* Custom amount selection */}
              {gift?.isCustom && (
                <div className="space-y-2 bg-[#EFE6D5]/40 p-4 rounded-2xl border border-[#D4A373]/30">
                  <label className="block text-xs font-bold text-[#2B2A27] uppercase tracking-wider">
                    Digite o Valor Desejado (R$)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 font-serif font-bold text-[#C86D51] text-lg">
                      R$
                    </span>
                    <input
                      type="number"
                      min="1"
                      step="any"
                      value={customValue}
                      onChange={(e) => setCustomValue(e.target.value)}
                      placeholder="Ex: 100"
                      className="w-full bg-white pl-12 pr-4 py-3 rounded-xl border-2 border-[#C86D51] font-serif font-bold text-xl text-[#2B2A27] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                      required
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[50, 100, 200, 350].map((val) => (
                      <button
                        type="button"
                        key={val}
                        onClick={() => setCustomValue(val.toString())}
                        className={`text-xs font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${
                          customValue === val.toString()
                            ? 'bg-[#C86D51] text-white border-[#C86D51]'
                            : 'bg-white text-[#2B2A27] border-[#D4A373]/50 hover:bg-[#EFE6D5]'
                        }`}
                      >
                        R$ {val}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Price Tag if fixed */}
              {!gift?.isCustom && (
                <div className="bg-[#EFE6D5]/40 p-4 rounded-2xl flex items-center justify-between border border-[#D4A373]/30">
                  <div>
                    <span className="text-xs text-[#5B6E4E] font-medium block">Valor do Mimo</span>
                    <span className="font-serif text-xl font-bold text-[#C86D51]">
                      R$ {finalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                  <span className="text-xs bg-[#5B6E4E] text-white px-3 py-1 rounded-full font-semibold">
                    {gift?.badge || 'Mimo Especial'}
                  </span>
                </div>
              )}

              {/* Name Input */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#2B2A27]">
                  Seu Nome ou Apelido *
                </label>
                <input
                  type="text"
                  placeholder="Ex: Lorena, Luiza, Malu..."
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[#D4A373]/50 text-sm text-[#2B2A27] focus:outline-none focus:ring-2 focus:ring-[#C86D51]"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="space-y-1">
                <label className="block text-xs font-bold text-[#2B2A27]">
                  Recado Carinhoso para a Bru & Cat (Opcional)
                </label>
                <textarea
                  rows="3"
                  placeholder="Escreva uma mensagem para ficar gravada no nosso mural..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white px-4 py-3 rounded-xl border border-[#D4A373]/50 text-sm text-[#2B2A27] focus:outline-none focus:ring-2 focus:ring-[#C86D51] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full terracotta-gradient text-white font-bold text-base py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Gerar PIX Copia e Cola</span>
                <Send size={18} />
              </button>
            </form>
          )}

          {/* STEP 2: PIX COPIA E COLA & QR CODE FOR MOBILE */}
          {step === 'pix' && (
            <div className="space-y-5 animate-fadeIn text-center">
              
              {/* Mobile Mobile Assistance Banner */}
              <div className="bg-[#5B6E4E]/10 border border-[#5B6E4E]/30 p-3.5 rounded-2xl text-left space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5B6E4E] uppercase tracking-wider">
                  <Smartphone size={16} /> Acessando pelo celular?
                </div>
                <p className="text-xs text-[#2B2A27]/85 leading-relaxed">
                  1. Clique no botão verde abaixo para <strong>copiar o código PIX Copia e Cola</strong>.<br />
                  2. Abra o app do seu banco, vá em <strong>Pix ➔ Pix Copia e Cola</strong> e cole!
                </p>
              </div>

              {/* Amount Display */}
              <div className="bg-[#EFE6D5]/50 p-3.5 rounded-2xl flex items-center justify-between border border-[#D4A373]/30">
                <span className="text-xs text-[#2B2A27]/80 font-medium">Valor Total do Pix:</span>
                <span className="font-serif text-2xl font-extrabold text-[#C86D51]">
                  R$ {finalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>

              {/* PROMINENT PIX COPIA E COLA BUTTON */}
              <div className="space-y-2">
                <button
                  onClick={handleCopyPix}
                  className={`w-full py-4 px-5 rounded-2xl font-extrabold text-sm sm:text-base transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg transform active:scale-95 ${
                    copied
                      ? 'bg-green-600 text-white scale-102'
                      : 'bg-[#5B6E4E] hover:bg-[#445439] text-white'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={22} />
                      <span>CÓDIGO PIX COPIADO! AGORA ABRA O SEU BANCO</span>
                    </>
                  ) : (
                    <>
                      <Copy size={22} />
                      <span>COPIAR CÓDIGO PIX (COPIA E COLA)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Editable/Visible PIX Text Box */}
              <div className="space-y-1 text-left">
                <label className="block text-[11px] font-bold text-[#2B2A27]/70 uppercase">
                  Código Pix Copia e Cola (ou selecione manualmente):
                </label>
                <div className="relative">
                  <textarea
                    readOnly
                    rows="2"
                    value={pixPayload}
                    onClick={handleCopyPix}
                    className="w-full bg-[#F9F6F0] p-2.5 rounded-xl border border-[#D4A373]/40 text-[11px] font-mono text-[#2B2A27] resize-none focus:outline-none cursor-pointer select-all"
                  />
                </div>
              </div>

              {/* QR Code Collapsible/Secondary for Desktop */}
              <div className="pt-3 border-t border-[#EFE6D5] space-y-2">
                <details className="text-left group">
                  <summary className="text-xs font-semibold text-[#C86D51] hover:underline cursor-pointer flex items-center gap-1">
                    <Info size={14} /> Ver QR Code para escanear com outro celular
                  </summary>
                  <div className="bg-[#F9F6F0] p-4 rounded-2xl border border-[#D4A373]/30 mt-3 flex flex-col items-center space-y-2">
                    <QRCodeSVG
                      value={pixPayload}
                      size={150}
                      level="H"
                      includeMargin={true}
                      className="rounded-lg bg-white p-2 shadow-xs"
                    />
                    <span className="text-[10px] text-[#2B2A27]/70">Escaneie a imagem com a câmera do seu banco</span>
                  </div>
                </details>
              </div>

              {/* Confirm Done Buttons */}
              <div className="pt-3 flex items-center justify-between gap-3">
                <button
                  onClick={() => setStep('form')}
                  className="text-xs text-[#2B2A27]/70 hover:text-[#2B2A27] font-medium py-2"
                >
                  ← Alterar Valor
                </button>

                <button
                  onClick={handleConfirmPayment}
                  className="terracotta-gradient text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck size={16} />
                  <span>Já Fiz o Pix / Confirmar Mimo</span>
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: SUCCESS CELEBRATION */}
          {step === 'success' && (
            <div className="text-center py-6 space-y-4 animate-scaleUp">
              <div className="w-16 h-16 rounded-full terracotta-gradient text-white flex items-center justify-center mx-auto shadow-xl">
                <Heart size={32} className="fill-white animate-bounce" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif text-2xl font-extrabold text-[#2B2A27]">
                  Muito obrigado, {donorName}! ❤️
                </h4>
                <p className="text-xs sm:text-sm text-[#2B2A27]/80 leading-relaxed max-w-xs mx-auto">
                  Seu mimo de <strong>R$ {finalPrice.toFixed(2)}</strong> foi registrado com muito carinho para a Bru & Cat!
                </p>
              </div>

              <div className="bg-[#EFE6D5]/50 p-4 rounded-2xl text-left border border-[#D4A373]/30">
                <span className="text-[10px] font-bold text-[#5B6E4E] uppercase tracking-wider block mb-1">
                  Seu Recado Gravado no Mural
                </span>
                <p className="text-xs italic text-[#2B2A27]">
                  "{message || 'Desejo toda a felicidade do mundo para essa casa nova!'}"
                </p>
              </div>

              <button
                onClick={onClose}
                className="w-full terracotta-gradient text-white text-xs font-bold py-3.5 rounded-xl shadow-md cursor-pointer uppercase tracking-wider"
              >
                Concluir & Ver Mural de Recados
              </button>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
