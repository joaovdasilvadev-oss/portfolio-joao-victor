import {
  Code2 as Github,
  BriefcaseBusiness as Linkedin,
  Mail,
  ArrowUpRight,
  Monitor,
  Database,
  Smartphone,
  ChevronDown
} from "lucide-react";

import "./App.css";

const projetos = [
  {
    numero: "01",
    titulo: "Micro-frontends de Pedidos",
    descricao:
      "Aplicação dividida em micro-frontends independentes, com integração entre cardápio, pedidos e container.",
    tecnologias: ["React", "Next.js", "Module Federation"],
    link: "https://github.com/joaovdasilvadev-oss/micro-frontends-pedidos-pronto",
    icone: Monitor
  },
  {
    numero: "02",
    titulo: "Cadastro de Clientes",
    descricao:
      "Sistema de cadastro de clientes com operações de criação, consulta, edição e exclusão utilizando uma API.",
    tecnologias: ["JavaScript", "Fetch API", "HTML", "CSS"],
    link: "https://github.com/joaovdasilvadev-oss/cadastro-crudcrud-test",
    icone: Database
  },
  {
    numero: "03",
    titulo: "Diário de Bordo",
    descricao:
      "Aplicação web progressiva com recursos de cache e funcionamento otimizado por meio de Service Workers.",
    tecnologias: ["JavaScript", "PWA", "Service Worker"],
    link: "https://github.com/joaovdasilvadev-oss/diario-de-bordo-pwa",
    icone: Smartphone
  }
];

const habilidades = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "Python",
  "Git",
  "GitHub",
  "Fetch API",
  "Responsive Design",
  "Vite",
  "PWA"
];

function App() {
  return (
    <>
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

      <main>
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

        <section id="sobre" className="section container">
          <div className="section-heading">
            <span>01 / SOBRE MIM</span>
            <h2>Conheça um pouco <strong>da minha história.</strong></h2>
          </div>

          <div className="about-content">
            <div className="about-symbol">
              <span>JV</span>
              <div className="symbol-decoration"></div>
            </div>

            <div className="about-text">
              <h3>Olá! É um prazer ter você aqui.</h3>

              <p>
                Sou João Victor Oliveira, desenvolvedor em formação,
                localizado em São Paulo - SP.
              </p>

              <p>
                Tenho interesse em desenvolvimento de software e
                tecnologia. Venho construindo minha jornada através
                de estudos e projetos práticos, explorando diferentes
                ferramentas e tecnologias.
              </p>

              <p>
                Gosto de desafios, de entender como as coisas funcionam
                e de transformar conhecimento em projetos reais.
                Meu objetivo é continuar evoluindo e conquistar minha
                primeira oportunidade profissional na área de tecnologia.
              </p>

              <a href="#contato" className="text-link">
                Entre em contato <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="projetos" className="section projects-section">
          <div className="container">
            <div className="section-heading">
              <span>02 / PORTFÓLIO</span>
              <h2>Projetos que <strong>desenvolvi.</strong></h2>
              <p>
                Alguns dos projetos que representam minha evolução
                e aprendizado durante minha jornada.
              </p>
            </div>

            <div className="projects-grid">
              {projetos.map((projeto) => {
                const Icone = projeto.icone;

                return (
                  <article className="project-card" key={projeto.numero}>
                    <div className="project-top">
                      <span>{projeto.numero}</span>
                      <Icone size={27} />
                    </div>

                    <h3>{projeto.titulo}</h3>
                    <p>{projeto.descricao}</p>

                    <div className="project-tags">
                      {projeto.tecnologias.map((tecnologia) => (
                        <span key={tecnologia}>{tecnologia}</span>
                      ))}
                    </div>

                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                    >
                      Ver repositório <ArrowUpRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="habilidades" className="section container">
          <div className="section-heading">
            <span>03 / TECNOLOGIAS</span>
            <h2>Ferramentas que fazem parte <strong>da minha jornada.</strong></h2>
            <p>
              Tecnologias e ferramentas que venho estudando
              e aplicando nos meus projetos.
            </p>
          </div>

          <div className="skills-grid">
            {habilidades.map((habilidade) => (
              <div className="skill-card" key={habilidade}>
                <Github size={19} />
                <span>{habilidade}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="section contact-section">
          <div className="container contact-content">
            <span>04 / CONTATO</span>
            <h2>Vamos construir algo <strong>incrível juntos?</strong></h2>

            <p>
              Estou aberto a oportunidades, conexões e conversas
              sobre tecnologia e desenvolvimento.
            </p>

            <a
              href="mailto:joaovdasilva.dev@gmail.com"
              className="primary-button"
            >
              <Mail size={18} /> Enviar um e-mail
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/joaovdasilvadev-oss"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={19} /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jo%C3%A3o-victor-oliveira-94b824450/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <a href="#inicio" className="logo">
            JV<span>.</span>
          </a>

          <p>Desenvolvido por João Victor Oliveira © 2026</p>

          <a href="#inicio" className="back-to-top">
            Voltar ao topo ↑
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;