/**
 * Autorização confirmada pelo cliente (Ana Flavia/Gerson) para uso de nome
 * na esteira de clientes. Quando o arquivo de logo (PNG/SVG) de cada empresa
 * for enviado, adicione o caminho em `logoSrc` (ex: "/clients/fersystem.png")
 * para trocar o wordmark de texto pela imagem real.
 */
export type Client = {
  name: string;
  segment: string;
  logoAuthorized: boolean;
  logoSrc?: string;
};

export const clients: Client[] = [
  { name: "Fersystem", segment: "Indústria", logoAuthorized: true },
  { name: "Ceará Mirim Agronegócio", segment: "Agronegócio", logoAuthorized: true },
  { name: "Sanovo Greenpack", segment: "Embalagens", logoAuthorized: true },
  { name: "D'Pádua", segment: "Indústria", logoAuthorized: true },
  { name: "São José", segment: "Agroindústria", logoAuthorized: true },
  { name: "Marmoraria Brandão", segment: "Marmoraria", logoAuthorized: true },
  { name: "Pindorama", segment: "Agroindústria", logoAuthorized: true },
];

export const clientSegments = Array.from(
  new Set(clients.map((c) => c.segment))
);
