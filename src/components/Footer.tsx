import React from "react";
import { Instagram, Facebook, Phone, MapPin } from "lucide-react";
import { site } from "../config/site";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Team", href: "#team" },
    { label: "Reviews", href: "#reviews" },
    { label: "Hours & Location", href: "#hours-location" },
    { label: "Contact", href: "#contact" },
  ];

  const hasSocials =
    Boolean(site.social.instagram) ||
    Boolean(site.social.facebook) ||
    Boolean(site.social.tiktok) ||
    Boolean(site.social.yelp);

  return (
    <footer className="bg-[#1E121F] text-[#FAF7F5] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Business Brand & Bio (5 cols) */}
          <div className="md:col-span-5">
            <a
              href="#"
              className="font-serif text-2xl font-bold tracking-tight text-[#FAF7F5] mb-3 inline-block"
            >
              {site.businessName}
            </a>
            <p className="text-sm text-[#FAF7F5]/70 max-w-sm mb-6 leading-relaxed">
              {site.description}
            </p>

            {/* Social Icons (hidden if empty) */}
            {hasSocials && (
              <div className="flex items-center gap-3">
                {site.social.instagram && (
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E8B4B8]/20 hover:text-[#E8B4B8] border border-white/10 flex items-center justify-center transition-colors"
                    aria-label={`${site.businessName} on Instagram`}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {site.social.facebook && (
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E8B4B8]/20 hover:text-[#E8B4B8] border border-white/10 flex items-center justify-center transition-colors"
                    aria-label={`${site.businessName} on Facebook`}
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-[#E8B4B8] font-semibold mb-4">
              Quick Links
            </p>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#FAF7F5]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (4 cols) */}
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-[#E8B4B8] font-semibold mb-4">
              Contact & Hours
            </p>
            <div className="space-y-3 text-sm text-[#FAF7F5]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8B4B8] shrink-0 mt-0.5" />
                <a
                  href={site.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {site.address}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E8B4B8] shrink-0" />
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {site.phone}
                </a>
              </div>
              <p className="text-xs text-[#FAF7F5]/50 pt-2">
                Tuesday – Saturday: 9:00 AM – 6:00 PM <br />
                Sunday & Monday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F5]/60">
          <p>
            © {currentYear} {site.businessName}. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            <span>{site.credit?.text || "Website by"}</span>
            <a
              href={site.credit?.url || "#"}
              className="text-[#E8B4B8] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.credit?.name || "SalonStudio"}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
