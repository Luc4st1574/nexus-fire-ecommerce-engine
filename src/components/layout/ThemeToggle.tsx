"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="group relative flex h-8 w-14 items-center rounded-full bg-secondary-foreground/10 p-1 transition-colors hover:bg-secondary-foreground/20"
        aria-label="Toggle Dark Mode"
        >
        <span
            className={`flex h-6 w-6 transform items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6" : "translate-x-0"
            }`}
        >
            {theme === "dark" ? <Moon className="h-3 w-3" /> : <Sun className="h-3 w-3" />}
        </span>
        </button>
    );
}