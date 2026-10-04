import { motion } from "framer-motion";
import {
  Scale,
  Hammer,
  CheckCircle2,
  Download,
  FileCheck,
  ShieldCheck,
  Award,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { LEGAL_QUALITY_CONFIG, PROJECT_CREDITS } from "../data/siteConfig";
import "./LegalQuality.css";

export default function LegalQuality() {
  const { title, subtitle, checklistPdfUrl, checklistFileName, legalPoints, qualityPoints } =
    LEGAL_QUALITY_CONFIG;

  const activeLegalPoints = legalPoints.filter((item) => item.enabled !== false);
  const activeQualityPoints = qualityPoints.filter((item) => item.enabled !== false);

  return (
    <section id="legal-quality" className="section-padding bg-white relative overflow-hidden">
      <div className="container-max relative z-10">
        <SectionHeading
          label="Transparency & Standards"
          title={title}
          subtitle={subtitle}
        />

        {/* Two Columns Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto mb-12">
          
          {/* Column 1: Legal Compliance & Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-luxury p-6 sm:p-8 bg-surface legal-card-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-black/10">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-md">
                  <Scale size={24} className="text-accent" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                    100% Legal Assurance
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">
                    Legal Approvals & Clear Title
                  </h3>
                </div>
              </div>

              {/* Legal Checkpoints List */}
              <div className="space-y-4">
                {activeLegalPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-charcoal-lighter text-xs sm:text-sm mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Advisor footnote */}
            <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-charcoal-muted">
              <span>Legal Counsel: {PROJECT_CREDITS.legalAdvisor}</span>
              <span className="text-accent font-semibold flex items-center gap-1">
                <ShieldCheck size={14} /> Clear Title
              </span>
            </div>
          </motion.div>

          {/* Column 2: Construction Quality & Structural Rigor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card-luxury p-6 sm:p-8 bg-surface quality-card-border flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-black/10">
                <div className="w-12 h-12 rounded-2xl bg-accent text-white flex items-center justify-center shadow-md">
                  <Hammer size={24} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent">
                    Structural Excellence
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">
                    Construction Quality Standards
                  </h3>
                </div>
              </div>

              {/* Quality Checkpoints List */}
              <div className="space-y-4">
                {activeQualityPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/15 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 size={16} strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary text-sm sm:text-base">
                        {item.title}
                      </h4>
                      <p className="text-charcoal-lighter text-xs sm:text-sm mt-0.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RCC Consultant footnote */}
            <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-xs text-charcoal-muted">
              <span>RCC Consultant: {PROJECT_CREDITS.rccConsultant}</span>
              <span className="text-accent font-semibold flex items-center gap-1">
                <Award size={14} /> IS Standard
              </span>
            </div>
          </motion.div>

        </div>

        {/* Download Checklist CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-primary text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
              <FileCheck size={28} />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold">
                Homebuyer Verification Checklist
              </h4>
              <p className="text-white/75 text-xs sm:text-sm mt-0.5">
                Download the complete statutory documents & verification checklist PDF.
              </p>
            </div>
          </div>

          <a
            href={checklistPdfUrl}
            download={checklistFileName}
            className="btn-primary !py-3 !px-5 !text-xs sm:!text-sm flex-shrink-0 flex items-center gap-2 shadow-lg"
          >
            <Download size={16} />
            <span>Download Checklist (PDF)</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
