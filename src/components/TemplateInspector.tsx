import React, { useState } from "react";
import { SlidersHorizontal, X, Check, ExternalLink, Phone, MessageCircle, EyeOff } from "lucide-react";
import { site } from "../config/site";

interface TemplateInspectorProps {
  onOverrideBookingMode?: (mode: "phone" | "whatsapp" | "external" | "hidden") => void;
  activeBookingMode: "phone" | "whatsapp" | "external" | "hidden";
  isPrototypeActive: boolean;
  onTogglePrototype: () => void;
}

export const TemplateInspector: React.FC<TemplateInspectorProps> = ({
  onOverrideBookingMode,
  activeBookingMode,
  isPrototypeActive,
  onTogglePrototype,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-4 right-4 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2D1B2E]/90 hover:bg-[#2D1B2E] text-white shadow-lg transition-all border border-[#E8B4B8]/30 text-[11px] font-medium cursor-pointer backdrop-blur-xs opacity-85 hover:opacity-100"
          aria-label="Template Controls"
        >
          <SlidersHorizontal className="w-3 h-3 text-[#E8B4B8]" />
          <span className="hidden sm:inline">Config Preview</span>
          <span className="sm:hidden">Config</span>
        </button>
      </div>

      {/* Slide-out Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end"
          role="dialog"
          aria-label="Template Configuration"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#EAE3DF] mb-5">
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2D1B2E]">
                    Template Controls
                  </h3>
                  <p className="text-xs text-[#6B6562]">
                    Single config source: <code className="bg-gray-100 px-1 py-0.5 rounded">/config/site.ts</code>
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100"
                  aria-label="Close template controls"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Booking Mode Switcher */}
              <div className="mb-6">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#2D1B2E] mb-2">
                  Test Booking Button Mode:
                </label>
                <p className="text-[11px] text-[#6B6562] mb-3">
                  Configured mode in <code className="font-mono">/config/site.ts</code> is <strong>"{site.booking.mode}"</strong>. You can simulate all 4 modes below:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => onOverrideBookingMode?.("phone")}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 transition-colors ${
                      activeBookingMode === "phone"
                        ? "bg-[#2D1B2E] text-white border-[#2D1B2E]"
                        : "bg-[#FAF7F5] border-[#EAE3DF] text-[#1A1A1A] hover:bg-gray-100"
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5 text-[#E8B4B8]" />
                    <span>Phone</span>
                    {activeBookingMode === "phone" && <Check className="w-3 h-3 ml-auto" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onOverrideBookingMode?.("whatsapp")}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 transition-colors ${
                      activeBookingMode === "whatsapp"
                        ? "bg-[#2D1B2E] text-white border-[#2D1B2E]"
                        : "bg-[#FAF7F5] border-[#EAE3DF] text-[#1A1A1A] hover:bg-gray-100"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#E8B4B8]" />
                    <span>WhatsApp</span>
                    {activeBookingMode === "whatsapp" && <Check className="w-3 h-3 ml-auto" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onOverrideBookingMode?.("external")}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 transition-colors ${
                      activeBookingMode === "external"
                        ? "bg-[#2D1B2E] text-white border-[#2D1B2E]"
                        : "bg-[#FAF7F5] border-[#EAE3DF] text-[#1A1A1A] hover:bg-gray-100"
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#E8B4B8]" />
                    <span>External URL</span>
                    {activeBookingMode === "external" && <Check className="w-3 h-3 ml-auto" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onOverrideBookingMode?.("hidden")}
                    className={`p-2.5 rounded-xl border flex items-center gap-2 transition-colors ${
                      activeBookingMode === "hidden"
                        ? "bg-[#2D1B2E] text-white border-[#2D1B2E]"
                        : "bg-[#FAF7F5] border-[#EAE3DF] text-[#1A1A1A] hover:bg-gray-100"
                    }`}
                  >
                    <EyeOff className="w-3.5 h-3.5 text-[#E8B4B8]" />
                    <span>Hidden</span>
                    {activeBookingMode === "hidden" && <Check className="w-3 h-3 ml-auto" />}
                  </button>
                </div>
              </div>

              {/* Prototype Banner Toggle */}
              <div className="mb-6 p-4 rounded-2xl bg-[#FAF7F5] border border-[#EAE3DF]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#2D1B2E]">
                      Prototype Banner
                    </p>
                    <p className="text-[11px] text-[#6B6562]">
                      isPrototype = {String(isPrototypeActive)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onTogglePrototype}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      isPrototypeActive
                        ? "bg-[#2D1B2E] text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {isPrototypeActive ? "Visible" : "Hidden"}
                  </button>
                </div>
              </div>

              {/* Active Client Summary */}
              <div className="space-y-2 text-xs text-[#6B6562]">
                <p className="font-semibold text-[#2D1B2E] uppercase tracking-wider text-[11px]">
                  Loaded Client Config
                </p>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 font-mono text-[11px] space-y-1">
                  <div>businessName: "{site.businessName}"</div>
                  <div>phone: "{site.phone}"</div>
                  <div>services: {site.services.length} items</div>
                  <div>stylists: {site.team.length} members</div>
                  <div>gallery: {site.gallery.length} photos</div>
                  <div>reviews: {site.reviews.length} quotes</div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE3DF] text-center">
              <p className="text-[11px] text-[#6B6562]">
                To customize for another client, simply edit values in{" "}
                <code className="text-[#2D1B2E] font-semibold">/config/site.ts</code>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
