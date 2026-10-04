import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_NAME } from "../data/siteConfig";

export default function LoadingScreen({ onLoaded }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Keep splash screen smooth and brief (~1.1s)
    const timer = setTimeout(() => {
      setShow(false);
      if (onLoaded) onLoaded();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#1B2A4A] text-white px-4"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute w-96 h-96 bg-[#C9A84C]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Animated Monogram Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative mb-6"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-br from-[#C9A84C] via-[#E8D38A] to-[#C9A84C] p-[2px] shadow-gold-glow flex items-center justify-center">
              <div className="w-full h-full bg-[#1B2A4A] rounded-[22px] flex items-center justify-center">
                <span className="font-display text-4xl sm:text-5xl font-bold text-accent">
                  {PROJECT_NAME.charAt(0)}
                </span>
              </div>
            </div>

            {/* Glowing ring pulse */}
            <motion.div
              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl border-2 border-accent pointer-events-none"
            />
          </motion.div>

          {/* Project Name */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl font-bold tracking-wide text-white text-center"
          >
            {PROJECT_NAME}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.4 }}
            className="text-accent text-xs uppercase tracking-[0.3em] font-semibold mt-2 text-center"
          >
            Luxury 1 & 2 BHK Residences &bull; Pune
          </motion.p>

          {/* Sleek Loading Line */}
          <div className="w-48 sm:w-56 h-[3px] bg-white/10 rounded-full overflow-hidden mt-8 relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
