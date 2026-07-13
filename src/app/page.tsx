import Link from "next/link";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export default function Home() {
  return (
    <div>
      <section className="bg-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold sm:text-5xl">
            Manutenção e automação industrial com compromisso, qualidade e
            inovação.
          </h1>
          <p className="mt-6 max-w-xl text-brand-100">
            {siteConfig.description}
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Nossos serviços
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-xl border border-slate-200 p-6 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.summary}</p>
            </div>
          ))}
        </div>
        <Link
          href="/servicos"
          className="mt-8 inline-block text-sm font-semibold text-brand-700 hover:underline"
        >
          Ver todos os serviços →
        </Link>
      </section>
    </div>
  );
}
