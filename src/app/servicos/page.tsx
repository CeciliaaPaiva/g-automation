import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";
import { ServiceIcon } from "@/components/ServiceIcon";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Manutenção de inversores, soft-starters, placas eletrônicas industriais, retrofit de painéis e automação industrial.",
};

export default function ServicosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
        Serviços
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        Soluções em eletrônica industrial e automação
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Ferramentas e técnicas de diagnóstico eficazes que otimizam tempo e
        recursos no reparo dos seus equipamentos.
      </p>

      <div className="mt-12 space-y-8">
        {services.map((service) => (
          <div
            key={service.slug}
            className="flex gap-5 rounded-xl border border-slate-200 p-6 sm:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
              <ServiceIcon slug={service.slug} className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                {service.title}
              </h2>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-brand-900 p-8 text-center text-white">
        <h2 className="text-xl font-semibold">
          Precisa de um desses serviços?
        </h2>
        <Link
          href="/contato"
          className="mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
        >
          Solicitar orçamento
        </Link>
      </div>
    </div>
  );
}
