import { Gift } from 'lucide-react';

export default function Navbar() {
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
      <a className="topbar-gift" href="#mimos">
        <Gift size={17} strokeWidth={2} aria-hidden="true" />
        <span>Escolher mimo</span>
      </a>
    </header>
  );
}
