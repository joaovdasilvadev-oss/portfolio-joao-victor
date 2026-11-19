import { ArrowUpRight } from "lucide-react";

function ProjetoCard({ numero, titulo, descricao, tecnologias, link, icone: Icone }) {
  return (
    <article className="project-card">
      <div className="project-top">
        <span>{numero}</span>
        <Icone size={27} />
      </div>

      <h3>{titulo}</h3>
      <p>{descricao}</p>

      <div className="project-tags">
        {tecnologias.map((tecnologia) => (
          <span key={tecnologia}>{tecnologia}</span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        Ver repositório <ArrowUpRight size={17} />
      </a>
    </article>
  );
}

export default ProjetoCard;