import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, ExternalLink } from "lucide-react";
import { site } from "../config/site";
import { BookingButton } from "./BookingButton";

interface HeaderProps {
  modeOverride?: "phone" | "whatsapp" | "external" | "hidden";
}

export const Header: React.FC<HeaderProps> = ({ modeOverride }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "Hours & Location", href: "#hours-location" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F5]/98 backdrop-blur-md shadow-sm border-b border-[#EAE3DF] py-3"
          : "bg-[#FAF7F5]/90 backdrop-blur-xs border-b border-[#EAE3DF]/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-6 lg:gap-8">
          {/* Zone 1: Brand title wordmark */}
          <a
            href="#"
            className="font-serif text-lg sm:text-xl md:text-xl lg:text-2xl font-bold tracking-tight text-[#2D1B2E] hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
            aria-label={`${site.businessName} Home`}
          >
            {site.businessName}
          </a>

          {/* Zone 2: Navigation Links (Tablet & Desktop: perfectly balanced) */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-3.5 lg:gap-7 text-xs lg:text-sm font-medium text-[#1A1A1A]/80"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#2D1B2E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#E8B4B8] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Tablet & Desktop "Book Now" CTA */}
            <div className="hidden sm:block">
              <BookingButton
                modeOverride={modeOverride}
                className="px-3.5 py-2 text-xs lg:px-5 lg:py-2.5 lg:text-sm"
              />
            </div>

            {/* Mobile Navigation Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#2D1B2E] text-[#FAF7F5] hover:bg-[#3E253F] active:scale-95 transition-all shadow-md border border-[#E8B4B8]/40 cursor-pointer text-xs font-medium"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu navigation"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <>
                  <X className="w-4 h-4 text-[#E8B4B8] stroke-[2.5]" aria-hidden="true" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Close</span>
                </>
              ) : (
                <>
                  <Menu className="w-4 h-4 text-[#E8B4B8] stroke-[2.5]" aria-hidden="true" />
                  <span className="font-semibold uppercase tracking-wider text-[11px]">Menu</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel: 100% visible at once without scrolling */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs md:hidden animate-in fade-in duration-200 flex flex-col justify-start"
          onClick={() => setIsMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div
            className="bg-[#FAF7F5] border-b border-[#EAE3DF] shadow-2xl p-5 w-full animate-in slide-in-from-top-4 duration-250 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header of Mobile Dropdown */}
            <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#EAE3DF]">
              <div>
                <p className="font-serif text-lg font-bold text-[#2D1B2E]">
                  {site.businessName}
                </p>
                <p className="text-[11px] text-[#6B6562]">
                  {site.locationNote} · 4.9 ★ Google Reviews
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2D1B2E] text-white hover:bg-[#3E253F] text-xs font-semibold uppercase tracking-wider shadow-xs"
                aria-label="Close menu"
              >
                <X className="w-3.5 h-3.5 text-[#E8B4B8] stroke-[2.5]" />
                <span>Close</span>
              </button>
            </div>

            {/* All 6 Navigation Links in a 2-Column Grid (Fully visible simultaneously) */}
            <nav className="grid grid-cols-2 gap-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-[#EAE3DF] text-[#2D1B2E] hover:bg-[#E8B4B8]/20 hover:border-[#2D1B2E]/30 font-medium text-xs sm:text-sm transition-all flex items-center justify-between shadow-xs group"
                >
                  <span className="font-serif font-semibold">{link.label}</span>
                  <span className="text-xs text-[#6B6562] group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              ))}
            </nav>

            {/* Bottom Actions (Clean, single-tier layout) */}
            <div className="pt-3 border-t border-[#EAE3DF] flex flex-col gap-2.5">
              <BookingButton
                modeOverride={modeOverride}
                className="w-full py-2.5 text-xs sm:text-sm justify-center shadow-sm font-semibold"
              />

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-full border border-[#2D1B2E]/20 text-[#2D1B2E] font-medium text-xs bg-white hover:bg-gray-50 transition-colors shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2D1B2E]" />
                  <span>Call: {site.phone}</span>
                </a>

                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1 py-2 px-3 rounded-full border border-[#2D1B2E]/20 text-[#2D1B2E] font-medium text-xs bg-white hover:bg-gray-50 transition-colors shadow-xs"
                  title="Open on Google Maps"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#2D1B2E]" />
                  <span>Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#6B6562]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
