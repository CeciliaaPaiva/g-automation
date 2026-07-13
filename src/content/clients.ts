/**
 * Logos reais só devem ser publicados após autorização explícita de cada cliente
 * (ver REQUIREMENTS.md, seção "Restrições e Riscos"). Até lá, `logoAuthorized: false`
 * e a UI deve exibir apenas o segmento, sem nome/marca do cliente.
 */
export type Client = {
  name: string;
  segment: string;
  logoAuthorized: boolean;
  logoSrc?: string;
};

export const clients: Client[] = [
  { name: "Fersystem", segment: "Indústria", logoAuthorized: false },
  { name: "Ceará Mirim Agronegócio", segment: "Agronegócio", logoAuthorized: false },
  { name: "Sanovo Greenpack", segment: "Embalagens", logoAuthorized: false },
  { name: "D'Pádua", segment: "Indústria", logoAuthorized: false },
  { name: "São José", segment: "Agroindústria", logoAuthorized: false },
  { name: "Marmoraria Brandão", segment: "Marmoraria", logoAuthorized: false },
  { name: "Pindorama", segment: "Agroindústria", logoAuthorized: false },
];

export const clientSegments = Array.from(
  new Set(clients.map((c) => c.segment))
);
