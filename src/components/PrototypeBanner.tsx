import React from "react";
import { Lock } from "lucide-react";
import { site } from "../config/site";

interface PrototypeBannerProps {
  isVisibleOverride?: boolean;
}

export const PrototypeBanner: React.FC<PrototypeBannerProps> = ({ isVisibleOverride }) => {
  const isVisible = isVisibleOverride !== undefined ? isVisibleOverride : site.isPrototype;

  if (!isVisible) {
    return null;
  }

  return (
    <aside
      aria-label="Prototype announcement"
      className="bg-[#2D1B2E] text-[#FAF7F5] text-xs font-medium py-2 px-4 text-center tracking-wide border-b border-[#E8B4B8]/20 flex items-center justify-center gap-2 select-none z-50 relative"
    >
      <Lock className="w-3.5 h-3.5 text-[#E8B4B8] shrink-0" aria-hidden="true" />
      <span>Prototype Preview — not the official site</span>
      <span className="hidden sm:inline text-white/50 text-[11px]">
        · Template mode active
      </span>
    </aside>
  );
};
