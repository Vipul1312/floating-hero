"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="fixed top-5 right-5 z-50 grid h-11 w-11 place-items-center rounded-full bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-black/5 transition hover:scale-110 dark:bg-white/10 dark:ring-white/10"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-brand-dark" />
      )}
    </button>
  );
}
