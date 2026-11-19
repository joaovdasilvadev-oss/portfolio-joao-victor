import { Monitor, Database, Smartphone } from "lucide-react";

export const projetos = [
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