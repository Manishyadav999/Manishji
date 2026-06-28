import { useState } from "react";
import { FAQS_DATA } from "../data/products";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openFaqId, setOpenFaqId] = useState<string | null>("faq1");

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 uppercase tracking-tight">
            Frequently Asked Industrial Questions
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full mx-auto"></div>
          <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Find answers on crystalline orientations, resizing options, diamond tolerances, and custom casing sizing configurations.
          </p>
        </div>

        {/* Accordion FAQ Grid */}
        <div className="space-y-4 text-left">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-accent-400 shadow-md ring-1 ring-accent-400/20"
                    : "border-slate-200/70 shadow-sm hover:border-slate-300"
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Accordion Trigger Button */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
                  id={`faq-trigger-${faq.id}`}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-accent-500" : "text-slate-400"}`} />
                    <span className="font-display font-bold text-sm sm:text-base text-primary-900 uppercase tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent-500" : ""}`} />
                </button>

                {/* Collapsible content block */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed bg-slate-50/45">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
