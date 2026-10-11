import React from "react";
import { Instagram, Calendar } from "lucide-react";
import { site } from "../config/site";
import { ImageWithFallback } from "./ImageWithFallback";
import { BookingButton } from "./BookingButton";

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#2D1B2E] font-semibold mb-3">
            Experienced Stylists & Artists
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1B2E] tracking-tight mb-4">
            Meet the Team
          </h2>
          <p className="text-[#6B6562] text-base sm:text-lg">
            Dedicated artisans passionate about enhancing your confidence and personal beauty.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {site.team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE3DF] shadow-[0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row group"
            >
              {/* Stylist Image */}
              <div className="sm:w-1/2 aspect-square sm:aspect-auto relative overflow-hidden bg-[#FAF7F5]">
                <ImageWithFallback
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fallbackTitle={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Stylist Details */}
              <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="font-serif text-2xl font-bold text-[#2D1B2E]">
                      {member.name}
                    </h3>
                    {member.instagram && (
                      <a
                        href={member.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6B6562] hover:text-[#2D1B2E] transition-colors p-1"
                        aria-label={`${member.name} on Instagram`}
                      >
                        <Instagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm font-medium text-[#6B6562] mb-4">
                    {member.role}
                  </p>

                  <p className="text-xs text-[#6B6562]/90 leading-relaxed mb-6">
                    Specializing in custom consultations, attentive techniques, and long-lasting results.
                  </p>
                </div>

                {/* Booking button for Stylist */}
                <div className="pt-2 border-t border-[#FAF7F5]">
                  {member.bookingUrl ? (
                    <BookingButton
                      variant="primary"
                      stylistName={member.name}
                      customBookingUrl={member.bookingUrl}
                      className="w-full text-xs py-2.5"
                    />
                  ) : (
                    <BookingButton
                      variant="primary"
                      customLabel={`Book with ${member.name}`}
                      className="w-full text-xs py-2.5"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
