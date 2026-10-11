import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { site } from "../config/site";
import { ImageWithFallback } from "./ImageWithFallback";

export const GallerySection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  // Normalize gallery items
  const galleryItems = site.gallery.map((item, index) => {
    if (typeof item === "string") {
      return {
        url: item,
        alt: `${site.businessName} salon work example ${index + 1}`,
        caption: `Signature Style ${index + 1}`,
      };
    }
    return {
      url: item.url,
      alt: item.alt || `${site.businessName} salon work example ${index + 1}`,
      caption: item.caption || `Signature Look ${index + 1}`,
    };
  });

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIdx === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedIdx(null);
      } else if (e.key === "ArrowRight") {
        setSelectedIdx((prev) =>
          prev !== null ? (prev + 1) % galleryItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setSelectedIdx((prev) =>
          prev !== null
            ? (prev - 1 + galleryItems.length) % galleryItems.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIdx, galleryItems.length]);

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#2D1B2E] font-semibold mb-3">
            Portfolio & Artistry
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1B2E] tracking-tight mb-4">
            Our Work
          </h2>
          <p className="text-[#6B6562] text-base sm:text-lg">
            A glimpse into the hair transformations, nail art, and relaxed salon moments crafted by our artists.
          </p>
        </div>

        {/* 3-Column Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedIdx(index)}
              className="group relative aspect-4/5 rounded-2xl overflow-hidden cursor-pointer bg-[#FAF7F5] border border-[#EAE3DF] shadow-xs hover:shadow-lg transition-all duration-300"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedIdx(index);
                }
              }}
              aria-label={`View photo: ${item.caption || item.alt}`}
            >
              <ImageWithFallback
                src={item.url}
                alt={item.alt}
                fallbackTitle={item.caption}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Hover overlay scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-serif text-base font-semibold">{item.caption}</p>
                    <p className="text-xs text-white/80">{item.alt}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx(null);
            }}
            className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx(
                (selectedIdx - 1 + galleryItems.length) % galleryItems.length
              );
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Arrow */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIdx((selectedIdx + 1) % galleryItems.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems[selectedIdx].url}
              alt={galleryItems[selectedIdx].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <p className="font-serif text-lg font-medium">
                {galleryItems[selectedIdx].caption}
              </p>
              <p className="text-xs text-white/60 mt-1">
                Image {selectedIdx + 1} of {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
