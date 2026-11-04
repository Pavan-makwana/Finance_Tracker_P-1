"use client";

import { useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Coffee,
  Fuel,
  ShoppingCart,
  Plus,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function FinancialHealthCard({
  totalNetWorth = 0,
  monthlyIncome = 0,
  monthlyExpenses = 0,
  budgetAmount = 0,
}) {
  const { t, formatAmount } = useLanguage();

  // Compute dynamic health score (0-100)
  const healthData = useMemo(() => {
    let score = 50; // base score

    // Factor 1: Savings Rate (up to +30 points)
    if (monthlyIncome > 0) {
      const savingsRate = ((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100;
      if (savingsRate >= 30) score += 30;
      else if (savingsRate >= 15) score += 20;
      else if (savingsRate > 0) score += 10;
      else score -= 15;
    }

    // Factor 2: Budget Adherence (up to +20 points)
    if (budgetAmount > 0) {
      const budgetPct = (monthlyExpenses / budgetAmount) * 100;
      if (budgetPct <= 75) score += 20;
      else if (budgetPct <= 95) score += 10;
      else score -= 15;
    }

    // Clamp score between 10 and 99
    score = Math.max(15, Math.min(99, Math.round(score)));

    let status = "Good";
    let color = "text-blue-500";
    let strokeColor = "#3b82f6";

    if (score >= 80) {
      status = "Excellent";
      color = "text-emerald-500";
      strokeColor = "#10b981";
    } else if (score < 60) {
      status = "Needs Attention";
      color = "text-amber-500";
      strokeColor = "#f59e0b";
    }

    return { score, status, color, strokeColor };
  }, [totalNetWorth, monthlyIncome, monthlyExpenses, budgetAmount]);

  const quickShortcuts = [
    { label: "Coffee / Chai", amount: "50", cat: "food", icon: Coffee },
    { label: "Fuel / Ride", amount: "300", cat: "transportation", icon: Fuel },
    { label: "Groceries", amount: "800", cat: "groceries", icon: ShoppingCart },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left 7 cols: Health Score Gauge */}
      <Card className="lg:col-span-7 rounded-2xl border border-border/70 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm shadow-xs hover:border-primary/40 transition-all p-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> {t("financial_health")}
            </div>
            <h3 className="text-xl font-black text-foreground">
              {healthData.status}
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              Your score is computed from your 30-day savings velocity and budget guardrail compliance.
            </p>
          </div>

          {/* Circular SVG Score Dial */}
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-muted/60 stroke-current"
                strokeWidth="3.2"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                stroke={healthData.strokeColor}
                strokeDasharray={`${healthData.score}, 100`}
                strokeLinecap="round"
                strokeWidth="3.2"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-xl font-black font-mono text-foreground">
                {healthData.score}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                / 100
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Right 5 cols: Quick Log Shortcuts */}
      <Card className="lg:col-span-5 rounded-2xl border border-border/70 bg-gradient-to-br from-card/80 to-muted/20 backdrop-blur-sm shadow-xs hover:border-primary/40 transition-all p-5 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" /> {t("quick_shortcuts")}
            </span>
            <span className="text-[10px] text-muted-foreground">1-Tap Fast Entry</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {quickShortcuts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={`/transaction/create?amount=${item.amount}`}
                  className="p-2.5 rounded-xl border border-border/60 bg-card hover:bg-primary/5 hover:border-primary/50 text-center transition-all group flex flex-col items-center justify-center gap-1"
                >
                  <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-semibold text-foreground line-clamp-1">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-mono text-muted-foreground font-bold">
                    ₹{item.amount}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-3 border-t border-border/40 mt-3 flex justify-between items-center text-xs">
          <span className="text-muted-foreground">Need custom entry?</span>
          <Link href="/transaction/create">
            <span className="text-primary font-semibold hover:underline flex items-center gap-1">
              Add Custom <Plus className="w-3 h-3" />
            </span>
          </Link>
        </div>
      </Card>
    </div>
  );
}
