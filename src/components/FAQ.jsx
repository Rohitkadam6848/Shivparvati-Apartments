import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { FAQS, getWhatsAppUrl, DISPLAY_WHATSAPP } from "../data/siteConfig";
import "./FAQ.css";

function FAQAccordionItem({ faq, isOpen, onToggle, index }) {
  return (
    <div className="faq-accordion-item border-b border-black/5 last:border-b-0 px-4 sm:px-6">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group cursor-pointer"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span
          className={`font-semibold text-sm sm:text-base pr-4 transition-colors ${
            isOpen ? "text-accent" : "text-primary group-hover:text-accent"
          }`}
        >
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? "bg-accent text-white rotate-180"
              : "bg-surface text-charcoal-lighter group-hover:bg-accent/15 group-hover:text-accent"
          }`}
        >
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-charcoal-light text-xs sm:text-sm leading-relaxed pr-6 sm:pr-10">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="container-max">
        <SectionHeading
          label="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Shivparvati Apartments, pricing, MahaRERA compliance, and home loans."
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl sm:rounded-3xl border border-black/10 shadow-luxury overflow-hidden"
          >
            {FAQS.map((faq, i) => (
              <FAQAccordionItem
                key={i}
                index={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>

          {/* Quick Help WhatsApp Footer */}
          <div className="mt-8 text-center bg-white rounded-2xl p-5 border border-black/5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-left">
              <HelpCircle size={20} className="text-accent flex-shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-semibold text-primary">
                  Have a specific question not covered here?
                </p>
                <p className="text-xs text-charcoal-muted">
                  Our sales team is available 7 days a week.
                </p>
              </div>
            </div>

            <a
              href={getWhatsAppUrl("Hello, I have a question about Shivparvati Apartments.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp !py-2.5 !px-4 !text-xs whitespace-nowrap flex items-center gap-1.5"
            >
              <MessageCircle size={15} />
              <span>Ask on WhatsApp (+91 {DISPLAY_WHATSAPP})</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
