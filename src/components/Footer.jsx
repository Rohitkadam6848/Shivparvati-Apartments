import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
  Download,
  ShieldCheck,
  ExternalLink,
  FileText,
  X,
} from "lucide-react";
import {
  PROJECT_NAME,
  BUILDER_NAME,
  SOCIAL_LINKS,
  NAV_LINKS,
  ADDRESS,
  PHONE_NUMBER,
  DISPLAY_WHATSAPP,
  ADDITIONAL_PHONES,
  getWhatsAppUrl,
  BROCHURE_URL,
  BROCHURE_FILENAME,
  RERA_CONFIG,
  FOOTER_DISCLAIMER,
} from "../data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  return (
    <footer className="bg-primary text-white pt-16 pb-28 lg:pb-14 border-t border-white/10 relative">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Developer */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center font-display font-bold text-xl text-white shadow-md">
                {PROJECT_NAME.charAt(0)}
              </div>
              <span className="font-display font-bold text-xl text-white">
                {PROJECT_NAME}
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A premium 1 & 2 BHK residential development by {BUILDER_NAME} in Gokulnagar, Kondhwa, Pune. Crafted for elevated family living with rooftop amenities and 100% legal transparency.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.facebook && (
                <a
                  href={SOCIAL_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
              )}
              {SOCIAL_LINKS.instagram && (
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
              )}
              {SOCIAL_LINKS.youtube && (
                <a
                  href={SOCIAL_LINKS.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-accent hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/70 text-xs sm:text-sm hover:text-accent transition-colors flex items-center gap-1.5"
                  >
                    <ArrowRight size={13} className="text-accent" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={BROCHURE_URL}
                  download={BROCHURE_FILENAME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-xs sm:text-sm font-semibold hover:underline flex items-center gap-1.5 pt-1"
                >
                  <Download size={14} />
                  Download Brochure (PDF)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: MahaRERA & Statutory */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-5">MahaRERA Info</h4>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/15 space-y-3 mb-4">
              <div className="flex items-center gap-2 text-accent">
                <ShieldCheck size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Registered Project</span>
              </div>
              <p className="font-mono font-bold text-sm text-white">
                RERA No: {RERA_CONFIG.reraNumber}
              </p>
              <p className="text-xs text-white/70 leading-snug">
                Project: {RERA_CONFIG.projectName}
              </p>
              <div className="pt-2 border-t border-white/10 space-y-2">
                <a
                  href={RERA_CONFIG.certificatePdfUrl}
                  download={RERA_CONFIG.downloadFileName}
                  className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold hover:underline"
                >
                  <Download size={13} />
                  <span>Download RERA Certificate (PDF)</span>
                </a>
                <br />
                <a
                  href={RERA_CONFIG.mahareraPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-accent text-xs transition-colors"
                >
                  <span>Verify at maharerait.maharashtra.gov.in</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Site Office */}
          <div>
            <h4 className="font-display text-lg font-bold text-white mb-5">Contact Sales</h4>
            <ul className="space-y-3 text-sm text-white/70 mb-5">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25D366] font-semibold hover:underline"
                >
                  <MessageCircle size={16} />
                  WhatsApp: +91 {DISPLAY_WHATSAPP}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${DISPLAY_WHATSAPP}`}
                  className="hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Phone size={15} className="text-accent flex-shrink-0" />
                  <span>Call: {PHONE_NUMBER}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin size={15} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-xs leading-relaxed text-white/75">
                  {ADDRESS.full}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="border-t border-white/10 pt-6 pb-4">
          <p className="text-xs text-white/60 leading-relaxed text-center sm:text-left bg-white/5 p-4 rounded-xl border border-white/10">
            {FOOTER_DISCLAIMER}
          </p>
        </div>

        {/* Bottom Copyright and Legal Modals */}
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            &copy; {currentYear} {BUILDER_NAME}. All rights reserved. MahaRERA No. {RERA_CONFIG.reraNumber}.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveModal("privacy")}
              className="hover:text-accent underline transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>&bull;</span>
            <button
              onClick={() => setActiveModal("terms")}
              className="hover:text-accent underline transition-colors cursor-pointer"
            >
              Terms of Use
            </button>
            <span>&bull;</span>
            <a
              href={RERA_CONFIG.certificatePdfUrl}
              download={RERA_CONFIG.downloadFileName}
              className="hover:text-accent underline transition-colors"
            >
              RERA Certificate
            </a>
          </div>
        </div>
      </div>

      {/* Privacy Policy & Terms Modal */}
      <AnimatePresence>
        {activeModal && (
          <div className="modal-backdrop flex items-center justify-center p-4 z-50 text-charcoal">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl border border-black/10 relative max-h-[80vh] flex flex-col"
              role="dialog"
              aria-modal="true"
              aria-label={activeModal === "privacy" ? "Privacy Policy" : "Terms of Use"}
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-black/10">
                <h3 className="font-display font-bold text-xl text-primary">
                  {activeModal === "privacy" ? "Privacy Policy" : "Terms of Use"}
                </h3>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-8 h-8 rounded-full bg-surface hover:bg-surface-alt flex items-center justify-center"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 text-xs sm:text-sm text-charcoal-light space-y-3 leading-relaxed">
                {activeModal === "privacy" ? (
                  <>
                    <p>
                      At <strong>{BUILDER_NAME}</strong>, we respect your privacy. Any personal information (name, contact number, email) submitted via this website or WhatsApp is collected solely for the purpose of communicating project information, scheduling site visits, and answering inquiries regarding {PROJECT_NAME}.
                    </p>
                    <p>
                      We do not sell, rent, or lease your personal contact details to third-party telemarketers.
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      The information and visual renderings presented on this website are conceptual representations of <strong>{PROJECT_NAME}</strong> located on Katraj-Kondhwa Road, Pune.
                    </p>
                    <p>
                      The project is registered under <strong>MahaRERA No. {RERA_CONFIG.reraNumber}</strong>. Buyers are advised to review all statutory agreements, sanctioned plans, and title documents at our site office or on the MahaRERA portal before booking.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-black/10 flex justify-end">
                <button
                  onClick={() => setActiveModal(null)}
                  className="btn-primary !py-2 !px-5 !text-xs"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </footer>
  );
}
