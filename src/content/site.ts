export const siteConfig = {
  name: "G Automation",
  legalName: "G Automation Industrial LTDA",
  cnpj: "45.531.455/0001-71",
  tagline: "Special Industrial Automations",
  description:
    "Manutenção em inversores, soft-starters, drivers e eletrônica de potência. Automação industrial e retrofit de painéis com compromisso, qualidade e inovação, atendendo indústrias em todo o Nordeste.",
  address: {
    street: "Rua Flor de Acácia, 171",
    neighborhood: "Jardim Botânico",
    city: "Goianinha",
    state: "RN",
    zip: "59.173-000",
  },
  contact: {
    whatsapp: "5581991318362",
    whatsappDisplay: "(81) 99131-8362",
    email: "gautomation2016@gmail.com",
    instagram: "https://instagram.com/g_automation_4.0",
    instagramHandle: "@G_AUTOMATION_4.0",
  },
} as const;

/**
 * URL de produção do site. Definir NEXT_PUBLIC_SITE_URL no ambiente de
 * deploy (Vercel) assim que o domínio definitivo for escolhido.
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://gautomation.vercel.app";

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
