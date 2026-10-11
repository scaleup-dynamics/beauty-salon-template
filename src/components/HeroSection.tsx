import React from "react";
import { Phone, ChevronDown, Star } from "lucide-react";
import { site } from "../config/site";
import { BookingButton } from "./BookingButton";
import { ImageWithFallback } from "./ImageWithFallback";

interface HeroSectionProps {
  modeOverride?: "phone" | "whatsapp" | "external" | "hidden";
}

export const HeroSection: React.FC<HeroSectionProps> = ({ modeOverride }) => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[94vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Fallback and Scrim */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={site.heroImage}
          alt={`${site.businessName} salon interior ambiance`}
          className="w-full h-full object-cover scale-105 transform motion-safe:animate-subtle-zoom"
          fallbackTitle="America's Beauty Salon"
        />
        {/* Warm Plum & Charcoal Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A121C] via-[#1E121F]/70 to-[#2D1B2E]/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white flex flex-col items-center">
        {/* Star Rating Badge (Clean Unboxed Typography) */}
        <a
          href="#reviews"
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/95 text-xs sm:text-sm font-medium hover:bg-white/15 transition-colors"
          aria-label={`Rated ${site.rating.stars} stars from ${site.rating.count} Google reviews`}
        >
          <div className="flex items-center text-[#FAD02C] gap-0.5" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FAD02C] text-[#FAD02C]" />
            ))}
          </div>
          <span className="font-semibold">{site.rating.stars}</span>
          <span className="text-white/40" aria-hidden="true">·</span>
          <span className="text-white/90">{site.rating.count} Google Reviews</span>
        </a>

        {/* Business Name */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-5 max-w-4xl text-balance leading-[1.15] drop-shadow-sm">
          {site.businessName}
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl text-[#FAF7F5]/90 font-light max-w-2xl mb-10 text-balance tracking-wide">
          {site.tagline}
        </p>

        {/* Side-by-side CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md sm:max-w-none">
          {/* Primary CTA */}
          <BookingButton
            modeOverride={modeOverride}
            variant="hero"
            className="w-full sm:w-auto"
          />

          {/* Secondary CTA */}
          <a
            href={`tel:${site.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-base backdrop-blur-sm border border-white/25 transition-all duration-200 active:scale-[0.98]"
            aria-label={`Call us at ${site.phone}`}
          >
            <Phone className="w-4 h-4 text-[#E8B4B8]" aria-hidden="true" />
            <span>Call {site.phone}</span>
          </a>
        </div>

        {/* Subtle trust note */}
        <p className="mt-8 text-xs sm:text-sm text-white/70 max-w-lg">
          Appointments & Walk-ins welcome · Full hair, nails & skin care
        </p>
      </div>

      {/* Small Scroll Down Indicator */}
      <a
        href="#services"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors group p-2"
        aria-label="Scroll down to services"
      >
        <span className="text-[11px] uppercase tracking-widest font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          Explore
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#E8B4B8]" aria-hidden="true" />
      </a>
    </section>
  );
};
