"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// This is a simple wrapper component required by Next.js 
// because 'next-themes' uses Context, which must be a Client Component.
export function ThemeProvider({
    children,
    ...props
    }: React.ComponentProps<typeof NextThemesProvider>) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}