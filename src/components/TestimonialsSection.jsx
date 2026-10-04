import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { TESTIMONIALS, SHOW_TESTIMONIALS } from "../data/siteConfig";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    if (!TESTIMONIALS || TESTIMONIALS.length === 0) return;
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    if (!TESTIMONIALS || TESTIMONIALS.length === 0) return;
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (!SHOW_TESTIMONIALS || !TESTIMONIALS || TESTIMONIALS.length <= 1) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  // Hidden until enabled with real reviews in siteConfig.js
  if (!SHOW_TESTIMONIALS || !TESTIMONIALS || TESTIMONIALS.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          label="Testimonials"
          title="What Our Homeowners Say"
          subtitle="Hear from families who chose to make their home with us at Shivparvati Apartments."
        />

        <div className="max-w-3xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl shadow-luxury border border-black/5 p-8 sm:p-10 text-center"
          >
            <Quote size={36} className="text-accent/20 mx-auto mb-4" />

            <p className="text-charcoal-light text-base sm:text-lg leading-relaxed italic mb-6">
              "{TESTIMONIALS[current].review}"
            </p>

            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={
                    i < TESTIMONIALS[current].rating
                      ? "text-accent fill-accent"
                      : "text-black/10"
                  }
                />
              ))}
            </div>

            <div>
              <p className="font-display font-bold text-primary text-lg">
                {TESTIMONIALS[current].name}
              </p>
              <p className="text-charcoal-lighter text-xs sm:text-sm">
                {TESTIMONIALS[current].config}
              </p>
            </div>
          </motion.div>

          {TESTIMONIALS.length > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-accent" : "w-2 bg-black/15 hover:bg-black/25"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
