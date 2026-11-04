"use client";

import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function HeaderNav() {
  const { t } = useLanguage();

  return (
    <div className="flex items-center space-x-2 sm:space-x-3">
      <SignedIn>
        <Link href="/dashboard" className="transition-colors">
          <Button variant="outline" size="sm" className="gap-2 h-9 text-xs sm:text-sm font-medium">
            <LayoutDashboard size={15} />
            <span className="hidden md:inline">{t("dashboard")}</span>
          </Button>
        </Link>

        <Link href="/transaction/create">
          <Button size="sm" className="gap-2 h-9 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm text-xs sm:text-sm font-semibold">
            <PenBox size={15} />
            <span className="hidden md:inline">{t("add_transaction")}</span>
          </Button>
        </Link>
      </SignedIn>

      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="outline" size="sm" className="h-9 text-xs sm:text-sm font-medium">
            {t("login")}
          </Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button size="sm" className="h-9 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm text-xs sm:text-sm font-semibold">
            {t("signup")}
          </Button>
        </SignUpButton>
      </SignedOut>
    </div>
  );
}
