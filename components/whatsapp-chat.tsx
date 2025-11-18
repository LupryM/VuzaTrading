"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your actual WhatsApp business number (without + or spaces)
  const phoneNumber = "27655827602"; // Example: South African number
  const message =
    "Hi! I would like to inquire about your security and aluminum services.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7" />
      </button>

      {/* Optional: Chat popup preview (can be removed if not needed) */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 rounded-lg bg-white shadow-2xl">
          <div className="flex items-center justify-between rounded-t-lg bg-[#075E54] p-4 text-white">
            <div>
              <h3 className="font-semibold">Vuza Trading</h3>
              <p className="text-xs text-white/80">
                Typically replies instantly
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:opacity-80"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <div className="mb-4 rounded-lg bg-gray-100 p-3">
              <p className="text-sm text-gray-800">
                Hi there! 👋 How can we help you with our security and aluminum
                solutions?
              </p>
            </div>
            <button
              onClick={handleWhatsAppClick}
              className="w-full rounded-lg bg-[#25D366] py-3 text-white transition-colors hover:bg-[#20BA5A]"
            >
              Start Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
}
