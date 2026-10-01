import { ShoppingBag } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="topbar">
      <a href="#top" className="brand" aria-label="Bru's House, voltar ao inicio">
        <span>Bru's House</span>
        <small>casa nova</small>
      </a>
      <nav aria-label="Navegacao principal">
        <a href="#top">Início</a>
        <a href="#mimos">Mimos</a>
        <a href="#recados">Recados</a>
      </nav>
      <button type="button" className="topbar-gift" onClick={onOpenCart} aria-label={`Abrir carrinho com ${cartCount} ${cartCount === 1 ? 'item' : 'itens'}`}>
        <ShoppingBag size={17} strokeWidth={2} aria-hidden="true" />
        <span>Carrinho</span>
        {cartCount > 0 && <b className="cart-count" aria-hidden="true">{cartCount}</b>}
      </button>
    </header>
  );
}
