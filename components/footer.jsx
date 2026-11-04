"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/logo";
import { useLanguage } from "@/components/language-provider";
import { ShieldCheck, Lock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/60 bg-muted/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3 md:col-span-2">
            <Link href="/" className="inline-block">
              <BrandLogo size="md" animated={false} />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              {t("footer_desc")}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
              {t("nav_title")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t("nav_home")}
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary transition-colors">
                  {t("nav_dashboard")}
                </Link>
              </li>
              <li>
                <Link href="/transaction/create" className="hover:text-primary transition-colors">
                  {t("nav_add_tx")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
              {t("sec_title")}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-xs inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" /> {t("sec_badge")}
                </span>
              </li>
              <li className="text-xs text-muted-foreground leading-relaxed">
                {t("sec_desc")}
              </li>
              <li className="pt-2 flex flex-col gap-1.5">
                <Link href="/privacy-policy" className="text-xs text-primary hover:underline flex items-center gap-1">
                  <Lock className="w-3 h-3" /> {t("privacy_policy")}
                </Link>
                <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground hover:underline">
                  {t("terms_of_service")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Vaultix. {t("all_rights_reserved")}</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:underline">
              {t("privacy_policy")}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline">
              {t("terms_of_service")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
