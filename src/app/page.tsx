"use client";

import { useEffect } from "react";
import { auth } from "@/firebase/config"; 
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {

  useEffect(() => {
    // Logic preserved, but outputs to console only
    if (!auth) {
        console.warn("Firebase Auth is not initialized.");
        return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ System Online: Authenticated");
      } else {
        console.log("🟢 System Online: Guest Mode");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    // Minimal structure: Responsive background, centered content
    <main className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground transition-colors duration-300">
      
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight opacity-50">
          System Standby
        </h1>
        <p className="text-sm opacity-30 mt-2">
          Check console for auth status
        </p>
      </div>

    </main>
  );
}