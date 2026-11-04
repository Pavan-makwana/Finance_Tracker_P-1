"use client";

import { useLanguage } from "@/components/language-provider";

export function AccountBalanceDisplay({ balance }) {
  const { formatAmount } = useLanguage();
  return (
    <div className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-foreground mt-0.5">
      {formatAmount(balance)}
    </div>
  );
}
