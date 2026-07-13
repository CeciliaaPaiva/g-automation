import Link from "next/link";
import { clientSegments } from "@/content/clients";
import { ClientMarquee } from "@/components/ClientMarquee";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Clientes",
  "Conheça as indústrias que a G Automation já atendeu em todo o Nordeste."
);

export default function ClientesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
      </div>

      <div className="mt-12">
        <ClientMarquee />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
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
    </div>
  );
}
