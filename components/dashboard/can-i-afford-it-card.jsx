"use client";

import { useState, useMemo } from "react";
import { useLanguage } from "@/components/language-provider";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HelpCircle,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import Link from "next/link";

export function CanIAffordItCard({
  accounts = [],
  transactions = [],
  budgetAmount = 0,
}) {
  const { formatAmount } = useLanguage();
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [analyzed, setAnalyzed] = useState(false);

  // Total balance & monthly expenses
  const totalBalance = useMemo(() => {
    return accounts.reduce(
      (sum, acc) => sum + (parseFloat(acc.balance) || 0),
      0
    );
  }, [accounts]);

  const now = new Date();
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  const daysRemaining = Math.max(1, daysInMonth - now.getDate() + 1);

  const priceNum = parseFloat(itemPrice) || 0;

  const decision = useMemo(() => {
    if (priceNum <= 0) return null;

    // Remaining liquid cushion after purchase
    const balanceAfter = totalBalance - priceNum;

    // Daily safe allowance before vs after
    const dailyBefore = totalBalance / daysRemaining;
    const dailyAfter = balanceAfter / daysRemaining;

    // Calculate percentage of total wealth
    const pctOfBalance = totalBalance > 0 ? (priceNum / totalBalance) * 100 : 100;

    let verdict = "green"; // green, yellow, red
    let title = "Yes! You Can Afford It 🎉";
    let message = "This fits comfortably within your liquid reserves and won't disrupt your daily budget.";
    let badgeClass = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";

    if (priceNum > totalBalance) {
      verdict = "red";
      title = "Not Enough Funds 🛑";
      message = "The price exceeds your total available bank balance across all accounts.";
      badgeClass = "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30";
    } else if (pctOfBalance > 40 || (budgetAmount > 0 && priceNum > budgetAmount * 0.5)) {
      verdict = "red";
      title = "High Risk - Hold Off! ⚠️";
      message = `This takes over ${Math.round(pctOfBalance)}% of your available money. We strongly recommend waiting for your next income credit.`;
      badgeClass = "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30";
    } else if (pctOfBalance > 15 || dailyAfter < dailyBefore * 0.7) {
      verdict = "yellow";
      title = "Think Twice - Caution ⚖️";
      message = `You can buy it, but your daily safe spending will drop from ${formatAmount(dailyBefore)} to ${formatAmount(dailyAfter)} for the next ${daysRemaining} days.`;
      badgeClass = "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30";
    } else {
      verdict = "green";
      title = "Safe to Buy - Go for It! 🟢";
      message = `This is only ${Math.round(pctOfBalance)}% of your liquid funds. You will still have ${formatAmount(balanceAfter)} cushion left.`;
      badgeClass = "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30";
    }

    return {
      verdict,
      title,
      message,
      badgeClass,
      balanceAfter,
      pctOfBalance: Math.round(pctOfBalance),
      dailyBefore: Math.round(dailyBefore),
      dailyAfter: Math.round(dailyAfter),
    };
  }, [priceNum, totalBalance, daysRemaining, budgetAmount, formatAmount]);

  const handleTestSample = (name, price) => {
    setItemName(name);
    setItemPrice(price);
    setAnalyzed(true);
  };

  return (
    <Card className="rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card/90 to-primary/5 p-6 shadow-sm">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-3">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-1">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              Human Decision Engine
            </div>
            <h3 className="text-lg font-black tracking-tight text-foreground flex items-center gap-2">
              "Can I Afford It?" Calculator
            </h3>
            <p className="text-xs text-muted-foreground">
              Thinking of buying something? Type the price below — Finora calculates if it's safe without risking your month-end.
            </p>
          </div>

          {/* Quick presets */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[11px] text-muted-foreground mr-1">Quick test:</span>
            <button
              type="button"
              onClick={() => handleTestSample("Weekend Dinner", "1200")}
              className="text-xs px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors font-medium"
            >
              🍕 Dinner ({formatAmount(1200)})
            </button>
            <button
              type="button"
              onClick={() => handleTestSample("New Sneakers", "4500")}
              className="text-xs px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors font-medium"
            >
              👟 Shoes ({formatAmount(4500)})
            </button>
            <button
              type="button"
              onClick={() => handleTestSample("Smart Watch", "15000")}
              className="text-xs px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-foreground transition-colors font-medium"
            >
              ⌚ Watch ({formatAmount(15000)})
            </button>
          </div>
        </div>

        {/* Input Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          <div className="sm:col-span-6">
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              What do you want to buy?
            </label>
            <Input
              placeholder="e.g. Noise Cancelling Headphones"
              value={itemName}
              onChange={(e) => {
                setItemName(e.target.value);
                setAnalyzed(true);
              }}
              className="h-10 text-sm rounded-xl"
            />
          </div>

          <div className="sm:col-span-4">
            <label className="text-xs font-semibold text-muted-foreground mb-1 block">
              Price / Cost
            </label>
            <Input
              type="number"
              placeholder="e.g. 3500"
              value={itemPrice}
              onChange={(e) => {
                setItemPrice(e.target.value);
                setAnalyzed(true);
              }}
              className="h-10 text-sm rounded-xl font-mono"
            />
          </div>

          <div className="sm:col-span-2 pt-5">
            <Button
              type="button"
              onClick={() => setAnalyzed(true)}
              className="w-full h-10 rounded-xl font-semibold bg-primary text-primary-foreground shadow-sm text-xs"
            >
              Check Now
            </Button>
          </div>
        </div>

        {/* Verdict Box */}
        {decision && (
          <div
            className={`p-4 rounded-2xl border transition-all duration-300 animate-in fade-in-50 ${decision.badgeClass} space-y-3`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-base font-extrabold flex items-center gap-2">
                  {decision.verdict === "green" && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                  {decision.verdict === "yellow" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                  {decision.verdict === "red" && <XCircle className="w-5 h-5 text-rose-500" />}
                  <span>{decision.title}</span>
                </h4>
                <p className="text-xs leading-relaxed max-w-xl font-medium">
                  {decision.message}
                </p>
              </div>

              {/* Action: Log this transaction */}
              <Link
                href={`/transaction/create?amount=${priceNum}&description=${encodeURIComponent(
                  itemName || "Planned Purchase"
                )}`}
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="shrink-0 text-xs gap-1.5 h-8 font-semibold bg-card border-border hover:bg-accent"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Log Purchase
                </Button>
              </Link>
            </div>

            {/* Quick Metrics Comparison */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-current/10 text-xs">
              <div>
                <span className="opacity-70 text-[10px] block">Your Total Bank Balance:</span>
                <span className="font-mono font-bold">{formatAmount(totalBalance)}</span>
              </div>
              <div>
                <span className="opacity-70 text-[10px] block">Balance After Buying:</span>
                <span className="font-mono font-bold">{formatAmount(Math.max(0, decision.balanceAfter))}</span>
              </div>
              <div>
                <span className="opacity-70 text-[10px] block">Share of Wealth:</span>
                <span className="font-mono font-bold">{decision.pctOfBalance}% of your funds</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
