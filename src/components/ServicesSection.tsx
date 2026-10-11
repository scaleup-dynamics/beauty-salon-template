import React from "react";
import {
  Scissors,
  Palette,
  Sparkles,
  Footprints,
  Flower2,
  Crown,
  Phone,
  ArrowRight,
  Heart,
  Feather,
  Sun,
  Flame,
  Check,
} from "lucide-react";
import { site } from "../config/site";

// Safe icon map for services
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Scissors,
  Palette,
  Sparkles,
  Footprints,
  Flower2,
  Crown,
  Heart,
  Feather,
  Sun,
  Flame,
  Check,
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#2D1B2E] font-semibold mb-3">
            Handcrafted Care
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1B2E] tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-[#6B6562] text-base sm:text-lg">
            Personalized beauty treatments designed to accentuate your natural elegance and restore your glow.
          </p>
        </div>

        {/* 3-Col Desktop, 2 Tablet, 1 Mobile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {site.services.map((service, index) => {
            const Icon = iconMap[service.icon] || Sparkles;

            return (
              <div
                key={service.name || index}
                className="bg-white rounded-2xl p-7 border border-[#EAE3DF] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_24px_rgba(45,27,46,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#FAF7F5] group-hover:bg-[#E8B4B8]/25 text-[#2D1B2E] flex items-center justify-center mb-5 transition-colors duration-200">
                    <Icon className="w-6 h-6 stroke-[1.6]" />
                  </div>

                  {/* Service Title */}
                  <h3 className="font-serif text-xl font-semibold text-[#2D1B2E] mb-2 group-hover:text-[#2D1B2E]">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6B6562] leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Price and Action */}
                <div className="pt-4 border-t border-[#FAF7F5] flex items-center justify-between mt-auto">
                  {service.price ? (
                    <span className="text-sm font-semibold text-[#2D1B2E] font-mono tabular-nums">
                      {service.price.toLowerCase().startsWith("from") ? (
                        <>
                          <span className="text-xs font-normal text-[#6B6562] font-sans mr-1">Starting</span>
                          <span>{service.price.replace(/from\s*/i, "")}</span>
                        </>
                      ) : (
                        service.price
                      )}
                    </span>
                  ) : (
                    <span className="text-xs text-[#6B6562]">Consultation included</span>
                  )}

                  <a
                    href="#contact"
                    className="text-xs font-semibold text-[#2D1B2E] group-hover:text-[#E8B4B8] flex items-center gap-1 transition-colors"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action Text Link */}
        <div className="mt-14 text-center">
          <p className="text-[#6B6562] text-sm sm:text-base inline-flex items-center flex-wrap justify-center gap-2">
            <span>Not sure what you need?</span>
            <a
              href={`tel:${site.phoneRaw}`}
              className="font-medium text-[#2D1B2E] hover:text-[#E8B4B8] underline decoration-[#E8B4B8] underline-offset-4 transition-colors inline-flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4 text-[#2D1B2E]" />
              <span>Call us at {site.phone} →</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
