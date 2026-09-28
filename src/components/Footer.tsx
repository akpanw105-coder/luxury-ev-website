"use client";

import { ArrowUp, Globe } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-automotive-950 border-t border-white/10 pt-24 pb-12 overflow-hidden text-automotive-silver/70">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Upper Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">
          {/* Brand Intro */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full border border-automotive-accent flex items-center justify-center bg-automotive-900">
                <div className="w-2.5 h-2.5 bg-automotive-accent rounded-sm rotate-45" />
              </div>
              <span className="font-display text-xl font-light tracking-widestLuxury uppercase text-white">
                A E T H E R
              </span>
            </div>
            <p className="text-xs sm:text-sm font-light leading-relaxed max-w-sm text-automotive-silver/70">
              Pioneering hyper-electric grand tourers defined by aerospace aerodynamics, carbon-titanium architecture, and sovereign silence.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-automotive-steel">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-automotive-accent" />
                GLOBAL ATELIERS
              </span>
              <span>{"//"}</span>
              <span>ZURICH &bull; MILAN &bull; TOKYO</span>
            </div>
          </div>

          {/* Column 1: Vehicles */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">
              VEHICLES
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="#vehicle" className="hover:text-automotive-accent transition-colors flex items-center gap-2">
                  <span>AETHER GT9 Flagship</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-automotive-accent/20 text-automotive-accent">NEW</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-automotive-accent transition-colors opacity-60 pointer-events-none">
                  AETHER Aero-Speedster (2027)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-automotive-accent transition-colors opacity-60 pointer-events-none">
                  AETHER Hyper-SUV Concept
                </a>
              </li>
              <li>
                <a href="#design" className="hover:text-automotive-accent transition-colors">
                  Bespoke Atelier Commissioning
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Innovation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">
              INNOVATION
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="#performance" className="hover:text-automotive-accent transition-colors">
                  Axial-Flux Electric Quad-Drive
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-automotive-accent transition-colors">
                  Solid-State Battery Matrix
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-automotive-accent transition-colors">
                  Neural Drive OS v4.2
                </a>
              </li>
              <li>
                <a href="#interior" className="hover:text-automotive-accent transition-colors">
                  Zero-Gravity Cockpit
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier Concierge */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white mb-6">
              CONCIERGE
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="#" className="hover:text-automotive-accent transition-colors">
                  Private Showroom Request
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-automotive-accent transition-colors">
                  Fleet & Diplomatic Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-automotive-accent transition-colors">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-automotive-accent transition-colors">
                  Global Charging Network
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Disclaimer & Legal Links */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-mono text-automotive-steel">
          <div>
            &copy; {new Date().getFullYear()} AETHER AUTOMOTIVE HOLDINGS AG. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF COMMISSION</a>
            <a href="#" className="hover:text-white transition-colors">COOKIES CONFIGURATION</a>
            <a href="#" className="hover:text-white transition-colors">WLTP COMPLIANCE</a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors group"
            aria-label="Back to top"
          >
            <span>BACK TO APEX</span>
            <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-automotive-accent">
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
