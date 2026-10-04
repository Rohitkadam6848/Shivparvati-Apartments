import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { AMENITIES_DATA } from "../data/amenities";
import "./AmenitiesSection.css";

export default function AmenitiesSection() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (index) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <section id="amenities" className="section-padding amenities-section bg-surface relative">
      <div className="container-max">
        <SectionHeading
          label="World-Class Amenities"
          title="A Lifestyle You Deserve"
          subtitle="Every amenity has been thoughtfully curated across our rooftop terrace and grounds to elevate your everyday family living."
        />

        {/* 4-col Desktop / 2-col Tablet / 1-col Mobile Equal-Height Grid */}
        <div className="amenities-grid">
          {AMENITIES_DATA.map((amenity, index) => {
            const hasError = imageErrors[index];

            return (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  delay: (index % 4) * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="amenity-card">
                  {/* Uniform 3:2 Aspect-Ratio Image Box */}
                  <div className="amenity-img-box">
                    {hasError ? (
                      <div className="amenity-fallback">
                        <Sparkles size={24} className="text-accent mb-1.5" />
                        <span className="font-display font-bold text-xs text-primary leading-tight">
                          {amenity.title}
                        </span>
                        <span className="text-[10px] text-charcoal-muted mt-1">
                          Shivparvati Apartments
                        </span>
                      </div>
                    ) : (
                      <img
                        src={amenity.image}
                        alt={amenity.alt}
                        loading="lazy"
                        onError={() => handleImageError(index)}
                      />
                    )}
                  </div>

                  {/* Aligned Card Body */}
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="amenity-title">
                      {amenity.title}
                    </h3>
                    <p className="amenity-description" title={amenity.description}>
                      {amenity.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
