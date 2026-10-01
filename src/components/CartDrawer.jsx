import { useEffect, useRef } from 'react';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';

const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function CartDrawer({ items, onClose, onDecrease, onIncrease, onRemove, onCheckout }) {
  const drawerRef = useRef(null);
  const closeRef = useRef(null);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const trigger = document.activeElement;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyboard = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key !== 'Tab') return;
      const focusable = drawerRef.current?.querySelectorAll('button:not([disabled])');
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

  return (
    <div className="modal-backdrop cart-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section ref={drawerRef} className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
        <header className="cart-header">
          <div>
            <small>{count ? `${count} ${count === 1 ? 'mimo' : 'mimos'}` : 'Seu carrinho'}</small>
            <h2 id="cart-title">Juntinhos fica melhor.</h2>
          </div>
          <button ref={closeRef} type="button" className="icon-button" onClick={onClose} aria-label="Fechar carrinho"><X size={20} /></button>
        </header>

        {items.length === 0 ? (
          <div className="cart-empty">
            <ShoppingBag size={28} strokeWidth={1.7} aria-hidden="true" />
            <strong>Ainda cabe um mimo aqui.</strong>
            <p>Escolha quantas cotas quiser. A gente soma tudo em um PIX.</p>
            <button type="button" className="primary-button" onClick={onClose}>Ver os mimos</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div className="cart-item-copy">
                    <strong>{item.title}</strong>
                    <span>{money(item.price * item.quantity)}</span>
                    <div className="cart-item-controls" aria-label={`Quantidade de ${item.title}`}>
                      <button type="button" onClick={() => onDecrease(item.id)} aria-label={`Diminuir ${item.title}`}><Minus size={15} /></button>
                      <b aria-live="polite">{item.quantity}</b>
                      <button type="button" onClick={() => onIncrease(item.id)} aria-label={`Adicionar mais uma cota de ${item.title}`}><Plus size={15} /></button>
                    </div>
                  </div>
                  <button type="button" className="cart-remove" onClick={() => onRemove(item.id)} aria-label={`Remover ${item.title}`}><Trash2 size={17} /></button>
                </article>
              ))}
            </div>
            <footer className="cart-checkout">
              <span><small>Total</small><strong>{money(total)}</strong></span>
              <button type="button" className="primary-button" onClick={onCheckout}>Continuar para o PIX</button>
            </footer>
          </>
        )}
      </section>
    </div>
  );
}
