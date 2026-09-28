"use client";

import CinematicVideo from "./CinematicVideo";

const CLOUDINARY_VIDEO_URL =
  "https://res.cloudinary.com/oebaqlvj/video/upload/v1790621804/Creating_luxury_electric_vehicle__20260928114945_1.mp4";

export default function DrivingExperience() {
  return (
    <section
      id="experience"
      className="relative py-32 bg-automotive-900 overflow-hidden border-t border-white/5"
      aria-label="Driving Experience"
    >
      {/* Section atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-automotive-950 via-automotive-900 to-automotive-950" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-automotive-accent/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widestLuxury text-automotive-accent mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-automotive-accent" />
            <span>06 {"//"}  DYNAMICS IN MOTION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light uppercase text-white tracking-wide leading-tight">
            The Motion of <br />
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-automotive-silver to-automotive-electric">
              Pure Gravity
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-automotive-silver/70 font-light max-w-xl mx-auto leading-relaxed">
            Where instantaneous electric torque meets five-link adaptive air suspension.
            Every corner carved with effortless poise.
          </p>
        </div>

        {/* ── CINEMATIC VIDEO SHOWCASE ──────────────────────────────────────── */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)]">
          {/* Video Background */}
          <CinematicVideo
            src={CLOUDINARY_VIDEO_URL}
            overlayOpacity={0.5}
            gradientDirection="to top"
            gradientColor="#060709"
          />

          {/* HUD Overlay — sits above the video */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 sm:p-12">
            {/* Top live label */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-automotive-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-automotive-accent" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widestLuxury text-white/90">
                  EXPERIENCE REEL {"//"}  LIVE TELEMETRY
                </span>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest border border-white/20 text-automotive-silver bg-black/40 backdrop-blur-md">
                120 FPS
              </span>
            </div>

            {/* Bottom Telemetry HUD */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/10 bg-black/30 -mx-8 -mb-8 sm:-mx-12 sm:-mb-12 p-6 sm:p-10 backdrop-blur-md">
              {[
                { label: "LATERAL ACCELERATION", value: "1.35 G", accent: false },
                { label: "CHASSIS ADAPTATION", value: "1,000 Hz", accent: true },
                { label: "WEIGHT DISTRIBUTION", value: "49 : 51", accent: false },
                { label: "ACTIVE REAR STEER", value: "± 3.8°", accent: false },
              ].map(({ label, value, accent }) => (
                <div key={label}>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-automotive-steel block mb-1">
                    {label}
                  </span>
                  <span
                    className={`text-lg font-light font-mono ${
                      accent ? "text-automotive-accent" : "text-white"
                    }`}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
