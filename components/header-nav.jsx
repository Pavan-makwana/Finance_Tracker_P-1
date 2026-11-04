"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function HeaderNav() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center space-x-2 sm:space-x-2.5">
      <SignedIn>
        <Link href="/dashboard" className="transition-colors">
          <Button variant="outline" size="sm" className="gap-2 h-9 text-xs sm:text-sm font-medium rounded-xl border-border/80 hover:border-primary/40">
            <LayoutDashboard size={15} />
            <span className="hidden md:inline">{t("dashboard")}</span>
          </Button>
        </Link>

        <Link href="/transaction/create">
          <Button size="sm" className="gap-2 h-9 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs text-xs sm:text-sm font-bold rounded-xl">
            <PenBox size={15} />
            <span className="hidden md:inline">{t("add_transaction")}</span>
          </Button>
        </Link>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline" size="sm" className="h-9 text-xs sm:text-sm font-medium rounded-xl border-border/80">
            {t("login")}
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button size="sm" className="h-9 bg-primary text-primary-foreground hover:bg-primary/90 shadow-xs text-xs sm:text-sm font-bold rounded-xl">
            {t("signup")}
          </Button>
        </SignUpButton>
      </SignedOut>
    </div>
  );
}
