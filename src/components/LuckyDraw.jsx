import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gift,
  Sparkles,
  Ticket,
  Trophy,
  Users,
  MessageCircle,
  FileText,
  X,
  ChevronRight,
  ShieldAlert,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { LUCKY_DRAW_CONFIG, getOfferWhatsAppUrl } from "../data/siteConfig";
import "./LuckyDraw.css";

const stepIcons = [HomeIconPlaceholder, Ticket, Users, Trophy];

function HomeIconPlaceholder(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );
}

export default function LuckyDraw() {
  const [showTcModal, setShowTcModal] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(LUCKY_DRAW_CONFIG.drawDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="offer" className="section-padding lucky-draw-gradient text-white relative overflow-hidden">
      {/* Decorative Sparkle floating particles */}
      <div className="sparkle-particle top-10 left-[10%] text-accent/50">
        <Sparkles size={28} />
      </div>
      <div className="sparkle-particle top-24 right-[15%] text-accent/60" style={{ animationDelay: "1.5s" }}>
        <Sparkles size={36} />
      </div>
      <div className="sparkle-particle bottom-16 left-[20%] text-accent/40" style={{ animationDelay: "2.5s" }}>
        <Sparkles size={24} />
      </div>
      <div className="sparkle-particle bottom-20 right-[25%] text-accent/50" style={{ animationDelay: "3s" }}>
        <Sparkles size={32} />
      </div>

      <div className="container-max relative z-10">
        {/* Main Offer Hero Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14">
          
          {/* Left / Info Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent font-bold text-xs sm:text-sm tracking-widest uppercase mb-4 shadow-sm"
            >
              <Gift size={16} className="text-accent" />
              <span>{LUCKY_DRAW_CONFIG.badge}</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4"
            >
              {LUCKY_DRAW_CONFIG.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-white/85 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              {LUCKY_DRAW_CONFIG.subheadline}
            </motion.p>

            {/* Countdown Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="countdown-box rounded-2xl p-4 sm:p-6 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
                <span className="text-xs uppercase tracking-widest font-bold text-accent flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>Grand Lucky Draw Countdown</span>
                </span>
                <span className="text-[11px] text-white/70 font-mono">
                  {LUCKY_DRAW_CONFIG.drawDateDisplay}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="bg-primary-900/80 rounded-xl p-2 sm:p-3 border border-accent/20">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent block font-semibold">
                    Days
                  </span>
                </div>

                <div className="bg-primary-900/80 rounded-xl p-2 sm:p-3 border border-accent/20">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent block font-semibold">
                    Hours
                  </span>
                </div>

                <div className="bg-primary-900/80 rounded-xl p-2 sm:p-3 border border-accent/20">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-white">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent block font-semibold">
                    Mins
                  </span>
                </div>

                <div className="bg-primary-900/80 rounded-xl p-2 sm:p-3 border border-accent/20">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-accent animate-pulse">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-accent block font-semibold">
                    Secs
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTAs & Terms Link */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href={getOfferWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !py-3.5 !px-7 !text-xs sm:!text-sm flex items-center gap-2 shadow-xl"
              >
                <MessageCircle size={18} />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => setShowTcModal(true)}
                className="text-xs text-white/70 hover:text-accent underline underline-offset-4 flex items-center gap-1 transition-colors cursor-pointer py-2"
              >
                <FileText size={14} />
                <span>Terms & Conditions apply</span>
              </button>
            </div>
          </div>

          {/* Right / Activa Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/10 to-white/5 border border-white/20 backdrop-blur-xl shadow-2xl overflow-hidden group">
              {/* Gold glow circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/25 rounded-full blur-3xl pointer-events-none" />

              {/* Top Banner Tag */}
              <div className="flex items-center justify-between mb-4 relative z-10">
                <span className="px-3 py-1 bg-accent text-primary font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm">
                  Grand Prize
                </span>
                <span className="text-xs text-white/80 font-semibold flex items-center gap-1">
                  <Sparkles size={13} className="text-accent" /> Assured Entry on Booking
                </span>
              </div>

              {/* Activa Image with fallback */}
              <div className="relative z-10 w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
                {imgError ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                    <Gift size={64} className="text-accent mb-3" />
                    <h4 className="font-display font-bold text-xl text-white">Brand New Activa</h4>
                    <p className="text-xs text-white/70 mt-1">
                      Grand Lucky Draw on Every 1 & 2 BHK Home Booking
                    </p>
                  </div>
                ) : (
                  <img
                    src={LUCKY_DRAW_CONFIG.activaImage}
                    alt="Win a brand new Honda Activa scooter with Shivparvati Apartments booking offer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Bottom Badge */}
              <div className="relative z-10 text-center mt-2 pt-3 border-t border-white/10">
                <p className="font-display text-base sm:text-lg font-bold text-accent">
                  Brand New Honda Activa 6G
                </p>
                <p className="text-xs text-white/70">
                  Keys handed over live on draw date to lucky winner!
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Steps to Win */}
        <div className="bg-white/5 rounded-3xl p-6 sm:p-10 border border-white/10 backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">
              Simple 4-Step Process
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold mt-1">
              How to Participate in the Lucky Draw
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LUCKY_DRAW_CONFIG.steps.map((step, idx) => {
              const StepIcon = stepIcons[idx] || Sparkles;
              return (
                <div
                  key={step.stepNumber}
                  className="bg-white/10 rounded-2xl p-5 border border-white/15 relative flex flex-col justify-between hover:bg-white/15 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono font-bold text-xs text-accent px-2.5 py-1 bg-accent/20 rounded-lg border border-accent/30">
                        Step {step.stepNumber}
                      </span>
                      <StepIcon size={20} className="text-accent" />
                    </div>
                    <h4 className="font-display font-bold text-base sm:text-lg mb-1 text-white">
                      {step.title}
                    </h4>
                    <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {idx < 3 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-accent">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      <AnimatePresence>
        {showTcModal && (
          <div className="modal-backdrop flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white text-charcoal rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-black/10 relative"
              role="dialog"
              aria-modal="true"
              aria-label="Lucky Draw Terms & Conditions"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10">
                <div className="flex items-center gap-2 text-primary">
                  <FileText size={20} className="text-accent" />
                  <h3 className="font-display font-bold text-lg sm:text-xl">
                    Lucky Draw Terms & Conditions
                  </h3>
                </div>
                <button
                  onClick={() => setShowTcModal(false)}
                  className="w-8 h-8 rounded-full bg-surface hover:bg-surface-alt flex items-center justify-center text-charcoal transition-colors"
                  aria-label="Close Terms Modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal-light max-h-80 overflow-y-auto pr-2">
                {LUCKY_DRAW_CONFIG.termsAndConditions.map((tc, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-accent flex-shrink-0 mt-0.5" />
                    <span>{tc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                <span className="text-[11px] text-charcoal-muted">
                  Shivparvati Developers &bull; Pune
                </span>
                <button
                  onClick={() => setShowTcModal(false)}
                  className="btn-primary !py-2 !px-5 !text-xs"
                >
                  I Understand
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
