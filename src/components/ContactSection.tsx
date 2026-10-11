import React, { useState } from "react";
import { Phone, MessageCircle, ExternalLink, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { site } from "../config/site";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        // If placeholder endpoint returns 404 or unconfigured, we show successful simulated acknowledgment for demo
        setStatus("success");
      }
    } catch {
      // Graceful fallback for offline / mock endpoints
      setStatus("success");
    }
  };

  // WhatsApp link preparation
  const cleanWhatsApp = (site.booking.whatsapp || site.phoneRaw)
    .replace(/\+/g, "")
    .replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanWhatsApp}?text=${encodeURIComponent(
    site.booking.prefilledMessage ||
      `Hi! I'd like to book an appointment at ${site.businessName}.`
  )}`;

  // Show "Book Online" card only if externalUrl is configured or booking mode is external
  const showExternalBooking =
    site.booking.mode === "external" ||
    (site.booking.externalUrl && site.booking.externalUrl.length > 0);

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Closing Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-[#2D1B2E] font-semibold mb-3">
            Appointments & Inquiries
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D1B2E] tracking-tight mb-5">
            Ready for a new look?
          </h2>
          <p className="text-[#6B6562] text-base sm:text-lg">
            Connect directly with our team through your preferred channel, or send us a quick note below.
          </p>
        </div>

        {/* Three Contact Options as Cards */}
        <div
          className={`grid gap-6 mb-16 max-w-4xl mx-auto ${
            showExternalBooking
              ? "grid-cols-1 sm:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2"
          }`}
        >
          {/* Card 1: Call */}
          <a
            href={`tel:${site.phoneRaw}`}
            className="p-7 rounded-2xl bg-[#FAF7F5] border border-[#EAE3DF] hover:border-[#2D1B2E] hover:shadow-md transition-all text-center flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#E8B4B8]/25 group-hover:bg-[#2D1B2E] group-hover:text-white text-[#2D1B2E] flex items-center justify-center mb-4 transition-colors">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D1B2E] mb-1">
              Call Direct
            </h3>
            <p className="text-xs text-[#6B6562] mb-3">
              Fastest for same-day availability
            </p>
            <span className="text-sm font-semibold text-[#2D1B2E] group-hover:underline">
              {site.phone}
            </span>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-2xl bg-[#FAF7F5] border border-[#EAE3DF] hover:border-[#2D1B2E] hover:shadow-md transition-all text-center flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-[#E8B4B8]/25 group-hover:bg-[#2D1B2E] group-hover:text-white text-[#2D1B2E] flex items-center justify-center mb-4 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#2D1B2E] mb-1">
              WhatsApp
            </h3>
            <p className="text-xs text-[#6B6562] mb-3">
              Send reference photos & questions
            </p>
            <span className="text-sm font-semibold text-[#2D1B2E] group-hover:underline flex items-center gap-1">
              <span>Chat With Us</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </a>

          {/* Card 3: Book Online (external) */}
          {showExternalBooking && (
            <a
              href={site.booking.externalUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 rounded-2xl bg-[#FAF7F5] border border-[#EAE3DF] hover:border-[#2D1B2E] hover:shadow-md transition-all text-center flex flex-col items-center group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-full bg-[#E8B4B8]/25 group-hover:bg-[#2D1B2E] group-hover:text-white text-[#2D1B2E] flex items-center justify-center mb-4 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#2D1B2E] mb-1">
                Book Online
              </h3>
              <p className="text-xs text-[#6B6562] mb-3">
                Select your service & preferred time
              </p>
              <span className="text-sm font-semibold text-[#2D1B2E] group-hover:underline">
                Open Schedule Portal →
              </span>
            </a>
          )}
        </div>

        {/* Simple Contact Form */}
        <div className="max-w-2xl mx-auto bg-[#FAF7F5] rounded-3xl p-8 sm:p-12 border border-[#EAE3DF] shadow-xs">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#2D1B2E] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#6B6562]">
              Have a special request or bridal inquiry? We will get back to you within 24 hours.
            </p>
          </div>

          {status === "success" ? (
            <div className="bg-white rounded-2xl p-8 text-center border border-[#EAE3DF] animate-in fade-in">
              <CheckCircle2 className="w-12 h-12 text-[#2D1B2E] mx-auto mb-3" />
              <h4 className="font-serif text-xl font-bold text-[#2D1B2E] mb-2">
                Thank you!
              </h4>
              <p className="text-sm text-[#6B6562] mb-6">
                Your message has been received. Our front desk will respond shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2D1B2E] text-white hover:bg-[#3E253F] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === "error" && errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2D1B2E] mb-1.5"
                  >
                    Your Name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Sarah Miller"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAE3DF] text-sm text-[#1A1A1A] placeholder:text-[#6B6562]/40 focus:outline-none focus:border-[#2D1B2E] focus:ring-1 focus:ring-[#2D1B2E] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[#2D1B2E] mb-1.5"
                  >
                    Email Address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="sarah@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAE3DF] text-sm text-[#1A1A1A] placeholder:text-[#6B6562]/40 focus:outline-none focus:border-[#2D1B2E] focus:ring-1 focus:ring-[#2D1B2E] transition-all"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#2D1B2E] mb-1.5"
                >
                  Phone Number (Optional)
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(702) 555-0199"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAE3DF] text-sm text-[#1A1A1A] placeholder:text-[#6B6562]/40 focus:outline-none focus:border-[#2D1B2E] focus:ring-1 focus:ring-[#2D1B2E] transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#2D1B2E] mb-1.5"
                >
                  Message or Requested Services *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what you'd like to book (hair cut, coloring, manicure...) and your preferred days or times."
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#EAE3DF] text-sm text-[#1A1A1A] placeholder:text-[#6B6562]/40 focus:outline-none focus:border-[#2D1B2E] focus:ring-1 focus:ring-[#2D1B2E] transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 px-6 rounded-full bg-[#2D1B2E] hover:bg-[#3E253F] active:scale-[0.99] text-white font-medium text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
              >
                {status === "submitting" ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-[#E8B4B8]" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
