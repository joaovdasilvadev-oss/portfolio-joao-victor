import {
  Mail,
  Code2 as Github,
  BriefcaseBusiness as Linkedin
} from "lucide-react";

function Contato() {
  return (
    <section id="contato" className="section contact-section">
      <div className="container contact-content">
        <span>04 / CONTATO</span>

        <h2>
          Vamos construir algo <strong>incrível juntos?</strong>
        </h2>

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
  );
}

export default Contato;