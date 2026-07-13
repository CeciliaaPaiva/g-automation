import Link from "next/link";
import { siteConfig } from "@/content/site";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/sobre", label: "Sobre" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight text-brand-700">
            G Automation
          </span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${siteConfig.contact.whatsapp}`}
          className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 md:hidden"
        >
          Contato
        </a>
        <Link
          href="/contato"
          className="hidden rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800 md:inline-block"
        >
          Solicitar orçamento
        </Link>
      </div>
    </header>
  );
}
