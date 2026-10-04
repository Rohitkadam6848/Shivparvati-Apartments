import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { FLOOR_PLANS } from "../data/siteConfig";

export default function FloorPlanModal({ apartment, onClose }) {
  const [zoom, setZoom] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find initial index based on apartment type
  useEffect(() => {
    const idx = FLOOR_PLANS.findIndex((p) => p.label.toLowerCase().includes(apartment.type.toLowerCase().split(" ")[0]));
    if (idx >= 0) setCurrentIndex(idx);
  }, [apartment]);

  const currentPlan = FLOOR_PLANS[currentIndex];

  const handlePrev = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev - 1 + FLOOR_PLANS.length) % FLOOR_PLANS.length);
  }, []);

  const handleNext = useCallback(() => {
    setZoom(1);
    setCurrentIndex((prev) => (prev + 1) % FLOOR_PLANS.length);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 3));
      if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 0.5));
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, handlePrev, handleNext]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-backdrop flex items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-black/5">
            <div>
              <h3 className="font-display text-lg font-bold text-primary">
                {currentPlan.label}
              </h3>
              <p className="text-charcoal-lighter text-sm">
                {currentIndex + 1} of {FLOOR_PLANS.length} floor plans
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoom((z) => Math.max(z - 0.25, 0.5))}
                className="p-2 rounded-lg hover:bg-surface text-charcoal-light transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut size={18} />
              </button>
              <span className="text-sm text-charcoal-lighter font-mono min-w-[4rem] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={() => setZoom((z) => Math.min(z + 0.25, 3))}
                className="p-2 rounded-lg hover:bg-surface text-charcoal-light transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn size={18} />
              </button>
              <button
                onClick={() => setZoom(1)}
                className="p-2 rounded-lg hover:bg-surface text-charcoal-light transition-colors"
                aria-label="Reset zoom"
              >
                <RotateCcw size={18} />
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-red-50 text-charcoal-light hover:text-red-500 transition-colors ml-2"
                aria-label="Close floor plan"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative overflow-auto bg-surface" style={{ maxHeight: "calc(90vh - 130px)" }}>
            <div
              className="flex items-center justify-center min-h-[400px] p-8 cursor-grab active:cursor-grabbing"
              style={{ minWidth: zoom > 1 ? `${zoom * 100}%` : "100%" }}
            >
              <img
                src={currentPlan.image}
                alt={currentPlan.label}
                className="max-w-full transition-transform duration-300 ease-out rounded-lg shadow-lg"
                style={{ transform: `scale(${zoom})`, transformOrigin: "center center" }}
                onClick={() => setZoom(zoom < 1.5 ? 1.5 : 1)}
              />
            </div>

            {/* Navigation Arrows */}
            {FLOOR_PLANS.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
                  aria-label="Previous floor plan"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
                  aria-label="Next floor plan"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Footer Thumbnails */}
          {FLOOR_PLANS.length > 1 && (
            <div className="flex gap-2 p-3 border-t border-black/5 bg-white overflow-x-auto">
              {FLOOR_PLANS.map((plan, i) => (
                <button
                  key={plan.id}
                  onClick={() => { setCurrentIndex(i); setZoom(1); }}
                  className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                    i === currentIndex
                      ? "border-accent shadow-md"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={plan.image} alt={plan.label} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
