import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryLightbox({ images, currentIndex, onClose, onNavigate }) {
  const [idx, setIdx] = useState(currentIndex);

  useEffect(() => setIdx(currentIndex), [currentIndex]);

  const handlePrev = useCallback(() => {
    setIdx((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleNext = useCallback(() => {
    setIdx((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // Keyboard + scroll lock
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  const current = images[idx];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
          aria-label="Close gallery"
        >
          <X size={20} />
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-5 z-10 text-white/60 text-sm font-mono">
          {idx + 1} / {images.length}
        </div>

        {/* Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center text-white transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Image */}
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
        >
          <img
            src={current.src}
            alt={current.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Next */}
        <button
          onClick={handleNext}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center text-white transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>

        {/* Caption */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
          <p className="text-white/80 text-sm">{current.alt}</p>
          <p className="text-white/40 text-xs mt-1">{current.category}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
