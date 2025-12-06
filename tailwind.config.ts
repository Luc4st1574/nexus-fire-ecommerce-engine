import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        colors: {
            // 1. The Page Base (Adaptive)
            background: "var(--background)",
            foreground: "var(--foreground)",

            // 2. The Brand (Fixed across modes)
            primary: {
            DEFAULT: "var(--primary)",
            foreground: "var(--primary-foreground)",
            },
            secondary: {
            DEFAULT: "var(--secondary)",
            foreground: "var(--secondary-foreground)",
            },

            // 3. The Static Utilities (Never change)
            static: {
            white: "var(--static-white)",
            black: "var(--static-black)",
            },
        },
        // We will configure the specific font in the next step (layout.tsx)
        // but this sets up the variable for Tailwind to read.
        fontFamily: {
            sans: ["var(--font-geist-sans)"],
            mono: ["var(--font-geist-mono)"],
        },
        },
    },
    plugins: [],
};
export default config;