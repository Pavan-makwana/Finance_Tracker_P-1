import {
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { checkUser } from "@/lib/checkuser";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandLogo } from "@/components/logo";
import { HeaderNav } from "@/components/header-nav";

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
          <HeaderNav />

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
