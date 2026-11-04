"use client";

import { useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import { Zap, Sparkles, CheckCircle2, AlertTriangle, Flame } from "lucide-react";

export function DailyFuelCard({
  accounts = [],
  transactions = [],
  budgetAmount = 0,
}) {
  const { formatAmount } = useLanguage();

  const metrics = useMemo(() => {
    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const currentDay = now.getDate();
    const daysRemaining = Math.max(1, daysInMonth - currentDay + 1);

    // Calculate total liquid balance
    const totalBalance = accounts.reduce(
      (sum, acc) => sum + (parseFloat(acc.balance) || 0),
      0
    );

    // Calculate this month's expenses
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const thisMonthExpenses = transactions
      .filter((tx) => tx.type === "EXPENSE" && new Date(tx.date) >= startOfMonth)
      .reduce((sum, tx) => sum + (parseFloat(tx.amount) || 0), 0);

    // Calculate today's spending
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const spentToday = transactions
      .filter((tx) => tx.type === "EXPENSE" && new Date(tx.date) >= startOfToday)
      .reduce((sum, tx) => sum + (parseFloat(tx.amount) || 0), 0);

    // Effective budget or safe pool
    const effectivePool = budgetAmount > 0 
      ? Math.max(0, budgetAmount - thisMonthExpenses)
      : Math.max(0, totalBalance * 0.4); // 40% of balance as safe spending pool if no budget set

    const dailySafeLimit = Math.max(100, Math.round(effectivePool / daysRemaining));
    const remainingToday = dailySafeLimit - spentToday;
    const usedPercent = Math.min(100, Math.round((spentToday / dailySafeLimit) * 100));

    let status = "safe";
    let statusLabel = "Safe to Spend";
    let statusColor = "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";

    if (spentToday > dailySafeLimit) {
      status = "exceeded";
      statusLabel = "Over Daily Limit";
      statusColor = "text-rose-500 bg-rose-500/10 border-rose-500/20";
    } else if (usedPercent >= 75) {
      status = "warning";
      statusLabel = "Near Daily Limit";
      statusColor = "text-amber-500 bg-amber-500/10 border-amber-500/20";
    }

    return {
      daysRemaining,
      daysInMonth,
      currentDay,
      dailySafeLimit,
      spentToday,
      remainingToday,
      usedPercent,
      status,
      statusLabel,
      statusColor,
    };
  }, [accounts, transactions, budgetAmount]);

  return (
    <Card className="rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card/90 to-primary/5 p-6 shadow-sm overflow-hidden relative">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-cyan-500/10 via-emerald-500/5 to-transparent blur-2xl pointer-events-none -z-10" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Left: Headline & Explanation */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500 animate-pulse" />
              Today's Safe-to-Spend Limit
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${metrics.statusColor}`}>
              {metrics.statusLabel}
            </span>
            <span className="text-xs text-muted-foreground font-mono">
              Day {metrics.currentDay} of {metrics.daysInMonth} ({metrics.daysRemaining} days left)
            </span>
          </div>

          <div className="pt-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-foreground">
                {formatAmount(Math.max(0, metrics.remainingToday))}
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                left for today
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1 max-w-lg leading-relaxed">
              Based on your monthly pace, you can safely spend <strong className="text-foreground">{formatAmount(metrics.dailySafeLimit)}</strong> each day without running out of money before month-end.
            </p>
          </div>
        </div>

        {/* Right: Today's Fuel Progress Meter */}
        <div className="w-full md:w-72 p-4 rounded-2xl bg-muted/30 border border-border/60 space-y-3 shrink-0">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">Spent Today:</span>
            <span className="font-mono font-bold text-foreground">
              {formatAmount(metrics.spentToday)}
            </span>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden p-0.5 border border-border/50">
            <div
              style={{ width: `${metrics.usedPercent}%` }}
              className={`h-full rounded-full transition-all duration-500 ${
                metrics.status === "exceeded"
                  ? "bg-rose-500 shadow-xs shadow-rose-500/50"
                  : metrics.status === "warning"
                  ? "bg-amber-500 shadow-xs shadow-amber-500/50"
                  : "bg-gradient-to-r from-emerald-500 to-cyan-500"
              }`}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Daily Cap: {formatAmount(metrics.dailySafeLimit)}</span>
            <span className="font-mono font-bold">{metrics.usedPercent}% used</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
