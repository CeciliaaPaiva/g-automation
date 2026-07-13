import { whatsappLink } from "@/content/site";

export function WhatsappButton() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de solicitar um orçamento com a G Automation.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-white shadow-lg transition hover:bg-green-700"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.7.44 3.35 1.29 4.8L2 22l5.42-1.38a9.86 9.86 0 0 0 4.62 1.17h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.14c-.24.68-1.4 1.32-1.93 1.4-.5.08-1.12.11-1.8-.11-.42-.14-.95-.3-1.63-.6-2.87-1.24-4.75-4.12-4.9-4.31-.14-.2-1.17-1.56-1.17-2.98s.74-2.11 1-2.4c.26-.29.57-.36.76-.36.2 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.14.12.31.02.5-.1.2-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.74 1.22 1.6 1.97 1.1.98 2.03 1.28 2.31 1.43.29.14.46.12.63-.07.17-.2.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
      </svg>
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
