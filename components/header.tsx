"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="h-1 bg-accent" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo2.png"
              alt="Vuza Trading Logo"
              width={250} // Increased resolution so it doesn't look pixelated
              height={100} // Keep aspect ratio roughly same as width
              className="h-16 w-auto object-contain" // h-16 = 64px (Fits inside your h-20 header)
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="text-sm font-medium uppercase text-foreground transition-colors hover:text-accent"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-sm font-medium uppercase text-foreground transition-colors hover:text-accent"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="text-sm font-medium uppercase text-foreground transition-colors hover:text-accent"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "#portfolio")}
              className="text-sm font-medium uppercase text-foreground transition-colors hover:text-accent"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="text-sm font-medium uppercase text-foreground transition-colors hover:text-accent"
            >
              Contact
            </a>
            <Button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("quote");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Get a Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-muted md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <div className="container mx-auto space-y-1 px-4 pb-3 pt-2">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="block rounded-md px-3 py-2 text-base font-medium uppercase text-foreground hover:bg-muted"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="block rounded-md px-3 py-2 text-base font-medium uppercase text-foreground hover:bg-muted"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className="block rounded-md px-3 py-2 text-base font-medium uppercase text-foreground hover:bg-muted"
            >
              Services
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, "#portfolio")}
              className="block rounded-md px-3 py-2 text-base font-medium uppercase text-foreground hover:bg-muted"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="block rounded-md px-3 py-2 text-base font-medium uppercase text-foreground hover:bg-muted"
            >
              Contact
            </a>
            <Button
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("quote");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
                setMobileMenuOpen(false);
              }}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
