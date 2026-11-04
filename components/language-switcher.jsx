"use client";

import { useLanguage, CURRENCY_CONFIG } from "@/components/language-provider";
import { Globe, DollarSign, HelpCircle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
];

export function LanguageSwitcher() {
  const { language, setLanguage, currency, setCurrency, openOnboarding, mounted } = useLanguage();

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
        <Globe className="h-4 w-4" />
      </Button>
    );
  }

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <div className="flex items-center gap-1">
      {/* Tour Guide Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={openOnboarding}
        className="h-9 w-9 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hidden sm:inline-flex"
        title="Interactive App Tour"
      >
        <HelpCircle className="h-4 w-4" />
      </Button>

      {/* Language & Currency Menu */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="h-9 px-2.5 rounded-full border border-border/50 gap-1.5 text-xs font-semibold text-foreground"
            title="Change language and currency"
          >
            <span className="text-sm">{currentLang.flag}</span>
            <span className="hidden md:inline">{currentLang.code.toUpperCase()}</span>
            <span className="text-muted-foreground font-mono">({CURRENCY_CONFIG[currency]?.symbol})</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-52 p-2">
          <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Select Language
          </DropdownMenuLabel>
          {LANGUAGES.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="flex items-center justify-between text-xs py-2 cursor-pointer rounded-md"
            >
              <span className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span className="font-medium">{lang.label}</span>
              </span>
              {language === lang.code && <Check className="w-3.5 h-3.5 text-primary" />}
            </DropdownMenuItem>
          ))}

          <DropdownMenuSeparator className="my-1.5" />

          <DropdownMenuLabel className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Display Currency
          </DropdownMenuLabel>
          <div className="grid grid-cols-2 gap-1 p-1">
            {Object.keys(CURRENCY_CONFIG).map((curKey) => (
              <button
                key={curKey}
                type="button"
                onClick={() => setCurrency(curKey)}
                className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-md text-xs font-mono font-medium transition-colors ${
                  currency === curKey
                    ? "bg-primary text-primary-foreground shadow-xs"
                    : "bg-muted/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>{CURRENCY_CONFIG[curKey].symbol}</span>
                <span>{curKey}</span>
              </button>
            ))}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
