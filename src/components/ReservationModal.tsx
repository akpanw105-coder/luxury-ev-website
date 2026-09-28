"use client";

import { useState } from "react";
import { X, Check, Shield } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "United States",
    bespokeFinish: "Celestial Obsidian",
    interiorTheme: "Titanium & Mycelium",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-xl rounded-3xl glass-panel border border-white/20 p-8 sm:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-automotive-accent/20 blur-[100px] pointer-events-none rounded-full" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-6 right-6 p-2 rounded-full text-automotive-silver/70 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono tracking-widest uppercase text-automotive-accent block mb-1">
                {"//"} BESPOKE COMMISSION ALLOCATION
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-light text-white uppercase tracking-wide">
                Reserve AETHER GT9
              </h3>
              <p className="text-xs text-automotive-silver/70 mt-2 font-light">
                Secure your handbuilt allocation slot in Founder Series 01. Fully refundable atelier deposit.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-automotive-steel mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-automotive-900 border border-white/10 text-white text-xs focus:border-automotive-accent focus:outline-none transition-colors"
                    placeholder="Alexander"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-automotive-steel mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-automotive-900 border border-white/10 text-white text-xs focus:border-automotive-accent focus:outline-none transition-colors"
                    placeholder="Vance"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono uppercase tracking-widest text-automotive-steel mb-1.5">
                  Private Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-automotive-900 border border-white/10 text-white text-xs focus:border-automotive-accent focus:outline-none transition-colors"
                  placeholder="vance@privateoffice.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-automotive-steel mb-1.5">
                    Exterior Specification
                  </label>
                  <select
                    value={formData.bespokeFinish}
                    onChange={(e) => setFormData({ ...formData, bespokeFinish: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-automotive-900 border border-white/10 text-white text-xs focus:border-automotive-accent focus:outline-none transition-colors"
                  >
                    <option value="Celestial Obsidian">Celestial Obsidian</option>
                    <option value="Liquid Tungsten">Liquid Tungsten</option>
                    <option value="Arctic Aurora Matte">Arctic Aurora Matte</option>
                    <option value="Solar Amber Tint">Solar Amber Tint</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-automotive-steel mb-1.5">
                    Country of Delivery
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-automotive-900 border border-white/10 text-white text-xs focus:border-automotive-accent focus:outline-none transition-colors"
                  >
                    <option value="United States">United States</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Germany">Germany</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United Arab Emirates">United Arab Emirates</option>
                    <option value="Japan">Japan</option>
                    <option value="Monaco">Monaco</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-[10px] font-mono text-automotive-steel mb-4">
                  <Shield className="w-3.5 h-3.5 text-automotive-accent" />
                  <span>DEPOSIT: $2,500 USD &bull; FULLY ESCROW-SECURED & REFUNDABLE</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-automotive-accent to-automotive-electric text-automotive-950 font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-automotive-accent/25"
                >
                  Confirm Allocation Priority
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-automotive-accent/20 border border-automotive-accent text-automotive-accent mx-auto flex items-center justify-center mb-6">
              <Check className="w-8 h-8" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-automotive-accent block mb-2">
              ALLOCATION GRANTED {"//"} SERIAL #084
            </span>
            <h3 className="font-display text-2xl font-light text-white uppercase tracking-wide mb-3">
              Welcome to the Vanguard, {formData.firstName || "Patron"}.
            </h3>
            <p className="text-xs text-automotive-silver/80 font-light leading-relaxed max-w-md mx-auto mb-8">
              Your priority reservation file has been generated. An AETHER Atelier Concierge Partner
              will connect with you shortly to schedule your personal tactile commissioning session.
            </p>
            <button
              onClick={resetAndClose}
              className="px-8 py-3 rounded-full bg-white text-automotive-950 text-xs font-semibold uppercase tracking-widest hover:bg-automotive-accent transition-colors"
            >
              Return to Showcase
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
