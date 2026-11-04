"use client";

import { useState } from "react";
import {
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Target,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function HeroPreview() {
  const [activeTab, setActiveTab] = useState("overview");
  const { t, formatAmount } = useLanguage();

  return (
    <div className="relative mx-auto max-w-5xl mt-12 w-full">
      {/* Ambient background glow / aura */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[90%] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/25 to-purple-600/20 blur-[100px] pointer-events-none -z-10 rounded-full" />

      {/* Main Glassmorphic Mockup Frame */}
      <div className="rounded-2xl border border-border/80 bg-card/90 dark:bg-card/70 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/10 hover:border-border">
        {/* Window Chrome Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-3 text-xs font-mono text-muted-foreground hidden sm:inline">
              finora.app/dashboard
            </span>
          </div>

          {/* Interactive view toggles */}
          <div className="flex items-center gap-1 bg-background/80 p-1 rounded-lg border border-border/50 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                activeTab === "overview"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("overview")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("budget")}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                activeTab === "budget"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("monthly_limit")}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("activity")}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${
                activeTab === "activity"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t("all_tx")}
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 lg:p-8 space-y-6">
          {/* Top Live Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Balance */}
            <div className="p-4 rounded-xl border border-border/70 bg-gradient-to-br from-card to-muted/30 text-left">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span className="font-medium">{t("total_amount")}</span>
                <span className="text-emerald-500 font-semibold flex items-center">
                  <TrendingUp className="w-3.5 h-3.5 mr-0.5" /> +14.2%
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono">
                {formatAmount(1845200)}
              </div>
              <p className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                <Wallet className="w-3 h-3 text-blue-500" /> 3 Accounts Connected
              </p>
            </div>

            {/* Monthly Inflow */}
            <div className="p-4 rounded-xl border border-border/70 bg-gradient-to-br from-card to-muted/30 text-left">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span className="font-medium">{t("monthly_income")}</span>
                <span className="text-emerald-500 font-semibold flex items-center">
                  <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" /> On track
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-emerald-600 dark:text-emerald-400 font-mono">
                {formatAmount(185000)}
              </div>
              <p className="text-[11px] text-muted-foreground mt-1">
                Salary + Investments + Freelance
              </p>
            </div>

            {/* Monthly Budget Guardrail */}
            <div className="p-4 rounded-xl border border-border/70 bg-gradient-to-br from-card to-muted/30 text-left">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                <span className="font-medium">{t("monthly_limit")}</span>
                <span className="text-blue-500 font-semibold flex items-center">
                  <Target className="w-3.5 h-3.5 mr-0.5" /> 42% Used
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono">
                {formatAmount(65000)}
              </div>
              <div className="w-full bg-muted rounded-full h-1.5 mt-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1.5 rounded-full w-[42%]" />
              </div>
            </div>
          </div>

          {/* Interactive Sub-Panel */}
          {activeTab === "overview" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Cash Flow Graph Simulation */}
              <div className="lg:col-span-3 p-4 rounded-xl border border-border/60 bg-muted/20 text-left">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold">Cash Flow Velocity</h4>
                    <p className="text-xs text-muted-foreground">Income vs Spending (Last 6 Months)</p>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 font-medium">
                    Live
                  </span>
                </div>

                {/* Simulated Wave Chart */}
                <div className="relative h-36 w-full flex items-end justify-between gap-2 pt-6">
                  {[
                    { month: "Jan", inc: 70, exp: 40 },
                    { month: "Feb", inc: 85, exp: 45 },
                    { month: "Mar", inc: 65, exp: 50 },
                    { month: "Apr", inc: 95, exp: 38 },
                    { month: "May", inc: 90, exp: 52 },
                    { month: "Jun", inc: 100, exp: 42 },
                  ].map((item, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                      <div className="w-full flex items-end justify-center gap-1 h-24">
                        <div
                          style={{ height: `${item.inc}%` }}
                          className="w-1/2 max-w-[14px] bg-emerald-500 rounded-t-sm transition-all duration-500 hover:brightness-110"
                        />
                        <div
                          style={{ height: `${item.exp}%` }}
                          className="w-1/2 max-w-[14px] bg-rose-500 rounded-t-sm transition-all duration-500 hover:brightness-110"
                        />
                      </div>
                      <span className="text-[10px] text-muted-foreground font-mono">{item.month}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Live Feeds */}
              <div className="lg:col-span-2 p-4 rounded-xl border border-border/60 bg-muted/20 space-y-3 text-left">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold">{t("all_tx")}</h4>
                  <span className="text-[11px] text-muted-foreground">Live feed</span>
                </div>

                <div className="space-y-2">
                  {[
                    { title: "Salary Deposit", cat: "Income", val: `+${formatAmount(125000)}`, isInc: true, time: "Today" },
                    { title: "AWS Cloud Services", cat: "Business", val: `-${formatAmount(3450)}`, isInc: false, time: "Yesterday" },
                    { title: "Grocery Mart", cat: "Food", val: `-${formatAmount(2120)}`, isInc: false, time: "Oct 28" },
                  ].map((tx, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-card/80 border border-border/40 text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center ${
                            tx.isInc
                              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
                              : "bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-400"
                          }`}
                        >
                          {tx.isInc ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{tx.title}</p>
                          <p className="text-[10px] text-muted-foreground">{tx.cat} • {tx.time}</p>
                        </div>
                      </div>
                      <span
                        className={`font-mono font-bold ${
                          tx.isInc ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"
                        }`}
                      >
                        {tx.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "budget" && (
            <div className="p-6 rounded-xl border border-border/60 bg-muted/20 text-center space-y-3">
              <Sparkles className="w-8 h-8 text-primary mx-auto" />
              <h4 className="font-bold text-base">{t("bento2_title")}</h4>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                {t("bento2_desc")}
              </p>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="p-6 rounded-xl border border-border/60 bg-muted/20 text-center space-y-3">
              <Wallet className="w-8 h-8 text-emerald-500 mx-auto" />
              <h4 className="font-bold text-base">{t("bento1_title")}</h4>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                {t("bento1_desc")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
