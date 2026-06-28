import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, MessageSquare, PhoneCall } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  openEnquiryModal: () => void;
}

export default function Navbar({ activeSection, onNavigate, openEnquiryModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "products", label: "Products" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 py-3 text-slate-800"
          : "bg-transparent md:bg-black/10 backdrop-blur-[1px] py-5 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand Symbol & Name */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center gap-3 group text-left cursor-pointer"
            id="navbar-logo-btn"
          >
            {/* Elegant Custom SVG Industrial Die Logomark */}
            <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 100 100"
                className="w-10 h-10 transform group-hover:rotate-45 transition-transform duration-500"
              >
                {/* Hexagonal Outer Die casing */}
                <polygon
                  points="50,5 90,28 90,72 50,95 10,72 10,28"
                  className={`${isScrolled ? "fill-primary-500" : "fill-white"} opacity-15`}
                />
                <polygon
                  points="50,5 90,28 90,72 50,95 10,72 10,28"
                  className={`${isScrolled ? "stroke-primary-500" : "stroke-white"}`}
                  strokeWidth="6"
                  fill="none"
                />
                {/* Core Sintered Ring */}
                <circle
                  cx="50"
                  cy="50"
                  r="22"
                  className="stroke-accent-500"
                  strokeWidth="5"
                  fill="none"
                />
                {/* Drawing Wire Line */}
                <line
                  x1="15"
                  y1="50"
                  x2="85"
                  y2="50"
                  className={`${isScrolled ? "stroke-primary-500" : "stroke-white"}`}
                  strokeWidth="4"
                  strokeDasharray="4 3"
                />
                <polygon
                  points="85,50 78,45 78,55"
                  className="fill-accent-500"
                />
              </svg>
              <div className="absolute w-2.5 h-2.5 bg-accent-500 rounded-full animate-ping opacity-75"></div>
            </div>

            <div className="flex flex-col">
              <span className={`font-display font-extrabold text-base sm:text-lg leading-tight tracking-tight uppercase ${
                isScrolled ? "text-primary-500" : "text-white"
              }`}>
                CHANDA
              </span>
              <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase ${
                isScrolled ? "text-slate-500" : "text-slate-300"
              }`}>
                WIRE DIES & TOOLS
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative px-4 py-2 rounded-full text-[13px] font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isScrolled
                        ? "text-accent-500 bg-accent-50"
                        : "text-white bg-white/20"
                      : isScrolled
                      ? "text-slate-600 hover:text-accent-500 hover:bg-slate-50"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                  id={`nav-link-${link.id}`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Call-to-action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={openEnquiryModal}
              className="group flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white text-[12px] font-bold tracking-wider uppercase px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
              id="navbar-enquiry-btn"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Menu"
              id="navbar-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 md:hidden transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
          id="navbar-mobile-backdrop"
        />
      )}

      {/* Mobile Drawer Navigation Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white text-slate-800 shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        id="navbar-mobile-drawer"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold text-lg text-primary-500 tracking-tight">CHANDA</span>
              <span className="text-[9px] font-semibold text-slate-500 tracking-wider">DIES</span>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:bg-slate-100"
              id="navbar-mobile-drawer-close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-1.5 py-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold tracking-wide uppercase text-left transition-colors cursor-pointer ${
                    isActive
                      ? "text-accent-500 bg-accent-50"
                      : "text-slate-600 hover:text-accent-500 hover:bg-slate-50"
                  }`}
                  id={`mobile-nav-link-${link.id}`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 bg-accent-500 rounded-full"></span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Contact Quick Links */}
        <div className="space-y-4 pt-6 border-t border-slate-100">
          <div className="space-y-2 text-xs text-slate-500">
            <p className="font-semibold text-slate-700">Chanda Wire Dies & Tools</p>
            <p>New Vishwas Nagar, Shahdara, New Delhi</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+919810934082"
              className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-lg text-xs font-bold"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <a
              href="https://wa.me/919810934082"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-lg text-xs font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openEnquiryModal();
            }}
            className="w-full bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold uppercase tracking-wider py-3 rounded-lg shadow-sm"
          >
            Request Custom Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
