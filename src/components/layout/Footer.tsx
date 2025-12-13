"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { 
  Moon, 
  Sun, 
  Facebook, 
  Instagram, 
  Twitter, 
  Phone, 
  ArrowRight
} from "lucide-react"; 
import { siteConfig } from "@/config/site";

// --- Components ---

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    // Schedule setMounted asynchronously to avoid cascading renders
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Render skeleton/placeholder during SSR (matches original loading prop)
  if (!mounted) {
    return <div className="h-8 w-14 rounded-full bg-secondary-foreground/5" />;
  }

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

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      aria-label={label}
      target="_blank" 
      rel="noopener noreferrer" 
      className="p-2.5 rounded-full bg-secondary-foreground/5 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
    >
      {icon}
    </a>
  );
}

// --- Main Footer Component ---

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [imageError, setImageError] = useState(false);

  return (
    <footer className="bg-secondary text-secondary-foreground pt-12 md:pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-4">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-b border-secondary-foreground/10 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            
            {/* LOGO WITH FALLBACK */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 overflow-hidden">
               {!imageError ? (
                 <Image 
                   src={siteConfig.logo?.icon || "/logo-placeholder.png"} 
                   alt={siteConfig.name} 
                   width={48} 
                   height={48}
                   className="object-cover"
                   onError={() => setImageError(true)}
                 />
               ) : (
                 <span className="text-xl font-bold">{siteConfig.name.charAt(0)}</span>
               )}
            </div>

            <p className="text-secondary-foreground/70 text-sm md:text-base max-w-xs leading-relaxed">
              {siteConfig.description}
            </p>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-4">
             <h3 className="font-bold text-lg mb-3 md:mb-4">Stay Connected</h3>
             <div className="flex items-center gap-2 bg-secondary-foreground/5 p-1 rounded-lg border border-secondary-foreground/10 focus-within:border-primary transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none text-sm p-3 w-full outline-none placeholder:text-secondary-foreground/40"
                />
                <button aria-label="Subscribe" className="bg-primary hover:bg-primary/90 text-primary-foreground p-2.5 rounded-md transition-all">
                  <ArrowRight className="h-4 w-4" />
                </button>
             </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-8 gap-6">
          <p className="text-xs md:text-sm text-secondary-foreground/50 text-center md:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center gap-4">
              <SocialLink label="Twitter" href={siteConfig.links?.x || "#"} icon={<Twitter className="h-5 w-5" />} />
              <SocialLink label="Facebook" href={siteConfig.links?.facebook || "#"} icon={<Facebook className="h-5 w-5" />} />
              <SocialLink label="Instagram" href={siteConfig.links?.instagram || "#"} icon={<Instagram className="h-5 w-5" />} />
              <SocialLink label="WhatsApp" href={siteConfig.links?.whatsapp || "#"} icon={<Phone className="h-5 w-5" />} />
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}