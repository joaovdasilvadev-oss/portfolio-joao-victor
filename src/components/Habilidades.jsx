import { Code2 as Github } from "lucide-react";
import { habilidades } from "../data/habilidades";

function Habilidades() {
  return (
    <section id="habilidades" className="section container">
      <div className="section-heading">
        <span>03 / TECNOLOGIAS</span>

        <h2>
          Ferramentas que fazem parte <strong>da minha jornada.</strong>
        </h2>

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
  );
}

export default Habilidades;