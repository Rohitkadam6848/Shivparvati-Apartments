import { useState } from "react";
import { motion } from "framer-motion";
import { Maximize2, MessageCircle, Check, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import FloorPlanModal from "./FloorPlanModal";
import {
  APARTMENTS,
  get1BHKWhatsAppUrl,
  get2BHKWhatsAppUrl,
  PROJECT_NAME,
} from "../data/siteConfig";

export default function ApartmentSection() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const scrollToInquiry = () => {
    const el = document.querySelector("#inquiry");
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="apartments" className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          label="Available Configurations"
          title="Choose Your Ideal 1 & 2 BHK Home"
          subtitle={`Explore the thoughtfully crafted 1 BHK and 2 BHK residences at ${PROJECT_NAME}, featuring spacious layouts, private balconies, and optimal sunlight.`}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {APARTMENTS.map((apt, i) => (
            <motion.div
              key={apt.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="card group hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Apartment Image using real 3D render */}
              <div className="relative h-64 overflow-hidden bg-primary/10">
                <img
                  src={apt.image}
                  alt={`${PROJECT_NAME} — ${apt.type} Apartment`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-accent text-white text-sm font-bold rounded-full shadow-lg">
                    {apt.type} Apartment
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-black/5">
                  <div>
                    <p className="text-charcoal-lighter text-xs uppercase tracking-wider">Pricing</p>
                    <p className="font-display text-2xl font-bold text-primary">{apt.price}</p>
                    <p className="text-accent text-xs font-semibold">{apt.priceNote}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-charcoal-lighter text-xs uppercase tracking-wider">Configuration</p>
                    <p className="font-semibold text-primary">{apt.type}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2.5 mb-6">
                  {apt.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-charcoal-light">
                      <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Actions with WhatsApp direct integration */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedPlan(apt)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-primary/15 rounded-xl text-sm font-semibold text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                  >
                    <Maximize2 size={15} />
                    View Plan
                  </button>
                  <a
                    href={apt.id === "1bhk" ? get1BHKWhatsAppUrl() : get2BHKWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-whatsapp !py-3 !px-4 !text-xs !rounded-xl"
                  >
                    <MessageCircle size={15} />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-charcoal-lighter mb-4 text-sm">
            Need customized payment schedules or booking assistance?
          </p>
          <button onClick={scrollToInquiry} className="btn-outline">
            Schedule Site Visit / Get Callback
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </div>

      {/* Floor Plan Modal */}
      {selectedPlan && (
        <FloorPlanModal
          apartment={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </section>
  );
}
