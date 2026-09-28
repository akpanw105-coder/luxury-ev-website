"use client";

import { Eye, Layers } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function VehicleIntro() {
  const header = useScrollReveal({ threshold: 0.1 });
  const grid = useScrollReveal({ threshold: 0.08 });
  return (
    <section id="vehicle" className="relative py-32 bg-automotive-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-automotive-electric/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div
          ref={header.ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20 pb-12 border-b border-white/5 reveal-hidden ${
            header.isVisible ? "reveal-visible" : ""
          }`}
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widestLuxury text-automotive-accent mb-4">
              <span>01 {"//"} VEHICLE ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light tracking-wide uppercase text-white leading-tight">
              A Symphony of <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-silver to-automotive-accent">
                Kinetic Sculpture
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-automotive-silver/80 font-light text-sm sm:text-base leading-relaxed">
            <p>
              Born in our advanced aerodynamic wind tunnels and sculpted from aerospace carbon composite,
              the AETHER GT9 transcends conventional automotive silhouettes. Every contour directs airflow
              not merely to reduce drag, but to breathe vitality into its quad-core magnetic drivetrain.
            </p>
          </div>
        </div>

        {/* Large Editorial Visual Feature Showcase */}
        <div
          ref={grid.ref}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch reveal-hidden ${
            grid.isVisible ? "reveal-visible" : ""
          }`}
        >
          {/* Main Visual Frame (Placeholder container ready for high-res vehicle renders) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden glass-panel border border-white/10 relative min-h-[460px] flex flex-col justify-between p-8 group">
            {/* Visual Canvas Representation */}
            <div className="absolute inset-0 bg-gradient-to-br from-automotive-900 via-automotive-850 to-automotive-950 opacity-90 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-grid-pattern opacity-20" />
            
            {/* Architectural Blueprint Graphic */}
            <div className="relative z-10 w-full h-full flex items-center justify-center my-8">
              <svg viewBox="0 0 600 240" className="w-full max-w-lg h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                <path
                  d="M 50 180 Q 150 170 220 120 Q 320 60 420 100 Q 520 150 560 180"
                  fill="none"
                  stroke="#2fd5c5"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <circle cx="160" cy="180" r="30" stroke="#7b8794" strokeWidth="1.5" fill="none" />
                <circle cx="460" cy="180" r="30" stroke="#7b8794" strokeWidth="1.5" fill="none" />
                <line x1="50" y1="180" x2="560" y2="180" stroke="#222a3a" strokeWidth="1.5" />
                <rect x="220" y="90" width="160" height="40" rx="6" stroke="#4895ef" strokeWidth="1" fill="rgba(72,149,239,0.05)" />
                <text x="300" y="115" textAnchor="middle" fill="#c0c5ce" fontSize="10" fontFamily="monospace" letterSpacing="2">
                  MONOCOQUE CORE
                </text>
              </svg>
            </div>

            {/* Editorial Caption */}
            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-6 border-t border-white/10">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-automotive-accent block">
                  CHASSIS COMPOSITION
                </span>
                <span className="text-lg font-light text-white tracking-wide">
                  Single-Piece Carbon Monocoque with Titanium Subframes
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-automotive-steel block">
                  TORSIONAL RIGIDITY
                </span>
                <span className="text-xl font-medium text-white tracking-widest">
                  65,000 Nm/deg
                </span>
              </div>
            </div>
          </div>

          {/* Side Editorial Pillars */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="glass-panel glass-panel-hover p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-automotive-accent mb-6">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white mb-2">
                  Unveiled Geometry
                </h3>
                <p className="text-xs text-automotive-silver/70 leading-relaxed font-light">
                  No extraneous lines. The silhouette is defined by airflow dynamics, eliminating standard spoilers
                  through intelligent venturi tunnels beneath the floorpan.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-mono text-automotive-steel uppercase tracking-widest">
                DRAG COEFFICIENT {"//"} 0.198 Cd
              </div>
            </div>

            <div className="glass-panel glass-panel-hover p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-automotive-accent mb-6">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display text-xl uppercase tracking-wider text-white mb-2">
                  Adaptive Aerotactics
                </h3>
                <p className="text-xs text-automotive-silver/70 leading-relaxed font-light">
                  Micro-actuators along the front diffusers and rear vortex channels adjust 200 times per second
                  to deliver unyielding stability at high-velocity cruising.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/5 text-[10px] font-mono text-automotive-steel uppercase tracking-widest">
                ACTIVE DOWNFORCE {"//"} 450 KG AT 250 KM/H
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
