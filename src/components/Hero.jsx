import {
  Code2 as Github,
  BriefcaseBusiness as Linkedin,
  Mail,
  ArrowUpRight,
  ChevronDown
} from "lucide-react";

function Hero() {
  return (
    <section id="inicio" className="hero container">
      <div className="hero-content">
        <span className="availability">
          <span className="status-dot"></span>
          Desenvolvedor em formação
        </span>

        <p className="hero-greeting">Olá, meu nome é</p>

        <h1>
          João Victor
          <span> Oliveira.</span>
        </h1>

        <h2>
          Transformando ideias em experiências digitais.
        </h2>

        <p className="hero-description">
          Desenvolvedor em formação, apaixonado por tecnologia,
          programação e criação de soluções digitais.
          Sempre buscando aprender e evoluir através de novos desafios.
        </p>

        <div className="hero-buttons">
          <a href="#projetos" className="primary-button">
            Ver meus projetos <ArrowUpRight size={18} />
          </a>

          <a href="#sobre" className="secondary-button">
            Conheça minha história
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/joaovdasilvadev-oss"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-victor-oliveira-94b824450/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          <a
            href="mailto:joaovdasilva.dev@gmail.com"
            aria-label="E-mail"
          >
            <Mail />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow"></div>

        <div className="code-card">
          <div className="code-header">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <span>developer.js</span>
          </div>

          <div className="code-content">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="code-indent">
              name: <span className="code-green">'João Victor'</span>,
            </p>
            <p className="code-indent">
              role: <span className="code-green">'Developer'</span>,
            </p>
            <p className="code-indent">
              location: <span className="code-green">'São Paulo, BR'</span>,
            </p>
            <p className="code-indent">
              passion: <span className="code-green">'Technology'</span>,
            </p>
            <p className="code-indent">
              learning: <span className="code-green">'Every day'</span>
            </p>
            <p>{"};"}</p>

            <br />

            <p>
              <span className="code-purple">while</span> (alive) {"{"}
            </p>
            <p className="code-indent">
              <span className="code-blue">learn</span>();
            </p>
            <p className="code-indent">
              <span className="code-blue">build</span>();
            </p>
            <p className="code-indent">
              <span className="code-blue">evolve</span>();
            </p>
            <p>{"}"}</p>
          </div>
        </div>

        <div className="floating-icon icon-one">
          <Github />
        </div>

        <div className="floating-icon icon-two">
          {"{ }"}
        </div>
      </div>

      <a href="#sobre" className="scroll-indicator">
        Role para explorar <ChevronDown size={16} />
      </a>
    </section>
  );
}

export default Hero;