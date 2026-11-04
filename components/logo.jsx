"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  size = "md",
  showText = true,
  animated = true,
  className,
}) {
  const sizeMap = {
    sm: { icon: "w-7 h-7", text: "text-lg", dot: "w-1.5 h-1.5" },
    md: { icon: "w-9 h-9", text: "text-xl", dot: "w-2 h-2" },
    lg: { icon: "w-12 h-12", text: "text-2xl sm:text-3xl", dot: "w-2.5 h-2.5" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      {/* Animated Icon Symbol */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-md shadow-indigo-500/20 group-hover:shadow-indigo-500/40 group-hover:scale-105 transition-all duration-300",
          currentSize.icon
        )}
      >
        {/* Inner SVG Geometric Crest */}
        <div className="w-full h-full rounded-[10px] bg-background/90 dark:bg-slate-950/90 flex items-center justify-center p-1.5 backdrop-blur-sm overflow-hidden relative">
          {/* Subtle Ambient Rotation Glow */}
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-transparent to-purple-500/30 animate-[spin_6s_linear_infinite] opacity-60 pointer-events-none" />
          )}

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-xs"
          >
            {/* Outer Diamond Shield */}
            <path
              d="M12 2L3 7V13C3 18.2 7 21.6 12 22.5C17 21.6 21 18.2 21 13V7L12 2Z"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Vault Nodes */}
            <path
              d="M12 7L16 11L12 15L8 11L12 7Z"
              className="fill-indigo-600 dark:fill-indigo-400 opacity-90"
            />
            {/* Central Pulse Dot */}
            <circle
              cx="12"
              cy="11"
              r="1.8"
              className="fill-emerald-400 animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex items-center tracking-tight">
          <span className={cn("font-black tracking-tight text-foreground", currentSize.text)}>
            Vault
          </span>
          <span
            className={cn(
              "font-black tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent",
              currentSize.text
            )}
          >
            ix
          </span>
          <span className={cn("rounded-full bg-emerald-500 ml-0.5 animate-pulse shrink-0", currentSize.dot)} />
        </div>
      )}
    </div>
  );
}
