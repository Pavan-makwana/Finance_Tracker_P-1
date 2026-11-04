"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq1_q"), a: t("faq1_a") },
    { q: t("faq2_q"), a: t("faq2_a") },
    { q: t("faq3_q"), a: t("faq3_a") },
    { q: t("faq4_q"), a: t("faq4_a") },
    { q: t("faq5_q"), a: t("faq5_a") },
    { q: t("faq6_q"), a: t("faq6_a") },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground">
            <HelpCircle className="w-3.5 h-3.5 text-primary" /> {t("faq_badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {t("faq_title")}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {t("faq_subtitle")}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-semibold text-foreground text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/30 bg-muted/10 animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
