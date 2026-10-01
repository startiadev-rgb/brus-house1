import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <p><strong>Bru's House</strong><span>Obrigada por fazer parte desse começo.</span></p>
      <a href="#top" aria-label="Voltar ao topo">
        <ArrowUp size={18} strokeWidth={2} aria-hidden="true" />
      </a>
    </footer>
  );
}
