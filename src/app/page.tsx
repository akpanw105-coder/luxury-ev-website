"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VehicleIntro from "@/components/VehicleIntro";
import DesignSection from "@/components/DesignSection";
import PerformanceSection from "@/components/PerformanceSection";
import TechnologySection from "@/components/TechnologySection";
import InteriorSection from "@/components/InteriorSection";
import DrivingExperience from "@/components/DrivingExperience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenReservation = () => {
    setIsModalOpen(true);
  };

  const handleScrollToSpecs = () => {
    const el = document.getElementById("performance");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToDesign = () => {
    const el = document.getElementById("design");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-automotive-950 text-foreground selection:bg-automotive-accent selection:text-automotive-950">
      {/* Top Floating Glass Navigation */}
      <Navigation onReserveClick={handleOpenReservation} />

      {/* 1. Cinematic Hero Section */}
      <HeroSection
        onReserveClick={handleOpenReservation}
        onSpecsClick={handleScrollToSpecs}
      />

      {/* 2. Vehicle Architecture Introduction */}
      <VehicleIntro />

      {/* 3. Design Philosophy & Interactive Panels */}
      <DesignSection />

      {/* 4. Performance Telemetry & Drive Modes */}
      <PerformanceSection />

      {/* 5. Technology, Neural OS & Solid-State Systems */}
      <TechnologySection />

      {/* 6. Interior Sanctuary & Ambient Color Controller */}
      <InteriorSection />

      {/* 7. Driving Experience & Motion Reel Container */}
      <DrivingExperience />

      {/* 8. Final Closing Call-to-Action */}
      <FinalCTA
        onReserveClick={handleOpenReservation}
        onConfiguratorClick={handleScrollToDesign}
      />

      {/* 9. Sophisticated Automotive Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
