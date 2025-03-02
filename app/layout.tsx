import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Residencia",
  description: "Affordable and comfortable rooms for rent",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <MobileNav />
                  <Link href="/" className="text-xl font-bold text-[#295548]">
                    Residencia
                  </Link>
                </div>
                <div className="hidden md:flex md:items-center md:space-x-8">
                  <NavLinks />
                </div>
                <div className="flex items-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}
