import { ArrowUpRight } from "lucide-react";

function Sobre() {
  return (
    <section id="sobre" className="section container">
      <div className="section-heading">
        <span>01 / SOBRE MIM</span>
        <h2>
          Conheça um pouco <strong>da minha história.</strong>
        </h2>
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
  );
}

export default Sobre;