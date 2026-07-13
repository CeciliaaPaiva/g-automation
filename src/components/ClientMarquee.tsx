import Image from "next/image";
import { clients, type Client } from "@/content/clients";

function ClientCard({ client }: { client: Client }) {
  return (
    <div className="flex h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 shadow-sm">
      {client.logoSrc ? (
        <Image
          src={client.logoSrc}
          alt={client.name}
          width={160}
          height={64}
          className="max-h-14 w-auto object-contain grayscale transition hover:grayscale-0"
        />
      ) : (
        <span className="text-center text-base font-semibold tracking-tight text-slate-500">
          {client.name}
        </span>
      )}
    </div>
  );
}

export function ClientMarquee() {
  const authorized = clients.filter((c) => c.logoAuthorized);
  if (authorized.length === 0) return null;

  // duplicamos a lista para permitir loop contínuo sem salto visível
  const track = [...authorized, ...authorized];

  return (
    <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-6 py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        {track.map((client, i) => (
          <ClientCard key={`${client.name}-${i}`} client={client} />
        ))}
      </div>
    </div>
  );
}
