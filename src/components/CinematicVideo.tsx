"use client";

import { useRef, useEffect } from "react";

interface CinematicVideoProps {
  src: string;
  className?: string;
  /** Overlay darkness: 0 = none, higher = darker. Default: 0.45 */
  overlayOpacity?: number;
  /** Additional gradient overlay direction. Default: "to top" */
  gradientDirection?: string;
  /** Extra gradient stop colour (optional). Default: black */
  gradientColor?: string;
  /** Poster image shown before the video loads */
  poster?: string;
}

/**
 * Reusable cinematic full-cover video component.
 * Autoplay · Loop · Muted · PlaysInline — works on iOS Safari.
 * Respects prefers-reduced-motion (pauses when user prefers no motion).
 */
export default function CinematicVideo({
  src,
  className = "",
  overlayOpacity = 0.45,
  gradientDirection = "to top",
  gradientColor = "#060709",
  poster,
}: CinematicVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");

    const applyMotionPreference = () => {
      if (mql.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          // Autoplay blocked — silent fail
        });
      }
    };

    applyMotionPreference();
    mql.addEventListener("change", applyMotionPreference);

    return () => {
      mql.removeEventListener("change", applyMotionPreference);
    };
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* The Cinematic Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Solid dark base overlay for readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: `rgba(6, 7, 9, ${overlayOpacity})` }}
      />

      {/* Gradient fade toward edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(${gradientDirection}, ${gradientColor} 0%, transparent 45%, transparent 55%, ${gradientColor} 100%)`,
        }}
      />

      {/* Left/right vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(6,7,9,0.6) 0%, transparent 20%, transparent 80%, rgba(6,7,9,0.6) 100%)",
        }}
      />
    </div>
  );
}
