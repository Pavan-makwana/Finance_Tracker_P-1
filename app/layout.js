import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { OnboardingModal } from "@/components/onboarding-modal";
import { PwaRegister } from "@/components/pwa-register";

const inter = Inter({ subsets: ["latin"] });

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: "Vaultix - Smart Wealth & Expense Operating System",
    template: "%s | Vaultix",
  },
  description:
    "Track expenses, manage monthly budgets, analyze multi-account cash flows, and build compounding wealth with real-time intelligence.",
  keywords: [
    "vaultix",
    "personal finance",
    "expense tracker",
    "wealth management",
    "budget planner",
    "cash flow analytics",
    "financial intelligence",
  ],
  authors: [{ name: "Vaultix" }],
  creator: "Vaultix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appUrl,
    title: "Vaultix - Smart Wealth & Expense Operating System",
    description:
      "Master your money. Track multi-account balances, set spending guardrails, and grow your net savings effortlessly.",
    siteName: "Vaultix",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Vaultix Financial Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaultix - Smart Wealth & Expense Operating System",
    description:
      "Master your money. Track multi-account balances, set spending guardrails, and grow your net savings effortlessly.",
    images: ["/banner.jpeg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vaultix",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Intelligent personal wealth and cash flow operating system that helps you track, analyze, and optimize your spending with real-time insights.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <LanguageProvider>
              <Header />
              <main className="min-h-screen">
                {children}
              </main>
              <Toaster richColors position="top-right" />
              <Footer />
              <OnboardingModal />
              <PwaRegister />
            </LanguageProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
