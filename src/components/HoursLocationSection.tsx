import React from "react";
import { Clock, MapPin, Phone, Navigation, ExternalLink } from "lucide-react";
import { site } from "../config/site";

export const HoursLocationSection: React.FC = () => {
  // Determine current day of week to highlight
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDayIndex = new Date().getDay();
  const todayName = dayNames[currentDayIndex];

  return (
    <section id="hours-location" className="py-24 sm:py-32 bg-[#FAF7F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#2D1B2E] font-semibold mb-3">
            Visit Our Salon
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1B2E] tracking-tight mb-4">
            Hours & Location
          </h2>
          <p className="text-[#6B6562] text-base sm:text-lg">
            Conveniently situated in Las Vegas with dedicated parking and a welcoming atmosphere.
          </p>
        </div>

        {/* 2-Column Desktop Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Hours Table + Contact Details (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 border border-[#EAE3DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between">
            <div>
              {/* Hours Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#FAF7F5]">
                <div className="w-10 h-10 rounded-full bg-[#E8B4B8]/25 text-[#2D1B2E] flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2D1B2E]">
                    Opening Hours
                  </h3>
                  <p className="text-xs text-[#6B6562]">Walk-ins & appointments</p>
                </div>
              </div>

              {/* Hours Table */}
              <div className="divide-y divide-[#FAF7F5] mb-8 font-sans">
                {site.hours.map((item) => {
                  const isToday = item.day.toLowerCase() === todayName.toLowerCase();

                  return (
                    <div
                      key={item.day}
                      className={`py-2.5 flex items-center justify-between text-sm transition-colors ${
                        isToday
                          ? "bg-[#E8B4B8]/15 px-3 rounded-lg font-semibold text-[#2D1B2E]"
                          : "text-[#1A1A1A]/80 hover:bg-[#FAF7F5]/50 px-1"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.day}
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-[#2D1B2E] text-white">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={`tabular-nums ${
                          item.hours.toLowerCase().includes("closed")
                            ? "text-[#6B6562]/80 italic font-normal"
                            : "font-medium"
                        }`}
                      >
                        {item.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Contact & Address Details */}
              <div className="space-y-4 pt-4 border-t border-[#FAF7F5]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#2D1B2E] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#6B6562] font-semibold">
                      Address
                    </p>
                    <a
                      href={site.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#1A1A1A] hover:text-[#2D1B2E] underline-offset-2 hover:underline block"
                    >
                      {site.address}
                    </a>
                    <p className="text-xs text-[#6B6562] mt-0.5">
                      {site.locationNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#2D1B2E] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#6B6562] font-semibold">
                      Telephone
                    </p>
                    <a
                      href={`tel:${site.phoneRaw}`}
                      className="text-sm font-medium text-[#1A1A1A] hover:text-[#2D1B2E]"
                    >
                      {site.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* "Get Directions" Button */}
            <div className="mt-8 pt-4">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2D1B2E] hover:bg-[#3E253F] text-white font-medium text-sm transition-all shadow-sm active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 text-[#E8B4B8]" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/70" />
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map iframe (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-3 border border-[#EAE3DF] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden min-h-[380px] lg:min-h-full flex flex-col">
            <div className="w-full h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden relative bg-[#FAF7F5]">
              <iframe
                title={`${site.businessName} Google Map Location`}
                src={site.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
