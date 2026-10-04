import { motion } from "framer-motion";
import {
  ChevronDown,
  MessageCircle,
  MapPin,
  Building2,
  ShieldCheck,
  Sparkles,
  Download,
  Phone,
  CheckCircle2,
  CalendarDays,
  Key,
} from "lucide-react";
import {
  PROJECT_NAME,
  PROJECT_TAGLINE,
  PROJECT_SUBTITLE,
  ADDRESS,
  BROCHURE_URL,
  BROCHURE_FILENAME,
  getWhatsAppUrl,
  DISPLAY_WHATSAPP,
  RERA_CONFIG,
  PROJECT_STATS,
} from "../data/siteConfig";

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 75;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleHeroFormSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("hero-name")?.value.trim() || "";
    const phone = document.getElementById("hero-phone")?.value.trim() || "";
    const config = document.getElementById("hero-config")?.value || "1 & 2 BHK";
    let msg = `Hello Shivparvati Developers, I am interested in ${PROJECT_NAME}.`;
    if (name || phone || config) {
      msg += `\n\nName: ${name || "Not provided"}\nPhone: ${phone || "Not provided"}\nApartment Type: ${config}`;
    }
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden pt-20 pb-8 lg:pt-28 lg:pb-12">
      {/* Background Image with Lighter Balanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp Image 2026-08-18 at 11.08.19 PM (1).jpeg"
          alt={`${PROJECT_NAME} — Building Elevation`}
          className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          loading="eager"
        />
        {/* Lighter Multi-Stage Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/75 to-primary-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-transparent to-primary-900/40" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 container-max w-full px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column – Brand & Highlights */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-accent/20 border border-accent/40 rounded-full text-accent text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-4"
            >
              <Sparkles size={14} className="text-accent" />
              <span>{PROJECT_TAGLINE}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display hero-headline font-bold text-white tracking-tight mb-4 drop-shadow-md"
            >
              {PROJECT_NAME}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-6 leading-relaxed"
            >
              {PROJECT_SUBTITLE}
            </motion.p>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium border border-white/20">
                <Building2 size={14} className="text-accent flex-shrink-0" />
                <span>1 & 2 BHK Residences</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium border border-white/20">
                <Sparkles size={14} className="text-accent flex-shrink-0" />
                <span>Rooftop Amenities Deck</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/15 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium border border-white/20">
                <MapPin size={14} className="text-accent flex-shrink-0" />
                <span>Katraj-Kondhwa Rd, Pune</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold border border-accent/40">
                <ShieldCheck size={14} className="text-accent flex-shrink-0" />
                <span>MahaRERA: {RERA_CONFIG.reraNumber}</span>
              </span>
            </motion.div>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4"
            >
              <button
                onClick={() => scrollTo("#apartments")}
                className="btn-primary !text-xs sm:!text-sm min-h-[44px]"
              >
                Explore 1 & 2 BHK
              </button>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !text-xs sm:!text-sm min-h-[44px]"
              >
                <MessageCircle size={18} />
                WhatsApp Direct
              </a>
              <a
                href={BROCHURE_URL}
                download={BROCHURE_FILENAME}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !text-xs sm:!text-sm min-h-[44px]"
              >
                <Download size={16} className="text-accent" />
                Download Brochure
              </a>
            </motion.div>

            {/* Trust Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-white/80 text-xs mt-2 py-1.5 px-3 bg-black/30 rounded-xl backdrop-blur-sm border border-white/10"
            >
              <span className="text-accent font-semibold flex items-center gap-1">
                <ShieldCheck size={13} /> RERA No. {RERA_CONFIG.reraNumber}
              </span>
              <span className="text-white/40">&bull;</span>
              <span>No Brokerage</span>
              <span className="text-white/40">&bull;</span>
              <span>Direct Developer Pricing</span>
            </motion.div>
          </div>

          {/* Right Column – Touch-Friendly WhatsApp Enquiry Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-5 w-full max-w-lg mx-auto"
          >
            <div className="bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-accent/25 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 mb-4 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs uppercase font-bold tracking-widest mb-1">
                  <MessageCircle size={14} />
                  <span>Instant Connect</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                  Direct WhatsApp Enquiry
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mt-1">
                  Get floor plans, price quote & brochure directly on WhatsApp:
                </p>
                {/* Separate Tappable WhatsApp Number to Prevent Wrapping */}
                <div className="mt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#25D366]/20 border border-[#25D366]/50 rounded-xl text-white font-mono font-bold text-sm sm:text-base hover:bg-[#25D366] transition-colors"
                  >
                    <MessageCircle size={16} className="text-[#25D366]" />
                    <span>+91 {DISPLAY_WHATSAPP}</span>
                  </a>
                </div>
              </div>

              <form onSubmit={handleHeroFormSubmit} className="relative z-10 space-y-3 mt-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    id="hero-name"
                    aria-label="Your Full Name"
                    className="w-full min-h-[44px] px-4 py-3 bg-white/20 border border-white/25 rounded-xl text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/25 transition-all text-sm"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Mobile Number (10 Digits)"
                    id="hero-phone"
                    maxLength={10}
                    aria-label="Mobile Number"
                    className="w-full min-h-[44px] px-4 py-3 bg-white/20 border border-white/25 rounded-xl text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white/25 transition-all text-sm"
                  />
                </div>

                <div>
                  <select
                    id="hero-config"
                    defaultValue="1 BHK"
                    aria-label="Select Apartment Type"
                    className="w-full min-h-[44px] px-4 py-3 bg-primary-800 border border-white/25 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
                  >
                    <option value="1 BHK" className="text-white bg-primary-800">1 BHK Apartment</option>
                    <option value="2 BHK" className="text-white bg-primary-800">2 BHK Apartment</option>
                    <option value="Both 1 & 2 BHK" className="text-white bg-primary-800">Interested in Both 1 & 2 BHK</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn-whatsapp w-full !py-3.5 !rounded-xl !text-xs sm:!text-sm min-h-[46px] shadow-xl"
                >
                  <MessageCircle size={18} />
                  Get Instant Info on WhatsApp
                </button>
              </form>

              <div className="relative z-10 mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-white/80 text-xs">
                <div className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-accent flex-shrink-0" />
                  <span className="truncate">{ADDRESS.line2}, Pune</span>
                </div>
                <span className="text-accent font-semibold flex-shrink-0">Site Office Open Daily</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Stats Strip */}
      <div className="relative z-10 container-max w-full px-4 sm:px-6 lg:px-8 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-primary-900/90 backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/15 shadow-2xl"
        >
          {PROJECT_STATS.map((stat, i) => (
            <div key={i} className="text-center p-2">
              <span className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-accent block">
                {stat.value}
              </span>
              <span className="text-white font-semibold text-xs sm:text-sm block mt-0.5">
                {stat.label}
              </span>
              <span className="text-white/60 text-[11px] block">
                {stat.subtitle}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
