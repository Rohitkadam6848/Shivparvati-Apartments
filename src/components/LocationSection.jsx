import { motion } from "framer-motion";
import { MapPin, Navigation, Building, Car, School, ShoppingBag, Eye } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  ADDRESS,
  NEARBY_LANDMARKS,
  GOOGLE_MAPS_EMBED_URL,
  GOOGLE_MAPS_DIRECTIONS_URL,
  PROJECT_NAME,
} from "../data/siteConfig";

const categoryIcons = {
  "Highway & Transit": Car,
  "Temples & Landmarks": Building,
  "Education & Hospitals": School,
  "Shopping & Retail": ShoppingBag,
};

export default function LocationSection() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading
          label="Prime Kondhwa Location"
          title="Exceptional Connectivity in Pune"
          subtitle={`Situated on the Katraj-Kondhwa Road, ${PROJECT_NAME} connects you effortlessly to Satara Highway, Swargate, Market Yard, and IT hubs.`}
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Column — Address & Brochure Landmarks (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Address Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-6 sm:p-8 text-white shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <p className="font-display font-bold text-xl mb-1">{PROJECT_NAME}</p>
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {ADDRESS.full}
                  </p>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-accent-600 transition-colors shadow-lg shadow-accent/20"
                  >
                    <Navigation size={16} />
                    Get Google Maps Directions
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Landmarks Grid from Brochure */}
            <div className="grid sm:grid-cols-2 gap-4">
              {NEARBY_LANDMARKS.map((group, gi) => {
                const Icon = categoryIcons[group.category] || MapPin;
                return (
                  <motion.div
                    key={group.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.08 }}
                    className="bg-surface rounded-2xl p-5 border border-black/5"
                  >
                    <div className="flex items-center gap-2.5 mb-3 pb-2 border-b border-black/5">
                      <div className="w-7 h-7 bg-accent/10 rounded-lg flex items-center justify-center">
                        <Icon size={14} className="text-accent" />
                      </div>
                      <h3 className="font-bold text-primary text-xs uppercase tracking-wider">
                        {group.category}
                      </h3>
                    </div>
                    <ul className="space-y-2">
                      {group.items.map((item) => (
                        <li
                          key={item.name}
                          className="flex items-center justify-between text-xs text-charcoal-light"
                        >
                          <span className="font-medium">{item.name}</span>
                          <span className="text-accent font-bold px-2 py-0.5 bg-white rounded-md border border-accent/20 flex-shrink-0 ml-2">
                            {item.distance}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column — Map & Brochure Plan Preview (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Real Brochure Location Map Preview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-lg border border-black/5 bg-surface group relative"
            >
              <img
                src="/images/WhatsApp Image 2026-08-18 at 11.08.19 PM.jpeg"
                alt={`${PROJECT_NAME} — Location Map & Landmarks`}
                className="w-full h-64 object-cover object-top group-hover:scale-102 transition-transform duration-300"
              />
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <p className="font-semibold text-primary text-sm">Official Project Location Plan</p>
                  <p className="text-charcoal-lighter text-xs">Katraj-Kondhwa Highway Connectivity</p>
                </div>
                <a
                  href="/images/WhatsApp Image 2026-08-18 at 11.08.19 PM.jpeg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-primary/5 hover:bg-primary hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <Eye size={13} />
                  View Full Map
                </a>
              </div>
            </motion.div>

            {/* Google Maps Live Embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl overflow-hidden shadow-lg border border-black/5 h-64"
            >
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${PROJECT_NAME} Google Maps Location`}
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
