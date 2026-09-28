"use client";

import { useState } from "react";
import { Zap, Activity } from "lucide-react";

interface PerformanceMetric {
  value: string;
  unit: string;
  label: string;
  description: string;
  metricComparison: string;
}

export default function PerformanceSection() {
  const [driveMode, setDriveMode] = useState<"ludicrous" | "grandTourer" | "range">("ludicrous");

  // Performance configurations by mode
  const metrics: Record<string, PerformanceMetric[]> = {
    ludicrous: [
      {
        value: "1.89",
        unit: "s",
        label: "0 – 100 KM/H",
        description: "Sub-two-second acceleration delivered with zero wheel slip via Quad-Torque vectoring.",
        metricComparison: "Faster than gravity free-fall",
      },
      {
        value: "1,180",
        unit: "HP",
        label: "PEAK OUTPUT",
        description: "Permanent magnet axial-flux rotors spinning continuously up to 24,000 RPM.",
        metricComparison: "880 kW combined electric power",
      },
      {
        value: "350",
        unit: "KM/H",
        label: "TERMINAL VELOCITY",
        description: "Electronically governed top cruising speed sustained with liquid silicon cooling.",
        metricComparison: "217 MPH top track speed",
      },
      {
        value: "820",
        unit: "KM",
        label: "WLTP RANGE",
        description: "125 kWh solid-state matrix with intelligent thermodynamic heat harvesting.",
        metricComparison: "510 Miles ultra-long haul",
      },
    ],
    grandTourer: [
      {
        value: "2.85",
        unit: "s",
        label: "0 – 100 KM/H",
        description: "Smooth progressive torque rise engineered for peerless passenger serenity.",
        metricComparison: "Refined linear throttle profile",
      },
      {
        value: "850",
        unit: "HP",
        label: "PEAK OUTPUT",
        description: "Optimized dual-axle harmonic output tuned for endless continental cruising.",
        metricComparison: "Whisper-quiet acoustic damping",
      },
      {
        value: "280",
        unit: "KM/H",
        label: "CRUISE TOP SPEED",
        description: "Autobahn long-range cruising envelope with low battery discharge strain.",
        metricComparison: "Unlimited continuous endurance",
      },
      {
        value: "920",
        unit: "KM",
        label: "WLTP RANGE",
        description: "Adaptive aero glide mapping and high-efficiency regenerative deceleration.",
        metricComparison: "570 Miles grand touring range",
      },
    ],
    range: [
      {
        value: "4.2",
        unit: "s",
        label: "0 – 100 KM/H",
        description: "Eco-vectoring powertrain mode prioritizing watt-hour per kilometer efficiency.",
        metricComparison: "Maximum energy conservation",
      },
      {
        value: "540",
        unit: "HP",
        label: "OPTIMIZED OUTPUT",
        description: "Front motor disconnected on constant highway cruising to eliminate parasitic drag.",
        metricComparison: "98.4% electric motor efficiency",
      },
      {
        value: "210",
        unit: "KM/H",
        label: "HIGHWAY VELOCITY",
        description: "Calibrated top speed maximizing real-world trans-continental reach.",
        metricComparison: "Ideal for intercity transit",
      },
      {
        value: "1,020",
        unit: "KM",
        label: "MAXIMUM REACH",
        description: "Surpassing 1,000 km on a single charge in combined real-world conditions.",
        metricComparison: "633 Miles ultimate range",
      },
    ],
  };

  const currentMetrics = metrics[driveMode];

  return (
    <section id="performance" className="relative py-32 bg-automotive-950 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-automotive-electric/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-automotive-accent/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header with Mode Selector */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widestLuxury text-automotive-accent mb-3">
              <span>03 {"//"} PERFORMANCE TELEMETRY</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-light uppercase text-white tracking-wide">
              Infinite Force. <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-silver to-automotive-accent">
                Zero Emission.
              </span>
            </h2>
          </div>

          {/* Drive Mode Selector Switch */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-automotive-steel">
              DYNAMICS MODE:
            </span>
            <div className="inline-flex p-1.5 rounded-full glass-panel border border-white/10">
              <button
                onClick={() => setDriveMode("ludicrous")}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  driveMode === "ludicrous"
                    ? "bg-gradient-to-r from-automotive-accent to-automotive-electric text-automotive-950 font-bold shadow-lg"
                    : "text-automotive-silver/70 hover:text-white"
                }`}
              >
                APEX TRACK
              </button>
              <button
                onClick={() => setDriveMode("grandTourer")}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  driveMode === "grandTourer"
                    ? "bg-white text-automotive-950 font-bold shadow-lg"
                    : "text-automotive-silver/70 hover:text-white"
                }`}
              >
                GRAND TOURER
              </button>
              <button
                onClick={() => setDriveMode("range")}
                className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  driveMode === "range"
                    ? "bg-white text-automotive-950 font-bold shadow-lg"
                    : "text-automotive-silver/70 hover:text-white"
                }`}
              >
                ULTRA-RANGE
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Performance Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {currentMetrics.map((metric, idx) => (
            <div
              key={metric.label}
              className="glass-panel glass-panel-hover p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[300px] border border-white/10 group"
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-automotive-accent/40 to-transparent group-hover:via-automotive-accent transition-all duration-500" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-automotive-steel">
                    {"//"} 0{idx + 1} METRIC
                  </span>
                  <Activity className="w-4 h-4 text-automotive-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-5xl sm:text-6xl font-light text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-automotive-accent transition-all">
                    {metric.value}
                  </span>
                  <span className="font-mono text-xl text-automotive-accent font-semibold">
                    {metric.unit}
                  </span>
                </div>

                <div className="text-xs font-mono tracking-widestLuxury uppercase text-white/90 mb-4">
                  {metric.label}
                </div>

                <p className="text-xs text-automotive-silver/70 font-light leading-relaxed mb-6">
                  {metric.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-automotive-steel">
                <span>{metric.metricComparison}</span>
                <span className="text-automotive-accent/60 group-hover:text-automotive-accent transition-colors">
                  VERIFIED
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 800V Ultra-Fast Hypercharge Band */}
        <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-automotive-accent/10 border border-automotive-accent/30 flex items-center justify-center text-automotive-accent shrink-0">
              <Zap className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-automotive-accent">
                  900-VOLT ARCHITECTURE
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-white">
                  HYPERCHARGE READY
                </span>
              </div>
              <h3 className="font-display text-2xl font-light text-white uppercase tracking-wide mt-1">
                10 to 80% Charge in 12 Minutes
              </h3>
              <p className="text-xs text-automotive-silver/70 mt-1 max-w-xl font-light">
                Silicon-carbide inverters with liquid-nitrogen thermal loop allow up to 450 kW peak DC charging rates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="text-center sm:text-right">
              <span className="text-3xl font-light text-white font-mono">400 KM</span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-automotive-steel">
                ADDED IN 7 MINUTES
              </span>
            </div>
            <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
            <div className="text-center sm:text-right">
              <span className="text-3xl font-light text-automotive-accent font-mono">450 kW</span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-automotive-steel">
                PEAK ACCEPTANCE
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
