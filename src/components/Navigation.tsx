"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavigationProps {
  onReserveClick?: () => void;
}

export default function Navigation({ onReserveClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current section
      const sections = ["vehicle", "design", "performance", "technology", "interior", "experience"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Vehicle", href: "#vehicle", id: "vehicle" },
    { name: "Design", href: "#design", id: "design" },
    { name: "Performance", href: "#performance", id: "performance" },
    { name: "Technology", href: "#technology", id: "technology" },
    { name: "Interior", href: "#interior", id: "interior" },
    { name: "Experience", href: "#experience", id: "experience" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-nav py-3.5 shadow-2xl shadow-black/80"
            : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex items-center space-x-3 text-white transition-opacity hover:opacity-90"
            aria-label="AETHER Homepage"
          >
            <div className="w-8 h-8 rounded-full border border-automotive-accent/60 flex items-center justify-center relative overflow-hidden bg-automotive-900 group-hover:border-automotive-accent transition-colors">
              <div className="w-2.5 h-2.5 bg-automotive-accent rounded-sm rotate-45 transform group-hover:scale-125 transition-transform" />
              <div className="absolute inset-0 bg-automotive-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-light tracking-widestLuxury uppercase">
                A E T H E R
              </span>
              <span className="text-[9px] tracking-widest text-automotive-steel uppercase -mt-1 group-hover:text-automotive-accent transition-colors">
                Automotive
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 font-medium ${
                    isActive
                      ? "text-white"
                      : "text-automotive-silver/70 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-automotive-accent shadow-[0_0_8px_#2fd5c5]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#vehicle"
              className="text-xs uppercase tracking-widest text-white/80 hover:text-white px-3 py-2 transition-colors flex items-center gap-1 group"
            >
              <span>Discover</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onReserveClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-full border border-automotive-accent/60 bg-automotive-900/40 text-xs font-semibold uppercase tracking-widest text-white hover:border-automotive-accent transition-all duration-300 shadow-[0_0_15px_rgba(47,213,197,0.15)] hover:shadow-[0_0_25px_rgba(47,213,197,0.35)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Reserve GT9</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-automotive-accent/20 to-automotive-electric/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-automotive-950/95 backdrop-blur-xl md:hidden transition-all duration-300 flex flex-col justify-center px-8 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="text-xs tracking-extremeLuxury uppercase text-automotive-accent/80 font-mono mb-2">
            {"//"} Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-light tracking-widest text-white hover:text-automotive-accent transition-colors flex items-center justify-between border-b border-white/5 pb-3"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-5 h-5 text-automotive-steel" />
            </a>
          ))}
          <div className="pt-6 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (onReserveClick) onReserveClick();
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-automotive-accent to-automotive-electric text-automotive-950 text-xs font-bold uppercase tracking-widest text-center shadow-lg shadow-automotive-accent/20"
            >
              Reserve AETHER GT9
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
