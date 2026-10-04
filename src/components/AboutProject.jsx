import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Download, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  PROJECT_NAME,
  PROJECT_DESCRIPTION,
  PROJECT_HIGHLIGHTS,
  PROJECT_FEATURES,
  BUILDER_NAME,
  PROJECT_CREDITS,
  BROCHURE_URL,
  BROCHURE_FILENAME,
} from "../data/siteConfig";

const statItems = [
  { label: "Structure", value: PROJECT_HIGHLIGHTS.totalFloors, icon: "Building2" },
  { label: "Configuration", value: "1 & 2 BHK", icon: "LayoutGrid" },
  { label: "Location", value: "Katraj-Kondhwa", icon: "MapPin" },
  { label: "Status", value: "Under Construction", icon: "HardHat" },
  { label: "RERA Status", value: "MahaRERA Approved", icon: "ShieldCheck" },
  { label: "Rooftop Deck", value: "5+ Amenities", icon: "Sparkles" },
];

export default function AboutProject() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          label="About the Landmark"
          title={`Welcome to ${PROJECT_NAME}`}
          subtitle={`A premium residential sanctuary by ${BUILDER_NAME}, crafted for modern families seeking elevated living and prime connectivity in South Pune.`}
        />

        {/* Project Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
            {PROJECT_DESCRIPTION}
          </p>
        </motion.div>

        {/* Stats Grid – Equal Heights & Centered Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-14 sm:mb-16">
          {statItems.map((stat, i) => {
            const Icon = Icons[stat.icon] || Icons.Info;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                className="bg-surface rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center border border-black/[0.05] hover:shadow-luxury hover:-translate-y-1 hover:border-accent/30 transition-all duration-300 group min-h-[130px]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 mx-auto mb-2.5 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Icon size={18} className="text-accent group-hover:text-white transition-colors" />
                </div>
                <p className="font-display font-bold text-primary-900 text-sm sm:text-base leading-snug">
                  {stat.value}
                </p>
                <p className="text-charcoal-muted text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {PROJECT_FEATURES.map((feature, i) => {
            const Icon = Icons[feature.icon] || Icons.Star;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="card-luxury p-6 sm:p-7 flex flex-col justify-between text-center group"
              >
                <div>
                  <div className="w-13 h-13 w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-105 group-hover:shadow-gold-glow transition-all duration-300">
                    <Icon
                      size={24}
                      className="text-accent group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold text-primary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal-light text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Responsive Brochure Download Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          {/* Decorative ambient blur */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-accent text-xs font-bold uppercase tracking-wider mb-3">
              <FileText size={14} />
              <span>Official E-Brochure</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2 tracking-tight">
              Download Project Brochure
            </h3>
            <p className="text-white/80 text-xs sm:text-sm md:text-base leading-relaxed">
              Get complete details about {PROJECT_NAME} including 1 & 2 BHK floor layouts, rooftop amenities, architectural specifications, and connectivity map.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-auto flex-shrink-0 flex justify-center">
            <a
              href={BROCHURE_URL}
              download={BROCHURE_FILENAME}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto !py-3.5 sm:!py-4 !px-7 sm:!px-8 !text-xs sm:!text-sm !rounded-xl shadow-gold-glow flex items-center justify-center gap-2 group"
            >
              <Download size={18} className="text-white group-hover:translate-y-0.5 transition-transform" />
              <span>Download Official Brochure</span>
            </a>
          </div>
        </motion.div>

        {/* Project Credits & Consultants Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface rounded-2xl p-5 sm:p-6 border border-black/[0.05] flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          <div>
            <p className="text-accent font-bold text-[11px] uppercase tracking-widest mb-1">
              Project Architecture & RCC Consultants
            </p>
            <p className="text-charcoal-light text-xs sm:text-sm font-medium">
              Architect: <strong className="text-primary-900">{PROJECT_CREDITS.architect}</strong> &bull; RCC: <strong className="text-primary-900">{PROJECT_CREDITS.rccConsultant}</strong> &bull; Legal: <strong className="text-primary-900">{PROJECT_CREDITS.legalAdvisor}</strong>
            </p>
          </div>
          <div className="flex items-center gap-2 bg-primary-900 text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm flex-shrink-0">
            <Icons.CheckCircle size={15} className="text-accent" />
            <span>{PROJECT_CREDITS.reraStatus}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

