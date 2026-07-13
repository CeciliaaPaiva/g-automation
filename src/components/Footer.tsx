import { siteConfig } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">G Automation</p>
            <p className="mt-2 text-sm">{siteConfig.tagline}</p>
            <p className="mt-4 text-xs text-slate-400">
              {siteConfig.legalName}
              <br />
              CNPJ {siteConfig.cnpj}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Contato</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>{siteConfig.contact.whatsappDisplay}</li>
              <li>{siteConfig.contact.email}</li>
              <li>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {siteConfig.contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Endereço</p>
            <p className="mt-2 text-sm">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.neighborhood}
              <br />
              {siteConfig.address.city}/{siteConfig.address.state} —{" "}
              {siteConfig.address.zip}
            </p>
          </div>
        </div>
        <p className="mt-8 border-t border-slate-800 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} {siteConfig.legalName}. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
