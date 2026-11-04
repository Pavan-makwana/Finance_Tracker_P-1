import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, EyeOff, Server, Database } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Finora",
  description: "Learn how Finora protects and encrypts your personal financial data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-20 container mx-auto px-4 max-w-4xl">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5" /> Privacy & Security Commitment
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: November 2026 • Effective immediately
        </p>
      </div>

      {/* Key Guarantees */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="p-5 rounded-2xl border border-border/80 bg-card/60 space-y-2">
          <Lock className="w-6 h-6 text-blue-500" />
          <h3 className="font-bold text-sm">No Banking Passwords</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Finora never asks for, captures, or stores your net-banking passwords, UPI PINs, or debit/credit card numbers.
          </p>
        </div>
        <div className="p-5 rounded-2xl border border-border/80 bg-card/60 space-y-2">
          <EyeOff className="w-6 h-6 text-emerald-500" />
          <h3 className="font-bold text-sm">Zero Data Selling</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We do not sell, rent, monetize, or broker your financial transactions to third-party ad networks or brokers.
          </p>
        </div>
        <div className="p-5 rounded-2xl border border-border/80 bg-card/60 space-y-2">
          <Database className="w-6 h-6 text-purple-500" />
          <h3 className="font-bold text-sm">Encrypted at Rest</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            All database records, transaction notes, and budget configurations are stored with AES-256 standard encryption.
          </p>
        </div>
      </div>

      {/* Policy Details */}
      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>
            When you create an account with Finora, we collect basic profile information through our identity provider (Clerk), including your name and email address. When using the expense tracking tools, you may voluntarily record account titles (e.g., "HDFC Savings"), transactions (amounts, categories, dates, and optional notes), and monthly budget limits.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to provide you with financial dashboard analytics, monthly budget tracking, recurring commitment reminders, and exportable CSV statements. We do not use your financial data for promotional marketing or advertising.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">3. Data Security & Storage</h2>
          <p>
            All communications between your browser, mobile app, and our servers use TLS 1.3 cryptographic protocols. Databases are hosted in secured, SOC-2 compliant cloud infrastructure with automated hourly backups and restricted access controls.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">4. User Rights & Data Deletion</h2>
          <p>
            You own your financial data. You have the right at any time to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm">
            <li>Export your complete transaction history to standard CSV spreadsheets.</li>
            <li>Delete individual transactions or bulk wipe all logged records.</li>
            <li>Request permanent account deletion and complete erasure of all associated data from our servers.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">5. Contact Information</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request data deletion, contact our privacy engineering team at <span className="font-mono text-primary font-semibold">privacy@Finora.app</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
