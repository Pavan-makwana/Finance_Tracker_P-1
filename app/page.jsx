"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Repeat,
  FileSpreadsheet,
  Layers,
  CheckCircle2,
  Lock,
  ChevronRight,
  TrendingUp,
} from "lucide-react";
import { HeroPreview } from "@/components/landing/hero-preview";
import { WealthSimulator } from "@/components/landing/wealth-simulator";
import { FaqAccordion } from "@/components/landing/faq-accordion";
import { useLanguage } from "@/components/language-provider";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="container mx-auto px-4 text-center max-w-5xl">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-medium mb-6 hover:bg-primary/10 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t("hero_badge")}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground leading-[1.08] mb-6">
            {t("hero_title_1")}{" "}
            <br className="hidden sm:inline" />
            <span className="gradient-title">{t("hero_title_gradient")}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            {t("hero_subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base font-semibold gap-2 shadow-lg hover:shadow-xl hover:scale-102 transition-all bg-primary text-primary-foreground"
              >
                {t("start_free")} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 text-base font-medium border-border hover:bg-accent"
              >
                {t("live_demo")}
              </Button>
            </Link>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {t("trust_free")}
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-blue-500" /> {t("trust_privacy")}
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500" /> {t("trust_sync")}
            </span>
          </div>

          {/* Interactive Live Mockup Window */}
          <HeroPreview />
        </div>
      </section>

      {/* 2. STATS & SOCIAL PROOF BAR */}
      <section className="py-12 border-y border-border/60 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black font-mono text-foreground">
                {t("stat_tracked_val")}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {t("stat_tracked_lbl")}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400">
                {t("stat_accuracy_val")}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {t("stat_accuracy_lbl")}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black font-mono text-foreground">
                {t("stat_transactions_val")}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {t("stat_transactions_lbl")}
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl sm:text-3xl font-black font-mono text-amber-500">
                {t("stat_rating_val")}
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                {t("stat_rating_lbl")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BENTO GRID FEATURES SHOWCASE */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card text-xs font-semibold text-muted-foreground">
              <Layers className="w-3.5 h-3.5 text-primary" /> {t("features_badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              {t("features_title")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              {t("features_desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Multi-Account (Wide 2-col) */}
            <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-4 hover:border-primary/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t("bento1_title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("bento1_desc")}
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono">
                  {t("bento1_badge1")}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono">
                  {t("bento1_badge2")}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-mono">
                  {t("bento1_badge3")}
                </span>
              </div>
            </div>

            {/* Bento Card 2: Budget Guardrails */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-4 hover:border-primary/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t("bento2_title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("bento2_desc")}
              </p>
              <div className="w-full bg-muted rounded-full h-2 mt-4 overflow-hidden">
                <div className="bg-emerald-500 h-2 rounded-full w-[45%]" />
              </div>
            </div>

            {/* Bento Card 3: Subscription Radar */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-4 hover:border-primary/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                <Repeat className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t("bento3_title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("bento3_desc")}
              </p>
            </div>

            {/* Bento Card 4: Tax-Ready CSV Export */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-4 hover:border-primary/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t("bento4_title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("bento4_desc")}
              </p>
            </div>

            {/* Bento Card 5: Bank-Grade Privacy */}
            <div className="p-6 sm:p-8 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-4 hover:border-primary/50 transition-all shadow-xs hover:shadow-md">
              <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {t("bento5_title")}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("bento5_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE WEALTH SIMULATOR */}
      <WealthSimulator />

      {/* 5. HOW IT WORKS 3-STEP JOURNEY */}
      <section className="py-24 border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {t("how_title")}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t("how_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-border/70 bg-card/90 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-mono text-sm font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="text-lg font-bold">{t("step1_title")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t("step1_desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/90 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-mono text-sm font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="text-lg font-bold">{t("step2_title")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t("step2_desc")}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-border/70 bg-card/90 space-y-3 relative">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-mono text-sm font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="text-lg font-bold">{t("step3_title")}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {t("step3_desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 7. CLOSING HIGH-CONVERTING CTA BANNER */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 sm:p-14 text-white text-center shadow-2xl overflow-hidden">
            {/* Ambient pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                {t("cta_title")}
              </h2>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                {t("cta_subtitle")}
              </p>
              <div className="pt-2">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-9 py-6 text-base rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    {t("cta_button")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
