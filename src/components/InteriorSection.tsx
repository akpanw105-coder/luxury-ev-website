"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";

interface InteriorZone {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  material: string;
  soundscape: string;
}

export default function InteriorSection() {
  const [activeZone, setActiveZone] = useState<string>("cockpit");
  const [ambientLight, setAmbientLight] = useState<string>("cyan");

  const zones: Record<string, InteriorZone> = {
    cockpit: {
      id: "cockpit",
      title: "Tactile Digital Cockpit",
      subtitle: "Ergonomic command with zero visual clutter.",
      details:
        "The cockpit curves seamlessly around the pilot, featuring a floating 34-inch curved OLED pillar-to-pillar panoramic display running at 120Hz with haptic micro-feedback that mirrors physical mechanical detents.",
      material: "Matte Open-Pore Walnut & Recycled Aerospace Titanium",
      soundscape: "Dolby Atmos Spatial Audio (28 Bowers & Wilkins Handcrafted Drivers)",
    },
    materials: {
      id: "materials",
      title: "Sovereign Sustainable Materials",
      subtitle: "Cruelty-free tactile luxury engineered for generations.",
      details:
        "Upholstered exclusively in certified vegan mushroom mycelium leather and regenerated ocean nylon carpeting. All touchpoints utilize cold-anodized billet aluminum machined to aircraft tolerances.",
      material: "Bio-engineered Mycelium Leather & Nordic Birch Inlays",
      soundscape: "Acoustic Double-Pane Hydrophobic Laminated Glass",
    },
    comfort: {
      id: "comfort",
      title: "First-Class Zero-Gravity Seating",
      subtitle: "Neutral postural body alignment inspired by orbital spaceflight.",
      details:
        "22-way pneumatic contour adjustment seats with integrated dynamic thermal climate zones, hot-stone stone acupressure massage routines, and active anti-fatigue posture pulses.",
      material: "Pneumatic Adaptive Ergonomic Micro-Chambers",
      soundscape: "Binaural Frequency Relaxation Program (Alpha Waves 8Hz)",
    },
    ambient: {
      id: "ambient",
      title: "Circadian Ambient Illumination",
      subtitle: "Bioluminescent lighting that syncs with your biological rhythm.",
      details:
        "Concealed indirect laser optical threads illuminate cabin contours with natural daylight temperatures during daytime and warm amber twilight tones at sundown to eliminate nocturnal eyestrain.",
      material: "Fiber-Optic Micro Perforated Leather Panels",
      soundscape: "Biophilic Forest Resonance Harmonization",
    },
  };

  const ambientColors: Record<string, { name: string; hex: string; bgGlow: string }> = {
    cyan: { name: "Aether Cyan", hex: "#2fd5c5", bgGlow: "rgba(47, 213, 197, 0.2)" },
    electric: { name: "Ion Blue", hex: "#4895ef", bgGlow: "rgba(72, 149, 239, 0.2)" },
    amber: { name: "Solar Amber", hex: "#d4af37", bgGlow: "rgba(212, 175, 55, 0.2)" },
    twilight: { name: "Obsidian Twilight", hex: "#a855f7", bgGlow: "rgba(168, 85, 247, 0.2)" },
  };

  const currentZone = zones[activeZone];
  const activeColor = ambientColors[ambientLight];

  return (
    <section id="interior" className="relative py-32 bg-automotive-950 overflow-hidden">
      {/* Dynamic Ambient Cabin Glow synced with active color */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] blur-[160px] rounded-full pointer-events-none transition-all duration-700"
        style={{ backgroundColor: activeColor.bgGlow }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 pb-8 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widestLuxury text-automotive-accent mb-3">
              <span>05 {"//"} INTERIOR SANCTUARY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light uppercase text-white tracking-wide">
              The Architecture of <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-silver to-automotive-accent">
                Serenity & Focus
              </span>
            </h2>
          </div>

          {/* Interactive Cabin Ambient Color Controller */}
          <div className="flex items-center gap-3 glass-panel p-2 rounded-full border border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-automotive-steel px-2">
              AMBIENT HARMONY:
            </span>
            {Object.entries(ambientColors).map(([key, col]) => (
              <button
                key={key}
                onClick={() => setAmbientLight(key)}
                className={`w-6 h-6 rounded-full transition-transform ${
                  ambientLight === key ? "scale-125 ring-2 ring-white" : "opacity-60 hover:opacity-100"
                }`}
                style={{ backgroundColor: col.hex }}
                aria-label={`Set ambient lighting to ${col.name}`}
                title={col.name}
              />
            ))}
          </div>
        </div>

        {/* Interior Navigation Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {Object.entries(zones).map(([key, item]) => {
            const isActive = activeZone === key;
            return (
              <button
                key={key}
                onClick={() => setActiveZone(key)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-widest transition-all duration-300 ${
                  isActive
                    ? "bg-white text-automotive-950 font-bold shadow-lg"
                    : "glass-panel text-automotive-silver/70 hover:text-white"
                }`}
              >
                {item.title.split(" ")[0]} {item.title.split(" ")[1] || ""}
              </button>
            );
          })}
        </div>

        {/* Showcase Canvas & Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Visual Staging Canvas (Placeholder container ready for interior photos/renders) */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden glass-panel border border-white/10 p-8 sm:p-12 relative min-h-[460px] flex flex-col justify-between group">
            {/* Visual background simulation */}
            <div className="absolute inset-0 bg-gradient-to-br from-automotive-900 via-automotive-850 to-automotive-950 opacity-90" />

            {/* Glowing Accent Ambient Strip in Cabin */}
            <div
              className="absolute top-0 inset-x-0 h-1 transition-all duration-700 shadow-[0_0_20px]"
              style={{ backgroundColor: activeColor.hex, color: activeColor.hex }}
            />

            {/* Architectural Interior Cockpit Diagram Graphic */}
            <div className="relative z-10 w-full my-auto flex items-center justify-center py-6">
              <svg viewBox="0 0 700 260" className="w-full max-w-xl h-auto opacity-80" fill="none">
                {/* Curved OLED Panoramic Display */}
                <path
                  d="M 100 130 Q 350 100 600 130"
                  stroke={activeColor.hex}
                  strokeWidth="6"
                  strokeLinecap="round"
                  filter="drop-shadow(0 0 10px currentColor)"
                />
                <path
                  d="M 100 130 L 100 160 Q 350 130 600 160 L 600 130"
                  fill="rgba(255,255,255,0.03)"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1"
                />

                {/* Yoke Steering Wheel Geometric Contour */}
                <path
                  d="M 280 200 C 260 200, 240 180, 250 150 C 255 130, 290 120, 350 120 C 410 120, 445 130, 450 150 C 460 180, 440 200, 420 200"
                  stroke="#c0c5ce"
                  strokeWidth="2.5"
                />
                <circle cx="350" cy="155" r="16" stroke={activeColor.hex} strokeWidth="1.5" />

                {/* Center Console Floating Tunnel */}
                <path
                  d="M 320 220 L 330 260 L 370 260 L 380 220"
                  stroke="#7b8794"
                  strokeWidth="1.5"
                />
                <text x="350" y="70" textAnchor="middle" fill="#c0c5ce" fontSize="10" fontFamily="monospace" letterSpacing="3">
                  CURVED 34&quot; MONOLITHIC OLED
                </text>
              </svg>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-automotive-steel block">
                  ZONE SPECIFICATION
                </span>
                <span className="text-xl font-light text-white tracking-wide">
                  {currentZone.title}
                </span>
              </div>
              <div className="text-xs font-mono text-automotive-silver/70">
                LIGHT HARMONY: <span style={{ color: activeColor.hex }}>{activeColor.name}</span>
              </div>
            </div>
          </div>

          {/* Right Details Panel */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            <div className="glass-panel p-8 rounded-3xl flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-automotive-accent block mb-2">
                  {"//"} REFINED CRAFTSMANSHIP
                </span>
                <h3 className="font-display text-2xl font-light text-white uppercase tracking-wide mb-3">
                  {currentZone.subtitle}
                </h3>
                <p className="text-xs sm:text-sm text-automotive-silver/70 font-light leading-relaxed mb-6">
                  {currentZone.details}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/5">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-automotive-steel block mb-1">
                    PRIMARY MATERIALITY
                  </span>
                  <span className="text-xs font-medium text-white block">
                    {currentZone.material}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-automotive-steel block mb-1">
                    ACOUSTIC ARCHITECTURE
                  </span>
                  <span className="text-xs font-medium text-white block">
                    {currentZone.soundscape}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Volume2 className="w-5 h-5 text-automotive-accent" />
                <span className="text-xs font-mono text-white tracking-wider">
                  BOWERS & WILKINS SPATIAL
                </span>
              </div>
              <span className="text-[10px] font-mono text-automotive-steel">28 SPEAKERS {"//"} 1,600W</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
