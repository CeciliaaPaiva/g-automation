import Link from "next/link";
import { clientSegments, clients } from "@/content/clients";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Clientes",
  "Conheça os segmentos de indústria que a G Automation já atendeu em todo o Nordeste."
);

export default function ClientesPage() {
  const authorizedClients = clients.filter((c) => c.logoAuthorized);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
        Clientes
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        Indústrias que confiam na G Automation
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Atendemos indústrias de diversos segmentos em todo o Nordeste,
        incluindo:
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {clientSegments.map((segment) => (
          <span
            key={segment}
            className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700"
          >
            {segment}
          </span>
        ))}
      </div>

      {authorizedClients.length > 0 && (
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
          {authorizedClients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center rounded-lg border border-slate-200 p-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={client.logoSrc}
                alt={client.name}
                className="max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      )}

      <div className="mt-12 rounded-xl bg-brand-900 p-8 text-center text-white">
        <h2 className="text-xl font-semibold">
          Quer ser o próximo case de sucesso?
        </h2>
        <Link
          href="/contato"
          className="mt-4 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-100"
        >
          Fale com a gente
        </Link>
      </div>
    </div>
  );
}
