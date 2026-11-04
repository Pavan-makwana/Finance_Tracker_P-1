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
    default: "Finora - Finance for Real Humans | 1-Tap Wealth Tracking",
    template: "%s | Finora",
  },
  description:
    "Zero financial jargon. 1-tap expense logging, daily safe-to-spend limits, 'Can I Afford It?' calculator, and automated bank statement imports.",
  keywords: [
    "finora",
    "personal finance",
    "simple expense tracker",
    "budget calculator",
    "can i afford it",
    "wealth tracker",
    "daily spend limit",
  ],
  authors: [{ name: "Finora" }],
  creator: "Finora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appUrl,
    title: "Finora - Finance for Real Humans | 1-Tap Wealth Tracking",
    description:
      "Finance made so simple anyone can master it. Track spending in 1 tap, get daily safe allowances, and grow your wealth effortlessly.",
    siteName: "Finora",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Finora Smart Financial Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finora - Finance for Real Humans",
    description:
      "Finance made so simple anyone can master it. Track spending in 1 tap, get daily safe allowances, and grow your wealth effortlessly.",
    images: ["/banner.jpeg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
      { url: "/logo.png" },
    ],
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
  name: "Finora",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web, iOS, Android",
  description:
    "Finance for real humans. 1-tap logging, daily safe limits, 'Can I Afford It?' decision engine, and automated wealth tracking.",
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
