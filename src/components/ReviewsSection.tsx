import React, { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, MapPin } from "lucide-react";
import { site } from "../config/site";

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reviews = site.reviews;
  const timeoutRef = useRef<number | null>(null);

  // Auto-scroll every 4.5 seconds when not paused
  useEffect(() => {
    if (isPaused || reviews.length <= 1) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused, reviews.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <a
            href={site.googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F5] hover:bg-[#E8B4B8]/20 border border-[#EAE3DF] text-xs uppercase tracking-widest text-[#2D1B2E] font-semibold mb-4 transition-colors group"
            title="Open America's Beauty Salon on Google Maps"
          >
            <span className="flex items-center text-[#FAD02C] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FAD02C] text-[#FAD02C]" />
              ))}
            </span>
            <span>{site.rating.stars} on Google Maps</span>
            <span aria-hidden="true" className="text-[#6B6562]">·</span>
            <span className="text-[#6B6562]">{site.rating.count} Reviews</span>
            <ExternalLink className="w-3 h-3 text-[#2D1B2E] opacity-60 group-hover:opacity-100 transition-opacity ml-0.5" />
          </a>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1B2E] tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-[#6B6562] text-base sm:text-lg">
            Real feedback from guests who visit America's Beauty Salon in Las Vegas.
          </p>
        </div>

        {/* Carousel Container (Pausable on hover) */}
        <div
          className="max-w-3xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Card Frame */}
          <div className="bg-[#FAF7F5] rounded-3xl p-8 sm:p-12 border border-[#EAE3DF] shadow-[0_4px_24px_rgba(45,27,46,0.04)] relative">
            <Quote className="w-12 h-12 text-[#E8B4B8]/40 absolute top-6 right-6 pointer-events-none" />

            {/* Stars */}
            <div className="flex items-center gap-1 text-[#FAD02C] mb-6">
              {[...Array(reviews[currentIndex].stars || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FAD02C] text-[#FAD02C]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl sm:text-2xl text-[#2D1B2E] leading-relaxed mb-8 italic">
              "{reviews[currentIndex].text}"
            </blockquote>

            {/* Author & Context */}
            <div className="flex items-center justify-between border-t border-[#EAE3DF]/80 pt-5">
              <div>
                <p className="font-sans font-semibold text-[#1A1A1A] text-base">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-xs text-[#6B6562]">
                  {reviews[currentIndex].date || "Verified Salon Client"}
                </p>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-2 rounded-full bg-white hover:bg-[#E8B4B8]/20 border border-[#EAE3DF] text-[#2D1B2E] transition-colors shadow-xs"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="p-2 rounded-full bg-white hover:bg-[#E8B4B8]/20 border border-[#EAE3DF] text-[#2D1B2E] transition-colors shadow-xs"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 transition-all duration-300 rounded-full ${
                  idx === currentIndex
                    ? "w-8 bg-[#2D1B2E]"
                    : "w-2 bg-[#EAE3DF] hover:bg-[#6B6562]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentIndex ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        {/* Link to all reviews on Google */}
        <div className="mt-12 text-center">
          <a
            href={site.googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#2D1B2E] text-[#FAF7F5] hover:bg-[#3E253F] active:scale-[0.98] transition-all shadow-md group text-sm font-medium"
          >
            <MapPin className="w-4 h-4 text-[#E8B4B8]" />
            <span>Read all reviews on Google Maps</span>
            <ExternalLink className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
