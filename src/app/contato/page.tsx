import type { Metadata } from "next";
import { siteConfig, whatsappLink } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com a G Automation por WhatsApp ou e-mail para solicitar um orçamento.",
};

export default function ContatoPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
        Contato
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        Fale com a nossa equipe
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Estamos prontos para atender sua indústria. Envie sua mensagem pelos
        canais abaixo — o formulário de contato completo estará disponível em
        breve.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href={whatsappLink(
            "Olá! Gostaria de solicitar um orçamento com a G Automation."
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-slate-200 p-6 transition hover:border-brand-400 hover:shadow-sm"
        >
          <h2 className="font-semibold text-slate-900">WhatsApp</h2>
          <p className="mt-2 text-sm text-slate-600">
            {siteConfig.contact.whatsappDisplay}
          </p>
        </a>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="rounded-xl border border-slate-200 p-6 transition hover:border-brand-400 hover:shadow-sm"
        >
          <h2 className="font-semibold text-slate-900">E-mail</h2>
          <p className="mt-2 text-sm text-slate-600">
            {siteConfig.contact.email}
          </p>
        </a>
      </div>

      <div className="mt-10 rounded-xl border border-slate-200 p-6">
        <h2 className="font-semibold text-slate-900">Endereço</h2>
        <p className="mt-2 text-sm text-slate-600">
          {siteConfig.address.street}, {siteConfig.address.neighborhood}
          <br />
          {siteConfig.address.city}/{siteConfig.address.state} —{" "}
          {siteConfig.address.zip}
        </p>
        <div className="mt-4 overflow-hidden rounded-lg">
          <iframe
            title="Localização da G Automation"
            className="h-64 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city}/${siteConfig.address.state}`
            )}&output=embed`}
          />
        </div>
      </div>
    </div>
  );
}
