"use client";

import { useState } from "react";

interface DesignPillar {
  id: string;
  category: string;
  title: string;
  headline: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  accentColor: string;
  graphicSvg: React.ReactNode;
}

export default function DesignSection() {
  const [activeTab, setActiveTab] = useState<string>("aero");

  const pillars: DesignPillar[] = [
    {
      id: "aero",
      category: "AERODYNAMICS",
      title: "Flow Velocity Architecture",
      headline: "Carving through resistance without friction.",
      description:
        "Every surface curve of the GT9 guides incoming air currents through inverted laminar ducting. Dual air-curtains in front of the wheels eliminate turbulence, achieving a segment-shattering 0.198 drag coefficient.",
      metricLabel: "AERODYNAMIC DRAG",
      metricValue: "0.198 Cd",
      accentColor: "#2fd5c5",
      graphicSvg: (
        <svg viewBox="0 0 400 200" className="w-full h-full opacity-80" fill="none">
          <path d="M 20 100 Q 120 40 220 50 Q 320 60 380 120" stroke="#2fd5c5" strokeWidth="2" strokeDasharray="5 5" />
          <path d="M 20 130 Q 140 80 240 90 Q 320 100 380 150" stroke="#4895ef" strokeWidth="1.5" />
          <path d="M 20 70 Q 130 20 250 30 Q 330 40 380 90" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <circle cx="200" cy="110" r="45" stroke="#7b8794" strokeWidth="1" strokeDasharray="4 4" />
          <text x="200" y="115" textAnchor="middle" fill="#c0c5ce" fontSize="10" fontFamily="monospace">LAMINAR CONDUIT</text>
        </svg>
      ),
    },
    {
      id: "lighting",
      category: "LIGHT SIGNATURE",
      title: "Matrix Quantum Laser Light",
      headline: "Lighting that anticipates the horizon.",
      description:
        "Ultrafine crystal optic lightblades project up to 650 meters with micro-mirror precision. Coordinated with navigation telematics, the beam pattern curves into apex corners before steering input occurs.",
      metricLabel: "BEAM PROJECTION",
      metricValue: "650 m",
      accentColor: "#4895ef",
      graphicSvg: (
        <svg viewBox="0 0 400 200" className="w-full h-full opacity-80" fill="none">
          <polygon points="50,100 350,30 350,170" fill="url(#laserCone)" opacity="0.4" />
          <line x1="50" y1="100" x2="350" y2="100" stroke="#4895ef" strokeWidth="2" />
          <circle cx="50" cy="100" r="8" fill="#4895ef" filter="drop-shadow(0 0 8px #4895ef)" />
          <defs>
            <linearGradient id="laserCone" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4895ef" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#4895ef" stopOpacity="0" />
            </linearGradient>
          </defs>
          <text x="200" y="105" textAnchor="middle" fill="#ffffff" fontSize="10" fontFamily="monospace">ADAPTIVE PHOTON FLUX</text>
        </svg>
      ),
    },
    {
      id: "wheels",
      category: "WHEELS & STANCE",
      title: "Active Turboblade Alloys",
      headline: "Aerodynamic rotating turbines with zero brake fade.",
      description:
        "Forged from single-billet aeronautical aluminum with carbon-fiber variable vanes that automatically draw heat away from the ceramic rotors under spirited decelerations while maintaining flat aero efficiency on the freeway.",
      metricLabel: "DIAMETER / SPEC",
      metricValue: '22" Staggered',
      accentColor: "#d4af37",
      graphicSvg: (
        <svg viewBox="0 0 400 200" className="w-full h-full opacity-80" fill="none">
          <circle cx="200" cy="100" r="70" stroke="#d4af37" strokeWidth="2" />
          <circle cx="200" cy="100" r="45" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="6 3" />
          <line x1="130" y1="100" x2="270" y2="100" stroke="#d4af37" strokeWidth="1.5" />
          <line x1="200" y1="30" x2="200" y2="170" stroke="#d4af37" strokeWidth="1.5" />
          <line x1="150" y1="50" x2="250" y2="150" stroke="#d4af37" strokeWidth="1" />
          <line x1="150" y1="150" x2="250" y2="50" stroke="#d4af37" strokeWidth="1" />
          <circle cx="200" cy="100" r="14" fill="#060709" stroke="#d4af37" strokeWidth="2" />
          <text x="200" y="104" textAnchor="middle" fill="#d4af37" fontSize="8" fontFamily="monospace">AERO-BLADE</text>
        </svg>
      ),
    },
    {
      id: "surfaces",
      category: "SURFACES & MATERIALS",
      title: "Liquid Carbon Matrix",
      headline: "Structural tactile grandeur.",
      description:
        "Infused with nanoscale metallic flakes beneath self-healing ceramic lacquer. The bodywork subtly shifts pigmentation between deep celestial graphite and luminous tungsten depending on solar incidence.",
      metricLabel: "COATING THICKNESS",
      metricValue: "18 Layers",
      accentColor: "#c0c5ce",
      graphicSvg: (
        <svg viewBox="0 0 400 200" className="w-full h-full opacity-80" fill="none">
          <rect x="80" y="40" width="240" height="120" rx="12" stroke="#c0c5ce" strokeWidth="1.5" strokeDasharray="4 2" />
          <path d="M 80 80 Q 200 120 320 80" stroke="#2fd5c5" strokeWidth="2" />
          <path d="M 80 120 Q 200 160 320 120" stroke="#4895ef" strokeWidth="1.5" />
          <text x="200" y="70" textAnchor="middle" fill="#ffffff" fontSize="9" fontFamily="monospace">NANO-CERAMIC COAT</text>
        </svg>
      ),
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activeTab) || pillars[0];

  return (
    <section id="design" className="relative py-32 bg-automotive-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widestLuxury text-automotive-accent mb-3">
              <span>02 {"//"} DESIGN PHILOSOPHY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light uppercase text-white tracking-wide">
              Sculpted by <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-automotive-accent">Velocity</span>
            </h2>
          </div>
          <p className="text-automotive-steel text-xs sm:text-sm font-mono tracking-widest max-w-xs uppercase">
            {"//"} Form strictly follows atmospheric fluid dynamics.
          </p>
        </div>

        {/* Pillar Navigation Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-12 border-b border-white/5 pb-4">
          {pillars.map((pillar) => {
            const isActive = activeTab === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-white text-automotive-950 font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : "text-automotive-silver/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {pillar.category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detailed Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Cinematic Graphic & Visual Canvas Placeholder */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden glass-panel border border-white/10 p-8 sm:p-12 relative min-h-[420px] flex flex-col justify-between group">
            <div className="absolute inset-0 bg-radial-glow opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-automotive-950 via-transparent to-transparent opacity-80" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="text-xs font-mono tracking-widestLuxury text-automotive-accent uppercase">
                {currentPillar.category} SPECIFICATION
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono text-automotive-silver">
                ACTIVE
              </span>
            </div>

            <div className="relative z-10 w-full my-6 flex items-center justify-center min-h-[220px]">
              {currentPillar.graphicSvg}
            </div>

            <div className="relative z-10 flex items-end justify-between pt-6 border-t border-white/10">
              <div>
                <span className="text-[10px] font-mono text-automotive-steel uppercase tracking-widest block">
                  {currentPillar.metricLabel}
                </span>
                <span className="text-2xl sm:text-3xl font-light text-white tracking-wider">
                  {currentPillar.metricValue}
                </span>
              </div>
              <span className="text-xs font-mono text-automotive-silver/60">
                [ VISUAL MEDIA CONTAINER READY ]
              </span>
            </div>
          </div>

          {/* Right: Editorial Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="inline-block px-3 py-1 rounded-md bg-automotive-accent/10 border border-automotive-accent/30 text-automotive-accent text-[11px] font-mono tracking-widest uppercase w-fit">
              {currentPillar.title}
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-light text-white uppercase tracking-wide leading-tight">
              {currentPillar.headline}
            </h3>

            <p className="text-automotive-silver/80 text-sm sm:text-base leading-relaxed font-light">
              {currentPillar.description}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="glass-panel p-4 rounded-xl">
                <span className="text-[10px] font-mono text-automotive-steel uppercase tracking-widest block mb-1">
                  MATERIAL ALLOY
                </span>
                <span className="text-sm font-medium text-white">Carbon-Titanium Web</span>
              </div>
              <div className="glass-panel p-4 rounded-xl">
                <span className="text-[10px] font-mono text-automotive-steel uppercase tracking-widest block mb-1">
                  PRECISION TOLERANCE
                </span>
                <span className="text-sm font-medium text-white">± 0.25 mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
