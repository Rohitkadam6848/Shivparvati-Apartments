import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Download,
  ExternalLink,
  Eye,
  FileCheck2,
  Calendar,
  Building,
  UserCheck,
  MapPin,
  X,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { RERA_CONFIG } from "../data/siteConfig";
import "./ReraSection.css";

export default function ReraSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="rera" className="section-padding bg-surface-alt/60 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <SectionHeading
          label="Statutory Approvals"
          title={RERA_CONFIG.title}
          subtitle={RERA_CONFIG.subtitle}
        />

        <div className="max-w-5xl mx-auto">
          {/* Main RERA Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rera-card-gradient card-luxury p-6 sm:p-10 border-2 border-accent/25 relative"
          >
            {/* Top Ribbon / Trust Seal */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-black/10">
              <div className="flex items-center gap-3.5">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-600 text-white flex items-center justify-center shadow-lg shadow-accent/30 rera-badge-glow flex-shrink-0">
                  <ShieldCheck size={32} />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-accent">
                    Government of Maharashtra Verified
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-primary">
                    MahaRERA Registration Details
                  </h3>
                </div>
              </div>

              {/* RERA Registration Number Box */}
              <div className="bg-primary text-white px-4 py-2.5 rounded-xl border border-accent/40 flex items-center gap-2 self-stretch sm:self-auto justify-center shadow-md">
                <FileCheck2 size={18} className="text-accent flex-shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] text-accent font-bold tracking-widest uppercase">
                    MahaRERA Number
                  </p>
                  <p className="font-mono font-bold text-sm sm:text-base tracking-wider text-white">
                    {RERA_CONFIG.reraNumber}
                  </p>
                </div>
              </div>
            </div>

            {/* Grid of Verified Project Particulars */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-8">
              <div className="bg-white/80 rounded-xl p-4 border border-black/5 shadow-sm">
                <div className="flex items-center gap-2 text-accent mb-1.5">
                  <Building size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Project Name</span>
                </div>
                <p className="font-semibold text-primary text-sm sm:text-base">
                  {RERA_CONFIG.projectName}
                </p>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-black/5 shadow-sm">
                <div className="flex items-center gap-2 text-accent mb-1.5">
                  <UserCheck size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Promoter</span>
                </div>
                <p className="font-semibold text-primary text-sm sm:text-base">
                  {RERA_CONFIG.promoter}
                </p>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-black/5 shadow-sm">
                <div className="flex items-center gap-2 text-accent mb-1.5">
                  <MapPin size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Location</span>
                </div>
                <p className="font-semibold text-primary text-xs sm:text-sm">
                  {RERA_CONFIG.location}
                </p>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-black/5 shadow-sm">
                <div className="flex items-center gap-2 text-accent mb-1.5">
                  <Calendar size={16} />
                  <span className="text-xs font-bold uppercase tracking-wider">Validity Period</span>
                </div>
                <p className="font-semibold text-primary text-xs sm:text-sm font-mono">
                  {RERA_CONFIG.validity}
                </p>
              </div>
            </div>

            {/* Highlights List */}
            <div className="bg-surface rounded-2xl p-5 sm:p-6 mb-8 border border-black/5">
              <h4 className="text-xs uppercase tracking-widest font-bold text-primary mb-3 flex items-center gap-2">
                <ShieldCheck size={16} className="text-accent" />
                <span>Buyer Safeguards Under MahaRERA Registration</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {RERA_CONFIG.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-charcoal-light leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons as requested */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              {/* Gold Download Button */}
              <a
                href={RERA_CONFIG.certificatePdfUrl}
                download={RERA_CONFIG.downloadFileName}
                className="btn-primary !py-3.5 !px-6 flex items-center gap-2"
              >
                <Download size={17} />
                <span>Download RERA Certificate (PDF)</span>
              </a>

              {/* View Certificate Modal Button */}
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="btn-outline !py-3.5 !px-6 flex items-center gap-2 bg-white hover:bg-primary"
              >
                <Eye size={17} className="text-accent" />
                <span>View Certificate</span>
              </button>

              {/* Verify on MahaRERA Official Portal */}
              <a
                href={RERA_CONFIG.mahareraPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-semibold text-xs sm:text-sm tracking-wider uppercase rounded-xl shadow-md hover:bg-primary-600 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Verify on MahaRERA</span>
                <ExternalLink size={15} className="text-accent" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* MahaRERA Certificate PDF Modal Viewer */}
      <AnimatePresence>
        {showModal && (
          <div className="modal-backdrop flex items-center justify-center p-3 sm:p-6 z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col rera-pdf-modal border border-black/10"
              role="dialog"
              aria-modal="true"
              aria-label="MahaRERA Certificate Preview"
            >
              {/* Modal Header */}
              <div className="bg-primary text-white p-4 sm:p-5 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={22} className="text-accent" />
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg">
                      MahaRERA Registration Certificate
                    </h3>
                    <p className="text-xs text-white/70">
                      RERA No: {RERA_CONFIG.reraNumber} &bull; {RERA_CONFIG.projectName}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={RERA_CONFIG.certificatePdfUrl}
                    download={RERA_CONFIG.downloadFileName}
                    className="btn-primary !py-2 !px-3 !text-xs hidden sm:inline-flex items-center gap-1.5"
                  >
                    <Download size={14} />
                    Download PDF
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    aria-label="Close Certificate Preview"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Modal Body / PDF iframe */}
              <div className="flex-1 bg-neutral-100 relative">
                <iframe
                  src={`${RERA_CONFIG.certificatePdfUrl}#toolbar=1&navpanes=0`}
                  title="MahaRERA Certificate PDF"
                  className="w-full h-full border-0"
                />
              </div>

              {/* Modal Footer */}
              <div className="bg-white p-3 sm:p-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-charcoal-muted">
                <span>
                  Official Government of Maharashtra MahaRERA Certificate for {RERA_CONFIG.projectName}
                </span>
                <a
                  href={RERA_CONFIG.mahareraPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline flex items-center gap-1"
                >
                  Verify Online on MahaRERA Portal <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
