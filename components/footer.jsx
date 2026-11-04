import Link from "next/link";
import { BrandLogo } from "@/components/logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              Vaultix is an intelligent personal wealth and cash flow operating system designed to give you clarity, eliminate financial leaks, and compound your wealth.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/transaction/create" className="hover:text-primary transition-colors">
                  Add Transaction
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider">
              Security & Privacy
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-xs inline-flex items-center px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-400 font-medium">
                  Bank-Grade Encryption
                </span>
              </li>
              <li className="text-xs text-muted-foreground">
                Your financial data is encrypted and completely confidential.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Vaultix. All rights reserved.</p>
          <p>
            Designed & Engineered with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
