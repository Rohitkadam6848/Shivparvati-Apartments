import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, MessageCircle, PhoneCall, Download, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  PROJECT_NAME,
  APARTMENTS,
  DISPLAY_WHATSAPP,
  PHONE_NUMBER,
  BROCHURE_URL,
  BROCHURE_FILENAME,
  getInquiryWhatsAppUrl,
} from "../data/siteConfig";

const initialForm = { name: "", phone: "", config: "1 BHK", message: "" };

export default function InquirySection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your full name";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Please enter a valid 10-digit Indian mobile number";
    if (!form.config) errs.config = "Please select 1 BHK or 2 BHK";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const url = getInquiryWhatsAppUrl(form);
    window.open(url, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 6000);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="inquiry" className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full translate-y-1/2 -translate-x-1/3 blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        <SectionHeading
          label="Direct Developer Enquiry"
          title={`Interested in ${PROJECT_NAME}?`}
          subtitle="Leave your contact details to connect directly with the builder on WhatsApp for immediate brochures, floor layouts, and pricing."
          light
        />

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 text-center"
            >
              <CheckCircle size={56} className="text-[#25D366] mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Enquiry Sent to WhatsApp!
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Your details have been pre-filled for WhatsApp chat ({DISPLAY_WHATSAPP}). Our team will get back to you promptly.
              </p>
              <a
                href={`tel:${DISPLAY_WHATSAPP}`}
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-accent text-white rounded-xl text-sm font-semibold hover:bg-accent-600 transition-colors"
              >
                <PhoneCall size={16} />
                Or Call Us Directly: {DISPLAY_WHATSAPP}
              </a>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                {/* Name */}
                <div>
                  <label htmlFor="inquiry-name" className="block text-white/80 text-sm mb-1.5 font-medium">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={form.name}
                    onChange={handleChange("name")}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${
                      errors.name ? "border-red-400" : "border-white/20"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="inquiry-phone" className="block text-white/80 text-sm mb-1.5 font-medium">
                    WhatsApp / Phone Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="inquiry-phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${
                      errors.phone ? "border-red-400" : "border-white/20"
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle size={12} /> {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Apartment Type: ONLY 1 BHK & 2 BHK */}
              <div className="mb-4">
                <label htmlFor="inquiry-config" className="block text-white/80 text-sm mb-1.5 font-medium">
                  Interested Apartment Type <span className="text-red-400">*</span>
                </label>
                <select
                  id="inquiry-config"
                  value={form.config}
                  onChange={handleChange("config")}
                  className={`w-full px-4 py-3 bg-primary border rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${
                    errors.config ? "border-red-400" : "border-white/20"
                  }`}
                >
                  <option value="1 BHK" className="text-white bg-primary">
                    1 BHK Apartment
                  </option>
                  <option value="2 BHK" className="text-white bg-primary">
                    2 BHK Apartment
                  </option>
                </select>
                {errors.config && (
                  <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} /> {errors.config}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="inquiry-message" className="block text-white/80 text-sm mb-1.5 font-medium">
                  Message (Optional)
                </label>
                <textarea
                  id="inquiry-message"
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Ask about floor availability, site visit timings, or loan assistance..."
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all resize-none"
                />
              </div>

              {/* Submit to WhatsApp (7387099810) */}
              <button type="submit" className="btn-whatsapp w-full !rounded-xl !py-4 !text-sm shadow-xl">
                <MessageCircle size={20} />
                Send Enquiry via WhatsApp ({DISPLAY_WHATSAPP})
              </button>

              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-white/60 text-xs flex items-center gap-1.5">
                  <FileText size={14} className="text-accent" />
                  <span>Looking for instant project details?</span>
                </p>
                <a
                  href={BROCHURE_URL}
                  download={BROCHURE_FILENAME}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white text-white hover:text-primary text-xs font-semibold rounded-lg transition-all active:scale-95 border border-white/20"
                >
                  <Download size={14} className="text-accent" />
                  Download Brochure
                </a>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
}
