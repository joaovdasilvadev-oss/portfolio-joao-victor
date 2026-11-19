import { ArrowUpRight } from "lucide-react";

function Header() {
  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#inicio" className="logo">
          JV<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contato">Contato</a>
        </div>

        <a href="#contato" className="nav-button">
          Vamos conversar <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

export default Header;