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
      {/* Animated Emblem Symbol */}
      <div
        className={cn(
          "relative flex items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-emerald-500 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 group-hover:scale-105 transition-all duration-300",
          currentSize.icon
        )}
      >
        {/* Inner Emblem Glass */}
        <div className="w-full h-full rounded-[14px] bg-background/95 dark:bg-slate-950/95 flex items-center justify-center p-1.5 backdrop-blur-md overflow-hidden relative">
          {/* Subtle Ambient Rotation Glow */}
          {animated && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-transparent to-emerald-500/25 animate-[spin_8s_linear_infinite] opacity-70 pointer-events-none" />
          )}

          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-xs"
          >
            {/* Prosperity Arch */}
            <path
              d="M5 12C5 8.13401 8.13401 5 12 5C14.887 5 17.3571 6.74438 18.4 9.2"
              className="stroke-cyan-500 dark:stroke-cyan-400"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Intersecting Wealth Rings */}
            <circle
              cx="9"
              cy="14"
              r="4"
              className="stroke-blue-600 dark:stroke-blue-400"
              strokeWidth="1.8"
            />
            <circle
              cx="15"
              cy="14"
              r="4"
              className="stroke-emerald-500 dark:stroke-emerald-400"
              strokeWidth="1.8"
            />
            {/* Center Core Spark */}
            <circle
              cx="12"
              cy="14"
              r="1.4"
              className="fill-cyan-400 animate-pulse"
            />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex items-center tracking-tight">
          <span className={cn("font-black tracking-tight text-foreground", currentSize.text)}>
            Fin
          </span>
          <span
            className={cn(
              "font-black tracking-tight bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 bg-clip-text text-transparent",
              currentSize.text
            )}
          >
            ora
          </span>
          <span className={cn("rounded-full bg-emerald-400 ml-1 animate-pulse shrink-0 shadow-xs shadow-emerald-400/80", currentSize.dot)} />
        </div>
      )}
    </div>
  );
}
