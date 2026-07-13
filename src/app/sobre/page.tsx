import { siteConfig } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Sobre", siteConfig.description);

export default function SobrePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
        Sobre a {siteConfig.name}
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
        Compromisso, qualidade e inovação em eletrônica industrial
      </h1>
      <p className="mt-6 text-slate-600">
        A {siteConfig.legalName} atua desde 2022 no setor de eletrônica
        industrial, automação e manutenção de equipamentos de potência,
        atendendo grandes indústrias em todo o Nordeste. Utilizamos
        ferramentas e técnicas de diagnóstico eficazes que otimizam tempo e
        recursos no reparo dos equipamentos dos nossos clientes.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-900">Diagnóstico eficaz</h2>
          <p className="mt-2 text-sm text-slate-600">
            Uso de ferramentas especializadas para identificar rapidamente a
            causa da falha e reduzir o tempo de parada.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-900">Multimarcas</h2>
          <p className="mt-2 text-sm text-slate-600">
            Suporte técnico para equipamentos de diferentes fabricantes de
            inversores, soft-starters e sistemas de automação.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-900">
            Atuação regional
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Sediados em Goianinha/RN, atendemos indústrias em todo o
            Nordeste do Brasil.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 rounded-xl bg-slate-50 p-8 sm:grid-cols-3">
        <div className="text-center">
          <p className="text-3xl font-bold text-brand-700">2022</p>
          <p className="mt-1 text-sm text-slate-600">Ano de fundação</p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-brand-700">NE</p>
          <p className="mt-1 text-sm text-slate-600">
            Atendimento em todo o Nordeste
          </p>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold text-brand-700">ME</p>
          <p className="mt-1 text-sm text-slate-600">
            Empresa ativa — CNPJ {siteConfig.cnpj}
          </p>
        </div>
      </div>
    </div>
  );
}
