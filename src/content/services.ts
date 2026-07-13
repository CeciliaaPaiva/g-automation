export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "inversores-soft-starters",
    title: "Manutenção em Inversores, Soft-Starters e Eletrônica de Potência",
    summary:
      "Diagnóstico e reparo de inversores de frequência, soft-starters e drivers de diversas marcas.",
    description:
      "Realizamos diagnóstico e reparo de inversores de frequência, soft-starters, drivers e demais equipamentos de eletrônica de potência, utilizando ferramentas e técnicas de diagnóstico eficazes que reduzem o tempo de parada e otimizam os recursos da sua indústria.",
  },
  {
    slug: "placas-eletronicas",
    title: "Reparo de Placas Eletrônicas Industriais",
    summary: "Reparo de IHMs, CLPs e cartões de controle industriais.",
    description:
      "Reparo de placas eletrônicas industriais como IHMs (Interface Homem-Máquina), CLPs (Controladores Lógicos Programáveis) e cartões de controle, devolvendo à operação equipamentos essenciais para a linha de produção.",
  },
  {
    slug: "retrofit",
    title: "Retrofit de Painéis e Sistemas Legados",
    summary: "Modernização de painéis elétricos e sistemas de automação antigos.",
    description:
      "Modernização de painéis elétricos e sistemas de automação legados, atualizando componentes e tecnologia para aumentar a confiabilidade e estender a vida útil dos equipamentos.",
  },
  {
    slug: "automacao-industrial",
    title: "Soluções em Automação Industrial",
    summary: "Projetos e soluções sob medida para automação de processos.",
    description:
      "Desenvolvimento de soluções em automação industrial adequadas à realidade de cada cliente, contribuindo para ganhos de eficiência e produtividade nos processos produtivos.",
  },
  {
    slug: "suporte-multimarcas",
    title: "Suporte Técnico Multimarcas",
    summary: "Atendimento técnico especializado para equipamentos de diversos fabricantes.",
    description:
      "Suporte técnico multimarcas para equipamentos de automação e eletrônica de potência, com atendimento ágil para minimizar o impacto de paradas não programadas na sua produção.",
  },
];
