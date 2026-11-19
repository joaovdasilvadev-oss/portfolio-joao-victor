import { projetos } from "../data/projetos";
import ProjetoCard from "./ProjetoCard";

function Projetos() {
  return (
    <section id="projetos" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <span>02 / PORTFÓLIO</span>

          <h2>
            Projetos que <strong>desenvolvi.</strong>
          </h2>

          <p>
            Alguns dos projetos que representam minha evolução
            e aprendizado durante minha jornada.
          </p>
        </div>

        <div className="projects-grid">
          {projetos.map((projeto) => (
            <ProjetoCard
              key={projeto.numero}
              {...projeto}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;