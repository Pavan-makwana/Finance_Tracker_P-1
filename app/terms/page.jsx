import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Vaultix",
  description: "Terms and conditions for utilizing the Vaultix financial operating system.",
};

export default function TermsPage() {
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-50/50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5" /> Agreement & Conditions
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground">
          Last updated: November 2026 • Version 2.0
        </p>
      </div>

      <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Vaultix (the "Service"), whether via web browser or mobile application, you agree to be bound by these Terms of Service. If you do not agree to all terms, do not access or use the Service.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">2. Financial Disclaimer</h2>
          <p>
            Vaultix is a financial tracking, budgeting, and informational software tool. Vaultix does not provide registered financial, investment, legal, or tax advice. Calculations, wealth simulations, and budget projections are provided for self-service informational planning purposes only.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">3. Account Responsibility</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized access.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">4. Acceptable Use</h2>
          <p>
            You agree not to misuse the Service, reverse engineer internal APIs, probe for vulnerabilities, or attempt to circumvent authentication mechanisms.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-foreground">5. Termination & Continuity</h2>
          <p>
            You may discontinue using Vaultix at any time and export or delete your stored records. Vaultix reserves the right to suspend accounts violating these terms or engaging in malicious misuse.
          </p>
        </section>
      </div>
    </div>
  );
}
