import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Clock, Navigation } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  BUILDER_NAME,
  PROJECT_NAME,
  ADDRESS,
  PHONE_NUMBER,
  DISPLAY_WHATSAPP,
  ADDITIONAL_PHONES,
  EMAIL,
  OFFICE_HOURS,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  getWhatsAppUrl,
} from "../data/siteConfig";

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          label="Direct Contact"
          title={`Connect with ${BUILDER_NAME}`}
          subtitle={`Reach out to our sales team for on-site visits, floor layout walkthroughs, and best pricing for 1 & 2 BHK flats.`}
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="font-display text-2xl font-bold text-primary mb-1">
                {PROJECT_NAME} Sales Office
              </h3>
              <p className="text-accent font-medium text-sm">By {BUILDER_NAME}</p>
            </motion.div>

            <div className="space-y-5 mb-8">
              {/* Address */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-charcoal-lighter text-xs uppercase tracking-wider mb-0.5">Site Address</p>
                  <p className="text-primary font-medium text-sm">{ADDRESS.full}</p>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent text-xs font-semibold hover:underline mt-1 inline-block"
                  >
                    Get Directions on Google Maps →
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp Direct */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 bg-[#25D366]/15 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-charcoal-lighter text-xs uppercase tracking-wider mb-0.5">WhatsApp Inquiry</p>
                  <p className="text-primary font-semibold text-sm">+91 {DISPLAY_WHATSAPP}</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] text-xs font-semibold hover:underline mt-1 inline-block"
                  >
                    Chat on WhatsApp Now →
                  </a>
                </div>
              </motion.div>

              {/* Booking Numbers */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-charcoal-lighter text-xs uppercase tracking-wider mb-0.5">Booking Contact Numbers</p>
                  <p className="text-primary font-medium text-sm">
                    <a href={`tel:${DISPLAY_WHATSAPP}`} className="hover:text-accent font-semibold">{PHONE_NUMBER}</a>
                    {ADDITIONAL_PHONES.map((num) => (
                      <span key={num}> &bull; <a href={`tel:${num.replace(/\s/g, "")}`} className="hover:text-accent">{num}</a></span>
                    ))}
                  </p>
                </div>
              </motion.div>

              {/* Office Timings */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-charcoal-lighter text-xs uppercase tracking-wider mb-0.5">Site Visit Hours</p>
                  <p className="text-primary font-medium text-sm">{OFFICE_HOURS}</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={`tel:${DISPLAY_WHATSAPP}`}
                className="btn-primary !text-xs"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp !text-xs"
              >
                <MessageCircle size={16} />
                WhatsApp ({DISPLAY_WHATSAPP})
              </a>
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !text-xs"
              >
                <Navigation size={16} />
                Get Directions
              </a>
            </motion.div>
          </div>

          {/* Right — Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-black/5 bg-white min-h-[380px]"
          >
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${PROJECT_NAME} Site Location`}
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
