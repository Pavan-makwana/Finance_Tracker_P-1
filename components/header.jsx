import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, PenBox } from "lucide-react";
import Link from "next/link";
import { checkUser } from "@/lib/checkuser";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandLogo } from "@/components/logo";

const Header = async () => {
  await checkUser();

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50 transition-colors">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Modern Vector Animated Brand Logo */}
        <Link href="/" className="transition-transform hover:scale-102">
          <BrandLogo size="md" animated={true} />
        </Link>

        {/* Navigation Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <SignedIn>
            <Link href="/dashboard" className="transition-colors">
              <Button variant="outline" size="sm" className="gap-2 h-9 text-xs sm:text-sm font-medium">
                <LayoutDashboard size={15} />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>

            <Link href="/transaction/create">
              <Button size="sm" className="gap-2 h-9 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm text-xs sm:text-sm font-semibold">
                <PenBox size={15} />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="outline" size="sm" className="h-9 text-xs sm:text-sm">
                Login
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm" className="h-9 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm text-xs sm:text-sm font-semibold">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>

          {/* Multi-Language & Tour Switcher */}
          <LanguageSwitcher />

          {/* Dark / Light Mode Switcher */}
          <ThemeToggle />

          <SignedIn>
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "h-9 w-9 ring-2 ring-primary/20 hover:ring-primary/40 transition-all",
                },
              }}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
