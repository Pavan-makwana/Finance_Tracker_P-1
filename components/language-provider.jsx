"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const LanguageContext = createContext({
  language: "en",
  setLanguage: () => {},
  currency: "INR",
  setCurrency: () => {},
  t: (key) => key,
  formatAmount: (amount) => "",
  isOnboardingOpen: false,
  openOnboarding: () => {},
  closeOnboarding: () => {},
});

export const CURRENCY_CONFIG = {
  INR: { code: "INR", symbol: "₹", locale: "en-IN", rate: 1 },
  USD: { code: "USD", symbol: "$", locale: "en-US", rate: 0.012 },
  EUR: { code: "EUR", symbol: "€", locale: "de-DE", rate: 0.011 },
  GBP: { code: "GBP", symbol: "£", locale: "en-GB", rate: 0.0095 },
};

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState("en");
  const [currency, setCurrencyState] = useState("INR");
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("vaultix_lang");
    if (savedLang && translations[savedLang]) {
      setLanguageState(savedLang);
    }
    const savedCurr = localStorage.getItem("vaultix_curr");
    if (savedCurr && CURRENCY_CONFIG[savedCurr]) {
      setCurrencyState(savedCurr);
    }
    // Check if first-time user for onboarding
    const seenOnboarding = localStorage.getItem("vaultix_onboarding_seen");
    if (!seenOnboarding) {
      // Auto open onboarding on first visit after brief delay
      const timer = setTimeout(() => setIsOnboardingOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const setLanguage = (lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem("vaultix_lang", lang);
    }
  };

  const setCurrency = (curr) => {
    if (CURRENCY_CONFIG[curr]) {
      setCurrencyState(curr);
      localStorage.setItem("vaultix_curr", curr);
    }
  };

  const openOnboarding = () => setIsOnboardingOpen(true);
  const closeOnboarding = () => {
    setIsOnboardingOpen(false);
    localStorage.setItem("vaultix_onboarding_seen", "true");
  };

  const t = (key) => {
    const dict = translations[language] || translations.en;
    return dict[key] || translations.en[key] || key;
  };

  const formatAmount = (val) => {
    const num = Number(val) || 0;
    const config = CURRENCY_CONFIG[currency] || CURRENCY_CONFIG.INR;
    return new Intl.NumberFormat(config.locale, {
      style: "currency",
      currency: config.code,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(num);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        t,
        formatAmount,
        isOnboardingOpen,
        openOnboarding,
        closeOnboarding,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
