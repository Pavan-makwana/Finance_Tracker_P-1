import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Personal Finance",
  description: "Track your personal finances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClerkProvider>
          {/* Header  */}
          <Header />

          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors position="top-right" />
          {/* Footer  */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600 ">
              <p>By Pavan</p>
            </div>
          </footer>
        </ClerkProvider>
      </body>
    </html>
  );
}
