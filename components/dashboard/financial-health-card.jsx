"use client";

import { useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import {
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Coffee,
  Fuel,
  ShoppingCart,
  Plus,
  Clock,
  HeartPulse,
  Utensils,
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

  // Compute dynamic health score (0-100) and Survival Days
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

    // Factor 3: Survival runway (if monthly expenses > 0)
    const dailyBurn = monthlyExpenses > 0 ? monthlyExpenses / 30 : 500;
    const survivalDays = Math.max(1, Math.round(totalNetWorth / dailyBurn));
    const survivalMonths = (survivalDays / 30).toFixed(1);

    // Clamp score between 15 and 99
    score = Math.max(15, Math.min(99, Math.round(score)));

    let status = "Safe & Stable";
    let grade = "Grade B";
    let color = "text-blue-500";
    let strokeColor = "#3b82f6";
    let tip = "You're living within your means. Try investing 10% more to hit Grade A.";

    if (score >= 80) {
      status = "Rock Solid 🏆";
      grade = "Grade A";
      color = "text-emerald-500";
      strokeColor = "#10b981";
      tip = "Outstanding wealth pulse! Your savings rate is in the top 10% of users.";
    } else if (score < 60) {
      status = "Watch Out ⚡";
      grade = "Grade C";
      color = "text-amber-500";
      strokeColor = "#f59e0b";
      tip = "Your burn rate is elevated. Cut 1 delivery order this week to build cushion.";
    }

    return { score, status, grade, color, strokeColor, tip, survivalDays, survivalMonths };
  }, [totalNetWorth, monthlyIncome, monthlyExpenses, budgetAmount]);

  const quickShortcuts = [
    { label: "Chai / Coffee", amount: "50", cat: "Food", icon: Coffee },
    { label: "Quick Lunch", amount: "200", cat: "Food", icon: Utensils },
    { label: "Auto / Metro", amount: "100", cat: "Transport", icon: Fuel },
    { label: "Daily Grocery", amount: "600", cat: "Groceries", icon: ShoppingCart },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      {/* Left 7 cols: Health Score & Emergency Survival Meter */}
      <Card className="lg:col-span-7 rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card/90 to-primary/5 backdrop-blur-sm p-6 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">
              <HeartPulse className="w-3.5 h-3.5 text-rose-500" /> Human Financial Pulse
            </div>
            <div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <h3 className="text-2xl font-black text-foreground">
                  {healthData.status}
                </h3>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-muted text-muted-foreground border border-border/60">
                  {healthData.grade}
                </span>
              </div>
              <p className="text-xs text-muted-foreground mt-1 max-w-sm leading-relaxed">
                {healthData.tip}
              </p>
            </div>

            {/* Survival Runway Bar */}
            <div className="pt-2 flex items-center gap-2 text-xs text-muted-foreground justify-center sm:justify-start font-medium">
              <Clock className="w-3.5 h-3.5 text-cyan-500" />
              <span>
                Survival Buffer: <strong className="text-foreground">{healthData.survivalDays} Days</strong> ({healthData.survivalMonths} mos cushion)
              </span>
            </div>
          </div>

          {/* Circular SVG Score Dial */}
          <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-muted/50 stroke-current"
                strokeWidth="3.2"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                stroke={healthData.strokeColor}
                strokeDasharray={`${healthData.score}, 100`}
                strokeLinecap="round"
                strokeWidth="3.4"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-black font-mono text-foreground leading-none">
                {healthData.score}
              </span>
              <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">
                / 100
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Right 5 cols: 1-Tap Fast Entry Chips */}
      <Card className="lg:col-span-5 rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card/90 to-primary/5 backdrop-blur-sm p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-500 fill-amber-500" /> 1-Tap Quick Log
            </span>
            <span className="text-[10px] text-muted-foreground font-medium">Zero typing</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {quickShortcuts.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={`/transaction/create?amount=${item.amount}&category=${item.cat}&description=${encodeURIComponent(
                    item.label
                  )}`}
                  className="p-3 rounded-2xl border border-border/70 bg-card hover:bg-primary/5 hover:border-primary/50 text-left transition-all group flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-bold text-foreground line-clamp-1">
                      {item.label}
                    </p>
                    <p className="text-[11px] font-mono text-muted-foreground font-bold">
                      {formatAmount(item.amount)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-3 border-t border-border/50 mt-3 flex justify-between items-center text-xs">
          <span className="text-muted-foreground text-[11px]">Custom amounts?</span>
          <Link href="/transaction/create">
            <span className="text-primary font-bold hover:underline flex items-center gap-1">
              Add Detailed <Plus className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>
      </Card>
    </div>
  );
}
