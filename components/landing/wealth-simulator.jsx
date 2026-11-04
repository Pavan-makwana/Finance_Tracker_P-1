"use client";

import { useState, useMemo } from "react";
import { Sparkles, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function WealthSimulator() {
  const [monthlyIncome, setMonthlyIncome] = useState(75000);
  const [savingsRate, setSavingsRate] = useState(25);
  const { t, formatAmount } = useLanguage();

  const stats = useMemo(() => {
    const monthlySavings = (monthlyIncome * savingsRate) / 100;
    const annualSavings = monthlySavings * 12;
    // Compounding assuming a modest 10% annual return on invested savings
    const threeYearsSavings =
      monthlySavings * ((Math.pow(1 + 0.1 / 12, 36) - 1) / (0.1 / 12));
    const fiveYearsSavings =
      monthlySavings * ((Math.pow(1 + 0.1 / 12, 60) - 1) / (0.1 / 12));

    return {
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      threeYearsSavings: Math.round(threeYearsSavings),
      fiveYearsSavings: Math.round(fiveYearsSavings),
    };
  }, [monthlyIncome, savingsRate]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial from-blue-500/5 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> {t("sim_badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            {t("sim_title")} <span className="gradient-title">Vaultix</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            {t("sim_subtitle")}
          </p>
        </div>

        {/* Interactive Card */}
        <div className="rounded-3xl border border-border/70 bg-card/80 dark:bg-card/50 backdrop-blur-xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls (Left 6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Control 1: Monthly Income */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-foreground">
                  {t("sim_inflow_label")}
                </label>
                <span className="font-mono text-base font-bold text-primary">
                  {formatAmount(monthlyIncome)}
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="500000"
                step="5000"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground font-mono">
                <span>{formatAmount(20000)}</span>
                <span>{formatAmount(250000)}</span>
                <span>{formatAmount(500000)}</span>
              </div>
            </div>

            {/* Control 2: Target Savings Rate */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <label className="font-semibold text-foreground">
                  {t("sim_rate_label")}
                </label>
                <span className="font-mono text-base font-bold text-emerald-600 dark:text-emerald-400">
                  {savingsRate}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="60"
                step="1"
                value={savingsRate}
                onChange={(e) => setSavingsRate(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-muted-foreground">
                <span>5% (Starter)</span>
                <span>20% (Standard 50/30/20)</span>
                <span>60% (Aggressive FIRE)</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-muted/40 border border-border/50 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-500" /> Smart Rule 50/30/20:
              </p>
              <p>
                Allocate 50% for Needs, 30% for Wants, and 20% for Savings & Investments. Vaultix tracks your budget automatically.
              </p>
            </div>
          </div>

          {/* Results Display (Right 6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 p-6 sm:p-8 rounded-2xl border border-blue-500/20 space-y-6">
            <div>
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                {t("sim_monthly_savings")}
              </p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1 font-mono">
                {formatAmount(stats.monthlySavings)}
                <span className="text-xs font-normal text-muted-foreground ml-1">/ month</span>
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
              <div className="p-3 rounded-xl bg-card/60 border border-border/40">
                <p className="text-[11px] text-muted-foreground">{t("sim_annual_label")}</p>
                <p className="text-lg font-bold font-mono text-foreground mt-0.5">
                  {formatAmount(stats.annualSavings)}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-card/60 border border-border/40">
                <p className="text-[11px] text-muted-foreground">{t("sim_3y_label")}</p>
                <p className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {formatAmount(stats.threeYearsSavings)}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-primary text-primary-foreground space-y-2">
              <div className="flex justify-between items-center text-xs opacity-90">
                <span>{t("sim_5y_label")}</span>
                <span className="font-mono font-bold">+10% APY</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black font-mono">
                {formatAmount(stats.fiveYearsSavings)}
              </div>
              <p className="text-[11px] opacity-80">
                {t("sim_compounding_note")}
              </p>
            </div>

            <div className="pt-2">
              <Link href="/dashboard" className="w-full block">
                <Button className="w-full gap-2 shadow-md hover:shadow-lg transition-all h-11 text-sm font-semibold">
                  {t("sim_cta")} <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
