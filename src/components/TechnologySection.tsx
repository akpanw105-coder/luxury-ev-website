"use client";

import { Cpu, ShieldCheck, Radio, Disc } from "lucide-react";

interface TechFeature {
  title: string;
  tagline: string;
  description: string;
  stats: string;
  badge: string;
  icon: React.ReactNode;
}

export default function TechnologySection() {
  const technologies: TechFeature[] = [
    {
      title: "Neural Drive OS v4.2",
      tagline: "Autonomous foresight powered by dual 400-TOPS AI neural processors.",
      description:
        "The GT9 synthesizes data from 12 solid-state LiDAR sensors, 8 millimeter-wave radar units, and 14 surround vision cameras. Millisecond predictive path planning guarantees seamless Level 3+ semi-autonomous navigation across highway and urban arterial corridors.",
      stats: "800 TOPS DUAL NEURAL CORES",
      badge: "AUTONOMOUS SUITE",
      icon: <Cpu className="w-6 h-6 text-automotive-accent" />,
    },
    {
      title: "Solid-State Matrix Battery",
      tagline: "Zero degradation thermal envelope with non-flammable ceramic electrolyte.",
      description:
        "Unlike volatile liquid-lithium cells, our 125 kWh solid-state structural pack acts as a load-bearing member of the monocoque. It delivers a 40% higher gravimetric energy density with virtually zero degradation over 1,000,000 kilometers.",
      stats: "450 WH/KG ENERGY DENSITY",
      badge: "SOLID-STATE CELLS",
      icon: <Disc className="w-6 h-6 text-automotive-electric" />,
    },
    {
      title: "Quantum Torque Vectoring",
      tagline: "Independent millisecond yaw control across all four wheels.",
      description:
        "Quad individual axial-flux electric motors respond in under 5 milliseconds. During aggressive cornering, outer wheels spin up while inner wheels recuperate kinetic energy into electricity, generating an uncanny sensation of running on magnetic rails.",
      stats: "5 MS RESPONSE TIME",
      badge: "DRIVETRAIN",
      icon: <Radio className="w-6 h-6 text-automotive-accent" />,
    },
    {
      title: "Acoustic Silence Shield",
      tagline: "Active anti-frequency noise cancellation creating a private sanctuary.",
      description:
        "36 micro-transducers strategically concealed within the cabin headliner and seat bolsters analyze road acoustics and tire reverberation, projecting inverted counter-frequencies to yield near-laboratory absolute silence.",
      stats: "-42 DB CABIN NOISE REDUCTION",
      badge: "SANCTUARY ACOUSTICS",
      icon: <ShieldCheck className="w-6 h-6 text-automotive-silver" />,
    },
  ];

  return (
    <section id="technology" className="relative py-32 bg-automotive-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20 pb-12 border-b border-white/10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widestLuxury text-automotive-accent mb-4">
              <span>04 {"//"} ADVANCED VEHICLE SOFTWARE & HARDWARE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light uppercase text-white tracking-wide leading-tight">
              Intelligence <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-silver to-automotive-electric">
                Engineered from the Future
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-automotive-silver/70 font-light text-sm sm:text-base leading-relaxed">
            <p>
              Hardware and software conceived as a singular symbiotic entity. Real-time over-the-air continuous evolutionary updates keep every AETHER vehicle permanently modern.
            </p>
          </div>
        </div>

        {/* 4 Premium Editorial Tech Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, idx) => (
            <div
              key={tech.title}
              className="glass-panel glass-panel-hover rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Subtle top indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/5 text-automotive-silver border border-white/10">
                  {tech.badge}
                </span>
                <span className="font-mono text-xs text-automotive-steel">
                  {"//"} MOD-0{idx + 1}
                </span>
              </div>

              <div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-automotive-accent/50 transition-colors">
                  {tech.icon}
                </div>

                <h3 className="font-display text-2xl font-light text-white uppercase tracking-wider mb-2">
                  {tech.title}
                </h3>

                <p className="text-xs font-mono text-automotive-accent/90 mb-4 tracking-wide">
                  {tech.tagline}
                </p>

                <p className="text-xs sm:text-sm text-automotive-silver/70 font-light leading-relaxed mb-8">
                  {tech.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-mono tracking-widest uppercase text-white font-medium">
                  {tech.stats}
                </span>
                <div className="w-2 h-2 rounded-full bg-automotive-accent group-hover:scale-150 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Software Architecture Diagram Bar */}
        <div className="glass-panel rounded-3xl p-8 border border-white/10 bg-gradient-to-r from-automotive-950 via-automotive-900 to-automotive-950 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-automotive-accent animate-ping" />
            <span className="font-mono text-xs uppercase tracking-widest text-automotive-silver">
              OTA TELEMETRY LIFECYCLE {"//"} REAL-TIME GIGABIT VEHICLE ETHERNET BACKBONE
            </span>
          </div>
          <div className="flex items-center gap-8 text-xs font-mono text-automotive-steel">
            <span>END-TO-END QUANTUM ENCRYPTION</span>
            <span className="text-automotive-accent">ACTIVE SYNCHRONIZATION</span>
          </div>
        </div>
      </div>
    </section>
  );
}
