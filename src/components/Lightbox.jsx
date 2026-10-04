import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw, Image as ImageIcon } from "lucide-react";
import "./Lightbox.css";

export default function Lightbox({ images, initialIndex = 0, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [imgError, setImgError] = useState({});
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
      setZoomLevel(1);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, initialIndex]);

  const handleNext = useCallback(() => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  }, [images]);

  const handlePrev = useCallback(() => {
    if (!images || images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  }, [images]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.3, 1));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "+" || e.key === "=") {
        handleZoomIn();
      } else if (e.key === "-") {
        handleZoomOut();
      } else if (e.key === "0") {
        handleResetZoom();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext(); // swipe left -> next
      } else {
        handlePrev(); // swipe right -> prev
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  if (!isOpen || !images || images.length === 0) return null;

  const currentItem = images[currentIndex] || {};
  const currentSrc = currentItem.src || currentItem;
  const currentCaption = currentItem.caption || currentItem.alt || `Site Construction Photo ${currentIndex + 1}`;
  const currentStageTag = currentItem.stageTag || "";
  const currentDate = currentItem.date || "";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-black/95 lightbox-backdrop flex flex-col justify-between p-3 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label="Image Lightbox"
      >
        {/* Top Bar: Counter & Controls */}
        <div className="flex items-center justify-between text-white z-20 pb-2">
          <div className="flex items-center gap-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-accent bg-accent/20 px-3 py-1 rounded-full border border-accent/40">
              {currentIndex + 1} / {images.length}
            </span>
            {currentStageTag && (
              <span className="hidden sm:inline-block text-xs text-white/80 bg-white/10 px-2.5 py-1 rounded-full">
                {currentStageTag}
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleZoomIn}
              className="lightbox-control-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15"
              aria-label="Zoom in"
              title="Zoom In (+)"
            >
              <ZoomIn size={18} />
            </button>
            <button
              onClick={handleZoomOut}
              className="lightbox-control-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center border border-white/15"
              aria-label="Zoom out"
              title="Zoom Out (-)"
            >
              <ZoomOut size={18} />
            </button>
            {zoomLevel > 1 && (
              <button
                onClick={handleResetZoom}
                className="lightbox-control-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-accent hover:bg-accent-600 text-white flex items-center justify-center shadow-md"
                aria-label="Reset zoom"
                title="Reset Zoom (0)"
              >
                <RotateCcw size={16} />
              </button>
            )}
            <button
              onClick={onClose}
              className="lightbox-control-btn w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-red-500/20 hover:bg-red-500/40 text-red-300 hover:text-white flex items-center justify-center border border-red-500/30 ml-2"
              aria-label="Close Lightbox"
              title="Close (Esc)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Center: Image Display with Zoom & Swipe */}
        <div
          className="relative flex-1 flex items-center justify-center overflow-hidden lightbox-img-container my-2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Prev Button */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="lightbox-control-btn absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-accent text-white flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Main Image Container */}
          <div className="w-full h-full flex items-center justify-center p-2">
            {imgError[currentIndex] ? (
              <div className="w-full max-w-md h-72 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center text-white/60 p-6 text-center">
                <ImageIcon size={48} className="text-accent mb-3" />
                <p className="font-semibold text-white">Live Site Photo</p>
                <p className="text-xs text-white/60 mt-1">{currentCaption}</p>
                <span className="text-[11px] text-accent mt-3 px-3 py-1 bg-accent/10 rounded-full">
                  Katraj-Kondhwa Road, Pune
                </span>
              </div>
            ) : (
              <motion.img
                key={currentIndex}
                src={currentSrc}
                alt={currentCaption}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onError={() => setImgError((prev) => ({ ...prev, [currentIndex]: true }))}
                className="max-h-[75vh] max-w-[92vw] sm:max-w-[85vw] object-contain rounded-xl shadow-2xl transition-transform duration-200 cursor-zoom-in"
                onClick={() => setZoomLevel((prev) => (prev > 1 ? 1 : 1.8))}
              />
            )}
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="lightbox-control-btn absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-accent text-white flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Bottom Bar: Caption and Date */}
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3 sm:p-4 text-center max-w-3xl mx-auto w-full z-20">
          <p className="text-white text-xs sm:text-sm font-medium leading-relaxed">
            {currentCaption}
          </p>
          {currentDate && (
            <p className="text-accent text-[11px] font-semibold mt-1">
              Captured: {currentDate} &bull; Verified on Site
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
