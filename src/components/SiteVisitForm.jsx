import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  MapPin,
  Sparkles,
  Phone,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  PROJECT_NAME,
  DISPLAY_WHATSAPP,
  ADDRESS,
  getSiteVisitWhatsAppUrl,
} from "../data/siteConfig";
import "./SiteVisitForm.css";

const initialForm = { name: "", phone: "", date: "", time: "11:00 AM" };

export default function SiteVisitForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Please enter your full name";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      errs.phone = "Valid 10-digit mobile number required";
    if (!form.date) errs.date = "Please select a preferred date";
    if (!form.time) errs.time = "Please select a time slot";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const url = getSiteVisitWhatsAppUrl(form);
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

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  return (
    <section id="site-visit" className="section-padding bg-surface-alt/50 relative overflow-hidden">
      <div className="container-max relative z-10">
        <SectionHeading
          label="Experience It In Person"
          title="Book Your Guided Site Visit"
          subtitle="Walk through actual 1 & 2 BHK floor layouts and rooftop amenities with our dedicated project manager."
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-luxury border border-black/10 overflow-hidden"
          >
            <div className="grid md:grid-cols-5">
              {/* Left Column: Information Card */}
              <div className="md:col-span-2 site-visit-card p-8 sm:p-10 flex flex-col justify-between text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center mb-5 border border-accent/30 shadow-md">
                    <CalendarDays size={28} className="text-accent" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">
                    VIP Site Visit
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-6">
                    Visit {PROJECT_NAME} at Gokulnagar, Katraj-Kondhwa Road. Free parking & guided model walk-through available 7 days a week.
                  </p>
                </div>

                <div className="relative z-10 space-y-3 text-xs text-white/70 border-t border-white/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Clock size={15} className="text-accent flex-shrink-0" />
                    <span>Timings: 9:30 AM – 7:00 PM Daily</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-accent flex-shrink-0" />
                    <span className="truncate">{ADDRESS.line1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-accent flex-shrink-0" />
                    <span>Direct: +91 {DISPLAY_WHATSAPP}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="md:col-span-3 p-6 sm:p-10 flex flex-col justify-center">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center py-8">
                    <CheckCircle size={56} className="text-[#25D366] mb-4 animate-bounce" />
                    <h4 className="font-display text-xl font-bold text-primary mb-2">
                      Site Visit Booking Request Ready!
                    </h4>
                    <p className="text-charcoal-lighter text-xs sm:text-sm max-w-sm">
                      WhatsApp is opening to confirm your preferred date with our site executive.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="space-y-4">
                      {/* Name Field */}
                      <div>
                        <label
                          htmlFor="visit-name"
                          className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                        >
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="visit-name"
                          type="text"
                          value={form.name}
                          onChange={handleChange("name")}
                          placeholder="Your Full Name"
                          className={`input-field ${
                            errors.name ? "!border-red-400 !ring-red-200" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Phone Field */}
                      <div>
                        <label
                          htmlFor="visit-phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                        >
                          Mobile Number (WhatsApp) <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="visit-phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange("phone")}
                          placeholder="10-digit mobile number"
                          maxLength={10}
                          className={`input-field ${
                            errors.phone ? "!border-red-400 !ring-red-200" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Date & Time Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label
                            htmlFor="visit-date"
                            className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                          >
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="visit-date"
                            type="date"
                            value={form.date}
                            min={minDate}
                            onChange={handleChange("date")}
                            className={`input-field ${
                              errors.date ? "!border-red-400 !ring-red-200" : ""
                            }`}
                          />
                          {errors.date && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.date}
                            </p>
                          )}
                        </div>

                        <div>
                          <label
                            htmlFor="visit-time"
                            className="block text-xs font-semibold uppercase tracking-wider text-charcoal mb-1.5"
                          >
                            Preferred Time <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="visit-time"
                            value={form.time}
                            onChange={handleChange("time")}
                            className={`input-field ${
                              errors.time ? "!border-red-400 !ring-red-200" : ""
                            }`}
                          >
                            <option value="10:00 AM">10:00 AM</option>
                            <option value="11:30 AM">11:30 AM</option>
                            <option value="01:00 PM">01:00 PM</option>
                            <option value="03:00 PM">03:00 PM</option>
                            <option value="04:30 PM">04:30 PM</option>
                            <option value="06:00 PM">06:00 PM</option>
                          </select>
                          {errors.time && (
                            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                              <AlertCircle size={12} /> {errors.time}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="btn-whatsapp w-full !rounded-xl !py-3.5 mt-2 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg"
                      >
                        <MessageCircle size={18} />
                        <span>Confirm Site Visit on WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
