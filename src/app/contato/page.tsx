import { siteConfig, whatsappLink } from "@/content/site";
import { ContactForm } from "@/components/ContactForm";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Contato",
  "Entre em contato com a G Automation por WhatsApp, e-mail ou formulário para solicitar um orçamento."
);

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
        Estamos prontos para atender sua indústria. Envie sua mensagem pelo
        formulário abaixo ou fale diretamente com a gente pelo WhatsApp.
      </p>

      <div className="mt-10 grid gap-10 sm:grid-cols-2">
        <div>
          <h2 className="font-semibold text-slate-900">
            Envie uma mensagem
          </h2>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <a
            href={whatsappLink(
              "Olá! Gostaria de solicitar um orçamento com a G Automation."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-slate-200 p-6 transition hover:border-brand-400 hover:shadow-sm"
          >
            <h2 className="font-semibold text-slate-900">WhatsApp</h2>
            <p className="mt-2 text-sm text-slate-600">
              {siteConfig.contact.whatsappDisplay}
            </p>
          </a>

          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="block rounded-xl border border-slate-200 p-6 transition hover:border-brand-400 hover:shadow-sm"
          >
            <h2 className="font-semibold text-slate-900">E-mail</h2>
            <p className="mt-2 text-sm text-slate-600">
              {siteConfig.contact.email}
            </p>
          </a>

          <div className="rounded-xl border border-slate-200 p-6">
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
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.city}/${siteConfig.address.state}`
                )}&output=embed`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
