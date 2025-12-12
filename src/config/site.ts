import { Inter } from "next/font/google";

// 1. Initialize the Font
const fontSans = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const siteConfig = {
    name: "Nexus Fire Engine",
    description: "Master Template for Client Apps",
    location: "Global",

    // 🔠 Global Typography Config
    // This exports the font so the Layout can use it automatically
    fonts: {
        sans: fontSans,
    },
    
    // 🎨 Assets Configuration
    logo: {
        icon: "/assets/logo-icon.png",
        text: "/assets/logo-text.png",
        alt: "Brand Logo",
    },

    // 🔗 Social Links
    links: {
        x: "https://x.com/nexusfire",
        facebook: "https://facebook.com/nexusfire",
        instagram: "https://instagram.com/nexusfire",
        whatsapp: "https://wa.me/1234567890",
    },
};