import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl, DISPLAY_WHATSAPP } from "../data/siteConfig";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Desktop Tooltip Pill */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex items-center gap-2 bg-white text-charcoal px-3.5 py-2 rounded-full shadow-lg border border-black/10 text-xs font-semibold hover:text-[#25D366] transition-colors"
      >
        <span>Enquire on WhatsApp</span>
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
      </a>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/50 hover:bg-[#20BD5A] hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label={`Chat with Shivparvati Apartments on WhatsApp (${DISPLAY_WHATSAPP})`}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </div>
  );
}
