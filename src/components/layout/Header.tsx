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
      // Added 'left-0' and ensured 'w-full' forces full width
      className="sticky top-0 left-0 w-full shadow-md"
      style={{ backgroundColor: "var(--primary)" }}
    >
      {/* Increased height from h-24 to h-32 (128px) */}
      <div className="container mx-auto flex h-32 items-center justify-between px-4 md:px-8 gap-4">
        {/* --- LEFT: LOGO --- */}
        <Link href="/" className="flex-shrink-0" aria-label="Go to Homepage">
          <div className="relative h-16 w-auto flex items-center">
            {/* Increased logo container height slightly */}
            {!imageError ? (
              <Image
                src={siteConfig.logo?.text || "/logo-placeholder.png"}
                alt={siteConfig.name}
                width={240} // Increased width slightly to match new height scale
                height={60}
                className="object-contain object-left"
                onError={() => setImageError(true)}
                priority
              />
            ) : (
              <span className="text-4xl font-black italic text-white tracking-tighter uppercase">
                {siteConfig.name}
              </span>
            )}
          </div>
        </Link>
        {/* --- RIGHT: ICONS --- */}
        <div className="flex items-center gap-6">
          <button
            aria-label="View Cart"
            className="relative bg-transparent border-none outline-none focus:outline-none text-[var(--secondary)] hover:opacity-80 transition-opacity"
          >
            <ShoppingCart className="h-9 w-9" />
          </button>
        </div>
      </div>
    </header>
  );
}