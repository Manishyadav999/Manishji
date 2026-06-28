import { useState, useEffect } from "react";
import { MessageSquare, Phone, ChevronUp } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-none" id="floating-action-rack">
      
      {/* Floating WhatsApp Chat Button - Pulsing & fully active */}
      <a
        href="https://wa.me/919810934082"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[#25D366]/30 hover:scale-110 transition-all duration-300 relative group animate-bounce-slow"
        title="Chat on WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <MessageSquare className="w-6 h-6 fill-white stroke-none" />
        <span className="absolute right-14 bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
          Chat With Us
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping z-[-1]"></span>
      </a>

      {/* Floating Direct Call Button */}
      <a
        href="tel:+919810934082"
        className="pointer-events-auto w-12 h-12 rounded-full bg-accent-500 text-white flex items-center justify-center shadow-lg hover:shadow-accent-500/30 hover:scale-110 transition-all duration-300 relative group"
        title="Call Plant Manager"
        id="floating-call-trigger"
      >
        <Phone className="w-5 h-5 fill-white stroke-none" />
        <span className="absolute right-14 bg-slate-900/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap uppercase tracking-wider">
          Call Factory
        </span>
      </a>

      {/* Back to Top Button - Elegant and fades in/out dynamically */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto w-11 h-11 rounded-full bg-primary-900 text-white border border-primary-800/50 flex items-center justify-center shadow-md hover:bg-primary-800 transition-all duration-300 cursor-pointer ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        title="Return to Top"
        id="floating-back-to-top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>

    </div>
  );
}
