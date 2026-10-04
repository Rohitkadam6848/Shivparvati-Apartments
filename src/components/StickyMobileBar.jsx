import { Phone, MessageCircle, Send } from "lucide-react";
import { getWhatsAppUrl, DISPLAY_WHATSAPP } from "../data/siteConfig";
import "./StickyMobileBar.css";

export default function StickyMobileBar() {
  const handleEnquireClick = (e) => {
    e.preventDefault();
    const el = document.querySelector("#inquiry") || document.querySelector("#site-visit");
    if (el) {
      const offset = 70;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-black/10 p-2 sm:p-2.5 sticky-mobile-bar flex items-center gap-2">
      {/* 1. Call Button */}
      <a
        href={`tel:${DISPLAY_WHATSAPP}`}
        className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white py-2.5 sm:py-3 px-2 rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
        aria-label="Call Sales Desk"
      >
        <Phone size={15} />
        <span>Call</span>
      </a>

      {/* 2. WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.5] flex items-center justify-center gap-1.5 bg-[#25D366] text-white py-2.5 sm:py-3 px-3 rounded-xl font-bold text-xs shadow-md shadow-[#25D366]/20 active:scale-95 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>

      {/* 3. Enquire Button */}
      <a
        href="#inquiry"
        onClick={handleEnquireClick}
        className="flex-1 flex items-center justify-center gap-1.5 bg-accent text-white py-2.5 sm:py-3 px-2 rounded-xl font-bold text-xs shadow-sm active:scale-95 transition-transform"
        aria-label="Enquire Now"
      >
        <Send size={14} />
        <span>Enquire</span>
      </a>
    </div>
  );
}
