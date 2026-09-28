"use client";

import { ArrowDown, ChevronRight } from "lucide-react";
import CinematicVideo from "./CinematicVideo";

const CLOUDINARY_VIDEO_URL =
  "https://res.cloudinary.com/oebaqlvj/video/upload/v1790621804/Creating_luxury_electric_vehicle__20260928114945_1.mp4";

interface HeroSectionProps {
  onReserveClick?: () => void;
  onSpecsClick?: () => void;
}

export default function HeroSection({ onReserveClick, onSpecsClick }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-end justify-center overflow-hidden bg-automotive-950"
      aria-label="Hero — AETHER GT9"
    >
      {/* ── FULL-BLEED CINEMATIC VIDEO ─────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        <CinematicVideo
          src={CLOUDINARY_VIDEO_URL}
          overlayOpacity={0.38}
          gradientDirection="to top"
          gradientColor="#060709"
        />
      </div>

      {/* ── AMBIENT LIGHT BLOBS (behind text, above video) ────────────── */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-automotive-electric/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[300px] bg-automotive-accent/8 blur-[120px] rounded-full" />
      </div>

      {/* ── CONTENT ───────────────────────────────────────────────────── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-20 pt-40">
        {/* Badge */}
        <div className="flex flex-col items-center text-center animate-fade-in mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-automotive-accent animate-pulse" />
            <span className="text-[11px] font-mono tracking-widestLuxury uppercase text-automotive-silver">
              THE ALL-ELECTRIC FLAGSHIP GRAND TOURER
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-widestLuxury uppercase text-white drop-shadow-2xl leading-none">
            AETHER{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-silver to-automotive-accent">
              GT9
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base md:text-lg text-automotive-silver/80 max-w-2xl font-light tracking-wide leading-relaxed">
            Architected beyond limits. 1,180 horsepower of silent omnipotence,
            sculptured carbon-titanium bodywork, and sovereign autonomous mastery.
          </p>
        </div>

        {/* CTAs + Scroll Indicator */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <button
            onClick={onReserveClick}
            className="px-10 py-4 rounded-full bg-white text-automotive-950 font-semibold text-xs tracking-widestLuxury uppercase hover:bg-automotive-accent transition-all duration-300 shadow-xl hover:shadow-[0_0_40px_rgba(47,213,197,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-automotive-accent"
          >
            Reserve Build Allocation
          </button>

          <button
            onClick={onSpecsClick}
            className="px-10 py-4 rounded-full border border-white/20 bg-white/[0.04] text-white hover:border-automotive-accent hover:text-automotive-accent font-medium text-xs tracking-widestLuxury uppercase backdrop-blur-md transition-all duration-300 flex items-center gap-2 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-automotive-accent"
          >
            <span>Explore Specifications</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Scroll Hint */}
        <div className="flex justify-center mt-14">
          <a
            href="#vehicle"
            className="flex flex-col items-center gap-2 text-automotive-silver/50 hover:text-automotive-accent transition-colors group"
            aria-label="Scroll to vehicle overview"
          >
            <span className="text-[10px] font-mono tracking-extremeLuxury uppercase">
              Scroll
            </span>
            <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center group-hover:border-automotive-accent/50 transition-colors">
              <ArrowDown className="w-3 h-3 animate-bounce text-automotive-accent" />
            </div>
          </a>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-automotive-950 to-transparent z-20 pointer-events-none" />
    </section>
  );
}
