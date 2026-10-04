import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
  align = "center",
}) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-10 sm:mb-14 ${isCenter ? "text-center" : "text-left"}`}
    >
      {label && (
        <div className={`flex items-center gap-2 mb-2 ${isCenter ? "justify-center" : "justify-start"}`}>
          <span className="w-4 h-[1.5px] bg-accent" />
          <p className="text-accent font-bold text-xs sm:text-sm tracking-[0.25em] uppercase">
            {label}
          </p>
          <span className="w-4 h-[1.5px] bg-accent" />
        </div>
      )}

      <h2
        className={`font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight tracking-tight mb-3.5 ${
          light ? "text-white" : "text-primary-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed ${
            isCenter ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-charcoal-light"}`}
        >
          {subtitle}
        </p>
      )}

      {/* Gold Divider Accent */}
      <div className={`mt-4 flex items-center gap-1.5 ${isCenter ? "justify-center" : "justify-start"}`}>
        <span className="w-8 h-[2px] bg-accent/40 rounded-full" />
        <span className="w-14 h-[3px] bg-accent rounded-full shadow-sm" />
        <span className="w-8 h-[2px] bg-accent/40 rounded-full" />
      </div>
    </motion.div>
  );
}

