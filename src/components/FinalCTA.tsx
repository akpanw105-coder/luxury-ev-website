"use client";

import { ArrowUpRight, Shield, CheckCircle2 } from "lucide-react";

interface FinalCTAProps {
  onReserveClick?: () => void;
  onConfiguratorClick?: () => void;
}

export default function FinalCTA({ onReserveClick, onConfiguratorClick }: FinalCTAProps) {
  return (
    <section className="relative py-36 bg-automotive-950 overflow-hidden">
      {/* Background Radiance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-automotive-accent/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        {/* Reservation Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-automotive-accent/40 bg-automotive-accent/5 backdrop-blur-md mb-8">
          <span className="w-2 h-2 rounded-full bg-automotive-accent animate-pulse" />
          <span className="text-xs font-mono tracking-widest uppercase text-automotive-accent">
            ALLOCATION WINDOW OPEN {"//"} FOUNDER SERIES 01
          </span>
        </div>

        {/* Flagship Headline */}
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide uppercase text-white leading-none">
          Command Your <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-silver to-automotive-accent">
            AETHER GT9
          </span>
        </h2>

        <p className="mt-8 text-base sm:text-xl text-automotive-silver/80 font-light max-w-2xl mx-auto leading-relaxed">
          Production is strictly limited to 500 bespoke units worldwide. Secure your bespoke delivery position today.
        </p>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onReserveClick}
            className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-white to-automotive-silver text-automotive-950 font-semibold text-xs tracking-widestLuxury uppercase hover:from-automotive-accent hover:to-automotive-electric transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_rgba(47,213,197,0.4)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Reserve Build Allocation
          </button>

          <button
            onClick={onConfiguratorClick}
            className="w-full sm:w-auto px-10 py-5 rounded-full border border-white/20 bg-white/[0.03] text-white hover:border-automotive-accent hover:text-automotive-accent font-medium text-xs tracking-widestLuxury uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Launch Bespoke Studio</span>
            <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Reassurance Accents */}
        <div className="mt-16 pt-12 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-automotive-steel uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-automotive-accent" />
            <span>Fully Refundable Deposit</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-automotive-accent" />
            <span>Concierge Atelier Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-automotive-accent" />
            <span>Handcrafted in Zurich & Milan</span>
          </div>
        </div>
      </div>
    </section>
  );
}
