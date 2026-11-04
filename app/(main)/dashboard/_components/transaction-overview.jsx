"use client";

import { useMemo, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Pencil,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import useFetch from "@/hooks/use-fetch";
import { updateBudget } from "@/actions/budget";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};

export function DashboardOverview({
  accounts = [],
  transactions = [],
  budget = null,
  currentExpenses = 0,
}) {
  const router = useRouter();

  // Budget Editing State
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [newBudget, setNewBudget] = useState(budget?.amount?.toString() || "");

  const {
    loading: isUpdatingBudget,
    fn: updateBudgetFn,
    data: updatedBudget,
    error: budgetError,
  } = useFetch(updateBudget);

  const budgetAmount = budget?.amount || 0;
  const percentUsed =
    budgetAmount > 0 ? (currentExpenses / budgetAmount) * 100 : 0;

  const handleSaveBudget = async () => {
    const amount = parseFloat(newBudget);
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid positive amount");
      return;
    }
    await updateBudgetFn(amount);
  };

  const handleCancelBudget = () => {
    setNewBudget(budget?.amount?.toString() || "");
    setIsEditingBudget(false);
  };

  useEffect(() => {
    if (updatedBudget?.success) {
      setIsEditingBudget(false);
      toast.success("Monthly budget updated successfully");
      router.refresh();
    }
  }, [updatedBudget, router]);

  useEffect(() => {
    if (budgetError) {
      toast.error(budgetError.message || "Failed to update budget");
    }
  }, [budgetError]);

  // Compute key metrics
  const stats = useMemo(() => {
    const totalNetWorth = accounts.reduce(
      (sum, acc) => sum + (parseFloat(acc.balance) || 0),
      0
    );

    let totalIncome = 0;
    let totalExpense = 0;

    transactions.forEach((tx) => {
      const amount = parseFloat(tx.amount) || 0;
      if (tx.type === "INCOME") {
        totalIncome += amount;
      } else if (tx.type === "EXPENSE") {
        totalExpense += amount;
      }
    });

    const netSavings = totalIncome - totalExpense;
    const savingsRate =
      totalIncome > 0 ? Math.round((netSavings / totalIncome) * 100) : 0;

    return {
      totalNetWorth,
      totalIncome,
      totalExpense,
      netSavings,
      savingsRate,
    };
  }, [accounts, transactions]);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {/* 1. Monthly Budget / Limit */}
      <Card className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-amber-500/40 group">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Monthly Limit
          </CardTitle>
          <div className="flex items-center gap-1">
            {!isEditingBudget && (
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 text-muted-foreground hover:text-foreground opacity-70 group-hover:opacity-100 transition-opacity"
                onClick={() => {
                  setNewBudget(budget?.amount?.toString() || "");
                  setIsEditingBudget(true);
                }}
                title="Edit monthly budget"
              >
                <Pencil className="h-3.5 w-3.5" />
              </Button>
            )}
            <div className="h-8 w-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Target className="h-4 w-4" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isEditingBudget ? (
            <div className="space-y-2">
              <div className="relative">
                <span className="absolute left-2.5 top-2 text-xs text-muted-foreground">₹</span>
                <Input
                  type="number"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  className="pl-6 h-8 text-sm"
                  placeholder="e.g. 25000"
                  autoFocus
                  disabled={isUpdatingBudget}
                />
              </div>
              <div className="flex items-center gap-1.5">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleSaveBudget}
                  disabled={isUpdatingBudget}
                  className="h-7 px-2.5 text-xs text-emerald-600"
                >
                  <Check className="h-3.5 w-3.5 mr-1" /> Save
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={handleCancelBudget}
                  disabled={isUpdatingBudget}
                  className="h-7 px-2.5 text-xs text-rose-500"
                >
                  <X className="h-3.5 w-3.5 mr-1" /> Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-2xl font-black font-mono tracking-tight text-foreground">
                {budgetAmount > 0 ? formatCurrency(budgetAmount) : "No Limit Set"}
              </div>
              {budgetAmount > 0 ? (
                <div className="space-y-1.5 mt-2.5">
                  <Progress
                    value={Math.min(percentUsed, 100)}
                    extraStyles={
                      percentUsed >= 100
                        ? "bg-rose-500"
                        : percentUsed >= 80
                        ? "bg-amber-500"
                        : "bg-emerald-500"
                    }
                    className="h-1.5"
                  />
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>{formatCurrency(currentExpenses)} spent</span>
                    <span
                      className={`font-semibold ${
                        percentUsed >= 100
                          ? "text-rose-500"
                          : percentUsed >= 80
                          ? "text-amber-500"
                          : "text-emerald-500"
                      }`}
                    >
                      {percentUsed.toFixed(0)}%
                    </span>
                  </div>
                </div>
              ) : (
                <p className="text-xs text-muted-foreground mt-1.5">
                  Click ✏️ to set monthly target
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* 2. Total Amount */}
      <Card className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-blue-500/40 group">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Total Amount
          </CardTitle>
          <div className="h-8 w-8 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
            <Wallet className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-black font-mono tracking-tight text-foreground">
            {formatCurrency(stats.totalNetWorth)}
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            Across {accounts.length} {accounts.length === 1 ? "account" : "accounts"}
          </p>
        </CardContent>
      </Card>

      {/* 3. Monthly Income */}
      <Card className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-emerald-500/40 group">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Monthly Income
          </CardTitle>
          <div className="h-8 w-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-black font-mono tracking-tight text-emerald-600 dark:text-emerald-400">
            {formatCurrency(stats.totalIncome)}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            <span>Last 30 days</span>
          </div>
        </CardContent>
      </Card>

      {/* 4. Monthly Expenses */}
      <Card className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-rose-500/40 group">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Monthly Expenses
          </CardTitle>
          <div className="h-8 w-8 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center">
            <ArrowDownRight className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-black font-mono tracking-tight text-rose-600 dark:text-rose-400">
            {formatCurrency(stats.totalExpense)}
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5">
            <TrendingDown className="h-3.5 w-3.5 text-rose-500" />
            <span>Last 30 days</span>
          </div>
        </CardContent>
      </Card>

      {/* 5. Net Savings */}
      <Card className="rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between hover:border-purple-500/40 group">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Net Savings
          </CardTitle>
          <div className="h-8 w-8 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <PiggyBank className="h-4 w-4" />
          </div>
        </CardHeader>
        <CardContent>
          <div
            className={`text-2xl font-black font-mono tracking-tight ${
              stats.netSavings >= 0
                ? "text-purple-600 dark:text-purple-400"
                : "text-rose-600"
            }`}
          >
            {formatCurrency(stats.netSavings)}
          </div>
          <p className="text-xs text-muted-foreground mt-1.5">
            {stats.totalIncome > 0
              ? `${stats.savingsRate}% saved of income`
              : "No income recorded"}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
