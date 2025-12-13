"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
    const [imageError, setImageError] = useState(false);

    return (
        <header
            // Using reliable Arbitrary Value for BG
            className="sticky top-0 left-0 w-full shadow-md bg-[var(--primary)]"
        >
            {/* Increased height from h-24 to h-32 (128px) */}
            <div className="container mx-auto flex h-32 items-center justify-between px-4 md:px-8 gap-4">
                {/* --- LEFT: LOGO --- */}
                <Link href="/" className="flex-shrink-0" aria-label="Go to Homepage">
                    <div className="relative h-16 w-auto flex items-center">
                        {!imageError ? (
                            <Image
                                src={siteConfig.logo?.icon || "/logo-placeholder.png"}
                                alt={siteConfig.name}
                                width={240}
                                height={60}
                                className="object-contain object-left"
                                onError={() => setImageError(true)}
                                priority
                            />
                        ) : (
                            <span 
                                className="text-4xl font-black italic text-[var(--primary-foreground)] tracking-tighter uppercase"
                            >
                                {siteConfig.name}
                            </span>
                        )}
                    </div>
                </Link>
                {/* --- RIGHT: ICONS (Lines and Padding) --- */}
                {/* flex items-center and gap-6 are critical for the dividers to show up */}
                <div className="flex items-center gap-6 pr-4">
                    
                    {/* Left Vertical Line (Divider) */}
                    <span 
                        // h-8, w-px, and bg-[var(--secondary)] are critical
                        className="h-8 w-px bg-[var(--secondary)]" 
                        aria-hidden="true" 
                    />

                    <button
                        aria-label="View Cart"
                        className="relative bg-transparent border-none outline-none focus:outline-none text-[var(--secondary)] hover:opacity-80 transition-opacity"
                    >
                        <ShoppingCart className="h-9 w-9 pr-58" />
                    </button>
                    
                    {/* Right Vertical Line (Divider) */}
                    <span 
                        // h-8, w-px, and bg-[var(--secondary)] are critical
                        className="h-8 w-px bg-[var(--secondary)]" 
                        aria-hidden="true" 
                    />
                </div>
            </div>
        </header>
    );
}