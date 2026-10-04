import { motion } from "framer-motion";
import { Award, Building, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  BUILDER_NAME,
  BUILDER_DESCRIPTION,
  BUILDER_EXPERIENCE,
  BUILDER_COMPLETED_PROJECTS,
  BUILDER_HAPPY_FAMILIES,
  PROJECT_CREDITS,
} from "../data/siteConfig";

const stats = [
  { icon: Award, value: BUILDER_EXPERIENCE, label: "Years in Real Estate" },
  { icon: Building, value: BUILDER_COMPLETED_PROJECTS, label: "Successful Projects" },
  { icon: Users, value: BUILDER_HAPPY_FAMILIES, label: "Happy Homeowners" },
  { icon: ShieldCheck, value: "100%", label: "MahaRERA Compliant" },
];

export default function BuilderSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          label="Trusted Developer"
          title={`About ${BUILDER_NAME}`}
          subtitle="Delivering structural excellence, transparent dealings, and timely possession in Pune."
        />

        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-accent/15 rounded-3xl flex items-center justify-center shadow-lg shadow-accent/10">
              <span className="font-display text-3xl font-bold text-accent">
                {BUILDER_NAME.charAt(0)}
              </span>
            </div>
            <p className="text-charcoal-light text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {BUILDER_DESCRIPTION}
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card p-6 text-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                  <stat.icon
                    size={22}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>
                <p className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-charcoal-lighter text-xs sm:text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-surface rounded-3xl p-6 sm:p-8 border border-black/5"
          >
            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Clear Legal Title</h4>
                  <p className="text-xs text-charcoal-lighter">Complete legal vetting by {PROJECT_CREDITS.legalAdvisor}.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Robust RCC Design</h4>
                  <p className="text-xs text-charcoal-lighter">Earthquake resistant structure by {PROJECT_CREDITS.rccConsultant}.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-primary text-sm mb-1">Architectural Finesse</h4>
                  <p className="text-xs text-charcoal-lighter">Designed by {PROJECT_CREDITS.architect}.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
