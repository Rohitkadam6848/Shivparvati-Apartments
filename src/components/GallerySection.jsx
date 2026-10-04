import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Camera, ZoomIn } from "lucide-react";
import SectionHeading from "./SectionHeading";
import GalleryLightbox from "./GalleryLightbox";
import { GALLERY_IMAGES, PROJECT_NAME } from "../data/siteConfig";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = useMemo(() => {
    const cats = [...new Set(GALLERY_IMAGES.map((img) => img.category))];
    return ["All", ...cats];
  }, []);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          label="Project Visuals"
          title={`${PROJECT_NAME} 3D Gallery`}
          subtitle="Explore the modern architectural design, rooftop lifestyle amenities, and prime connectivity layout of Shivparvati Apartments."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface text-charcoal-light hover:bg-surface-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid with real project renders */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {filtered.map((img, i) => (
            <motion.div
              key={img.src + i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 bg-surface"
              onClick={() => {
                const globalIndex = GALLERY_IMAGES.findIndex((g) => g.src === img.src);
                setLightboxIndex(globalIndex >= 0 ? globalIndex : i);
              }}
            >
              <div className="h-64 sm:h-72 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold">{img.alt}</p>
                <p className="text-accent text-xs mt-1 uppercase tracking-wider">{img.category}</p>
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 bg-black/40 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                <ZoomIn size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={GALLERY_IMAGES}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </section>
  );
}
