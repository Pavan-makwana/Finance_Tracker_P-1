"use client";

import { useState } from "react";
import { useLanguage, CURRENCY_CONFIG } from "@/components/language-provider";
import { BrandLogo } from "@/components/logo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
  ShieldCheck,
  TrendingUp,
  Target,
  Wallet,
  Globe,
} from "lucide-react";

export function OnboardingModal() {
  const {
    isOnboardingOpen,
    closeOnboarding,
    language,
    setLanguage,
    currency,
    setCurrency,
    t,
    formatAmount,
  } = useLanguage();

  const [step, setStep] = useState(1);
  const [targetBudget, setTargetBudget] = useState(35000);

  const totalSteps = 4;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      closeOnboarding();
      setStep(1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <Dialog open={isOnboardingOpen} onOpenChange={(open) => !open && closeOnboarding()}>
      <DialogContent className="max-w-lg p-0 overflow-hidden rounded-3xl border border-border/80 bg-background/95 backdrop-blur-xl shadow-2xl">
        {/* Top Gradient Ribbon */}
        <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

        <div className="p-6 sm:p-8 space-y-6">
          {/* Step 1: Welcome */}
          {step === 1 && (
            <div className="text-center space-y-4 py-2">
              <div className="flex justify-center mb-2">
                <BrandLogo size="lg" animated={true} />
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Next-Generation Wealth OS
              </div>

              <DialogHeader>
                <DialogTitle className="text-2xl sm:text-3xl font-black tracking-tight text-center">
                  {t("onboarding_welcome")}
                </DialogTitle>
              </DialogHeader>

              <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                {t("onboarding_welcome_sub")} Take a quick 30-second tour to customize your experience.
              </p>

              {/* Vector SVG Illustration */}
              <div className="py-4 flex justify-center">
                <div className="w-48 h-32 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-border/60 p-4 flex flex-col justify-between relative overflow-hidden shadow-inner">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-muted-foreground">Pulse Meter</span>
                    <span className="text-emerald-500 font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-0.5" /> +24%
                    </span>
                  </div>
                  <div className="flex items-end gap-2 h-14 w-full justify-center">
                    <div className="w-5 bg-blue-500 rounded-t-sm h-[40%]" />
                    <div className="w-5 bg-indigo-500 rounded-t-sm h-[65%]" />
                    <div className="w-5 bg-purple-500 rounded-t-sm h-[85%]" />
                    <div className="w-5 bg-emerald-500 rounded-t-sm h-[100%]" />
                  </div>
                  <span className="text-[10px] text-center text-muted-foreground font-mono">
                    Compounding Wealth Engine
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Language & Currency */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="text-center space-y-1">
                <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 mx-auto flex items-center justify-center mb-2">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t("onboarding_step1_title")}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t("onboarding_step1_desc")}
                </p>
              </div>

              {/* Language selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Interface Language
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { code: "en", label: "English", flag: "🇺🇸" },
                    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
                    { code: "es", label: "Español", flag: "🇪🇸" },
                    { code: "fr", label: "Français", flag: "🇫🇷" },
                  ].map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setLanguage(l.code)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                        language === l.code
                          ? "border-primary bg-primary/10 text-primary shadow-xs"
                          : "border-border/60 bg-card/60 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {language === l.code && <Check className="w-3.5 h-3.5" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Currency selection */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Default Currency
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {Object.keys(CURRENCY_CONFIG).map((cur) => (
                    <button
                      key={cur}
                      type="button"
                      onClick={() => setCurrency(cur)}
                      className={`p-2.5 rounded-xl border text-xs font-mono font-bold flex flex-col items-center justify-center gap-0.5 transition-all ${
                        currency === cur
                          ? "border-primary bg-primary text-primary-foreground shadow-xs"
                          : "border-border/60 bg-card/60 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="text-sm">{CURRENCY_CONFIG[cur].symbol}</span>
                      <span className="text-[10px]">{cur}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Monthly Budget */}
          {step === 3 && (
            <div className="space-y-5">
              <div className="text-center space-y-1">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 mx-auto flex items-center justify-center mb-2">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {t("onboarding_step2_title")}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t("onboarding_step2_desc")}
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-border/70 bg-card/60 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Target Monthly Limit
                  </span>
                  <span className="text-xl font-black font-mono text-primary">
                    {formatAmount(targetBudget)}
                  </span>
                </div>

                <input
                  type="range"
                  min="10000"
                  max="150000"
                  step="2500"
                  value={targetBudget}
                  onChange={(e) => setTargetBudget(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />

                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>{formatAmount(10000)}</span>
                  <span>{formatAmount(75000)}</span>
                  <span>{formatAmount(150000)}+</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                You can easily adjust or fine-tune this limit at any time from your dashboard with the pencil icon.
              </p>
            </div>
          )}

          {/* Step 4: Ready to Launch */}
          {step === 4 && (
            <div className="text-center space-y-4 py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-foreground">
                {t("onboarding_step3_title")}
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                {t("onboarding_step3_desc")}
              </p>

              <div className="grid grid-cols-3 gap-3 text-left pt-2">
                <div className="p-3 rounded-xl bg-card border border-border/60 space-y-1">
                  <Wallet className="w-4 h-4 text-blue-500" />
                  <p className="text-xs font-bold text-foreground">Multi-Account</p>
                  <p className="text-[10px] text-muted-foreground">Savings & Current</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border/60 space-y-1">
                  <Target className="w-4 h-4 text-amber-500" />
                  <p className="text-xs font-bold text-foreground">5 Metrics</p>
                  <p className="text-[10px] text-muted-foreground">Real-time alerts</p>
                </div>
                <div className="p-3 rounded-xl bg-card border border-border/60 space-y-1">
                  <TrendingUp className="w-4 h-4 text-emerald-500" />
                  <p className="text-xs font-bold text-foreground">Cash Flow</p>
                  <p className="text-[10px] text-muted-foreground">Visual charts</p>
                </div>
              </div>
            </div>
          )}

          {/* Stepper Dots & Navigation Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            {/* Step Indicators */}
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    step === i
                      ? "w-6 bg-primary"
                      : "w-1.5 bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-2">
              {step > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="h-9 px-3 text-xs"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" /> {t("previous")}
                </Button>
              )}

              {step === 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeOnboarding}
                  className="h-9 px-3 text-xs text-muted-foreground hover:text-foreground"
                >
                  {t("skip")}
                </Button>
              )}

              <Button
                size="sm"
                onClick={handleNext}
                className="h-9 px-4 text-xs font-semibold gap-1.5 bg-primary text-primary-foreground shadow-sm"
              >
                {step === totalSteps ? (
                  <span>{t("finish")}</span>
                ) : (
                  <>
                    <span>{t("next_step")}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
