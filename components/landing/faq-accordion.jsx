"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is my personal financial data secure and private?",
    a: "Absolutely. Vaultix does not ask for or store sensitive net-banking credentials or debit card PINs. All stored data is encrypted at rest and in transit using industry-standard SSL encryption and secured with Clerk enterprise authentication.",
  },
  {
    q: "Can I manage multiple bank accounts and cash wallets?",
    a: "Yes! Vaultix lets you add unlimited accounts—including Savings, Current, Cash, and Investment accounts. You can also designate a default account and view segregated statements for each.",
  },
  {
    q: "How does the monthly limit and budget guardrail work?",
    a: "You can set a target monthly budget with a single click. As you record transactions, Vaultix automatically computes your percentage utilization and color-codes your progress (green for safe, amber for 80%, and red when exceeded).",
  },
  {
    q: "Can I track recurring bills and subscriptions?",
    a: "Yes. When adding an expense or income, simply toggle 'Recurring Transaction' and select the interval (Daily, Weekly, Monthly, or Yearly). Vaultix flags upcoming debits so you are never surprised.",
  },
  {
    q: "Can I export my financial data for tax season or Excel?",
    a: "Yes! Every account includes a one-click CSV export that formats all dates, descriptions, categories, and amounts directly compatible with Excel, Google Sheets, and accounting software.",
  },
  {
    q: "Is Vaultix available as a mobile app (PWA)?",
    a: "Yes! Vaultix is built as a Progressive Web App (PWA). You can install it directly onto your Android, iPhone, Windows, or Mac home screen with one tap from the browser.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 border-t border-border/50 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground">
            <HelpCircle className="w-3.5 h-3.5 text-primary" /> Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Everything you need to know about tracking your finances with Welth.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-border/70 bg-card/80 transition-all duration-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 ml-4 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-sm text-muted-foreground leading-relaxed border-t border-border/30 mt-1">
                    <p className="pt-3">{faq.a}</p>
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
