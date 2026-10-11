import React, { useEffect, useState } from "react";
import { Phone, MessageCircle, ExternalLink, Calendar } from "lucide-react";
import { site } from "../config/site";

interface BookingButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "hero";
  customLabel?: string;
  showIcon?: boolean;
  stylistName?: string;
  customBookingUrl?: string;
  modeOverride?: "phone" | "whatsapp" | "external" | "hidden";
}

export const BookingButton: React.FC<BookingButtonProps> = ({
  className = "",
  variant = "primary",
  customLabel,
  showIcon = true,
  stylistName,
  customBookingUrl,
  modeOverride,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileUA =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const isSmallScreen = window.innerWidth < 768;
      setIsMobile(isMobileUA || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { phone, whatsapp, externalUrl, prefilledMessage } = site.booking;
  const mode = modeOverride || site.booking.mode;

  // Custom stylist booking override if available
  const effectiveUrl = customBookingUrl || externalUrl;

  // mode "hidden" -> button does not render
  if (mode === "hidden" && !customBookingUrl) {
    return null;
  }

  let href = "#";
  let target: string | undefined = undefined;
  let rel: string | undefined = undefined;
  let defaultLabel = "Book Now";
  let IconComponent = Calendar;

  if (customBookingUrl) {
    href = customBookingUrl;
    target = "_blank";
    rel = "noopener noreferrer";
    defaultLabel = stylistName ? `Book with ${stylistName}` : "Book Online";
    IconComponent = ExternalLink;
  } else if (mode === "phone") {
    const cleanPhone = (phone || site.phoneRaw).replace(/[^+\d]/g, "");
    href = `tel:${cleanPhone}`;
    defaultLabel = isMobile ? "Call to Book" : "Book Now";
    IconComponent = Phone;
  } else if (mode === "whatsapp") {
    const cleanWhatsApp = (whatsapp || site.phoneRaw).replace(/\+/g, "").replace(/\D/g, "");
    const encodedMsg = encodeURIComponent(
      prefilledMessage || `Hi! I'd like to book an appointment at ${site.businessName}.`
    );
    href = `https://wa.me/${cleanWhatsApp}?text=${encodedMsg}`;
    target = "_blank";
    rel = "noopener noreferrer";
    defaultLabel = "WhatsApp to Book";
    IconComponent = MessageCircle;
  } else if (mode === "external") {
    href = effectiveUrl || "#";
    target = "_blank";
    rel = "noopener noreferrer";
    defaultLabel = "Book Online";
    IconComponent = ExternalLink;
  }

  const label = customLabel || defaultLabel;

  // Style variants
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 group select-none";

  let variantClasses = "";
  if (variant === "primary") {
    variantClasses =
      "bg-[#2D1B2E] text-[#FAF7F5] hover:bg-[#3E253F] active:scale-[0.98] shadow-sm hover:shadow px-5 py-2.5 rounded-full text-sm";
  } else if (variant === "hero") {
    variantClasses =
      "bg-[#E8B4B8] text-[#1A1A1A] hover:bg-[#DE9CA1] active:scale-[0.98] shadow-md hover:shadow-lg px-7 py-3.5 rounded-full text-base font-semibold tracking-wide";
  } else if (variant === "secondary") {
    variantClasses =
      "bg-white/90 backdrop-blur-sm text-[#1A1A1A] hover:bg-white active:scale-[0.98] border border-black/10 px-6 py-3.5 rounded-full text-base font-medium shadow-sm";
  } else if (variant === "outline") {
    variantClasses =
      "bg-transparent text-[#2D1B2E] hover:bg-[#2D1B2E] hover:text-[#FAF7F5] border border-[#2D1B2E] px-4 py-2 rounded-full text-sm";
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`${baseClasses} ${variantClasses} ${className}`}
      aria-label={label}
    >
      {showIcon && (
        <IconComponent
          className="w-4 h-4 mr-2 shrink-0 transition-transform duration-200 group-hover:scale-110"
          aria-hidden="true"
        />
      )}
      <span>{label}</span>
    </a>
  );
};
