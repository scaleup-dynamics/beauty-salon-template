import React, { useState } from "react";
import { site } from "./config/site";
import { ThemeInjector } from "./components/ThemeInjector";
import { PrototypeBanner } from "./components/PrototypeBanner";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { TeamSection } from "./components/TeamSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { HoursLocationSection } from "./components/HoursLocationSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { TemplateInspector } from "./components/TemplateInspector";

export default function App() {
  const [bookingModeOverride, setBookingModeOverride] = useState<
    "phone" | "whatsapp" | "external" | "hidden"
  >(site.booking.mode);
  const [isPrototypeActive, setIsPrototypeActive] = useState<boolean>(
    site.isPrototype
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5] text-[#1A1A1A] font-sans antialiased selection:bg-[#E8B4B8]/40 selection:text-[#2D1B2E]">
      {/* Dynamic CSS Variables Injector & Meta Robots Handler */}
      <ThemeInjector />

      {/* 10. Prototype Banner (Controlled by config.isPrototype) */}
      <PrototypeBanner isVisibleOverride={isPrototypeActive} />

      {/* 1. Sticky Header */}
      <Header modeOverride={bookingModeOverride} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <HeroSection modeOverride={bookingModeOverride} />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. Gallery Section with Lightbox */}
        <GallerySection />

        {/* 5. Team Section */}
        <TeamSection />

        {/* 6. Reviews Section Carousel */}
        <ReviewsSection />

        {/* 7. Hours & Location Section */}
        <HoursLocationSection />

        {/* 8. Contact / CTA Section with Form */}
        <ContactSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Live Template Config Preview / Inspector (floating widget) */}
      <TemplateInspector
        activeBookingMode={bookingModeOverride}
        onOverrideBookingMode={setBookingModeOverride}
        isPrototypeActive={isPrototypeActive}
        onTogglePrototype={() => setIsPrototypeActive((prev) => !prev)}
      />
    </div>
  );
}
