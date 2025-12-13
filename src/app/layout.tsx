import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { siteConfig } from "@/config/site";

// ✅ 1. Initialize Font
const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

// ✅ 2. Viewport
export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`
                    ${fontSans.variable}
                `}
            >
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    
                    <Header />
                    
                    {/* ✅ Main content area */}
                    <main className="flex-1 flex flex-col">
                        {children}
                    </main>
                    
                    <Footer />

                    <Toaster position="bottom-right" richColors closeButton />
                    
                </ThemeProvider>
            </body>
        </html>
    );
}