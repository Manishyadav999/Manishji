import { MapPin, Phone, Mail, ExternalLink, MessageSquare } from "lucide-react";
import { PRODUCTS_DATA } from "../data/products";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export default function Footer({ onNavigate, onOpenEnquiry }: FooterProps) {
  const handleProductClick = (id: string) => {
    onNavigate("products");
    setTimeout(() => {
      const el = document.getElementById(`product-detail-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <footer id="footer" className="bg-primary-950 text-slate-300 relative overflow-hidden">
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 border-b border-primary-900/50 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-8 text-left">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate("home")}>
              <span className="font-display font-black text-xl text-white tracking-tight uppercase">
                CHANDA
              </span>
              <span className="text-[10px] font-bold text-accent-500 tracking-[0.2em] uppercase mt-1">
                DIES
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              Leading developer and manufacturer of high-density natural diamond dies, sintered polycrystalline diamond (PCD) dies, and ultra-tough compacting carbide tools. Since our heritage roots, we represent high quality, sub-micron tolerances, and direct plant values.
            </p>

            <div className="flex items-center gap-3">
              {/* WhatsApp direct Link */}
              <a
                href="https://wa.me/919810934082"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#25D366] text-slate-300 hover:text-white transition-all flex items-center justify-center border border-white/10 hover:border-transparent"
                title="Chat with us"
                id="footer-social-whatsapp"
              >
                <MessageSquare className="w-4 h-4 fill-current stroke-none" />
              </a>

              {/* IndiaMART profile link */}
              <a
                href="https://m.indiamart.com/chanda-dies-works/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-accent-500 text-slate-300 hover:text-white transition-all flex items-center justify-center border border-white/10 hover:border-transparent"
                title="IndiaMART Verified profile"
                id="footer-social-indiamart"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest border-b border-primary-900 pb-2">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-accent-500 transition-colors cursor-pointer block"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-accent-500 transition-colors cursor-pointer block"
                >
                  About Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("products")}
                  className="hover:text-accent-500 transition-colors cursor-pointer block"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("gallery")}
                  className="hover:text-accent-500 transition-colors cursor-pointer block"
                >
                  Visual Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-accent-500 transition-colors cursor-pointer block"
                >
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Products Quick Jump (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest border-b border-primary-900 pb-2">
              FEATURED DIES
            </h4>
            <ul className="space-y-2.5 text-xs">
              {PRODUCTS_DATA.slice(0, 5).map((prod) => (
                <li key={prod.id}>
                  <button
                    onClick={() => handleProductClick(prod.id)}
                    className="hover:text-accent-500 text-slate-400 transition-colors cursor-pointer block text-left"
                    id={`footer-prod-link-${prod.id}`}
                  >
                    {prod.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Factory Details (3 cols) */}
          <div className="lg:col-span-3 space-y-4 text-xs">
            <h4 className="text-white font-display font-bold text-xs sm:text-sm uppercase tracking-widest border-b border-primary-900 pb-2">
              PLANT LOCATION
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-left">
                  4/50 Gautam Gali, New Vishwas Nagar, Shahdara, New Delhi – 110032, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent-500 shrink-0" />
                <a href="tel:+919810934082" className="hover:text-white font-semibold transition-colors">
                  +91 9810934082
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-accent-500 shrink-0" />
                <a href="mailto:chandawirediesandtools@gmail.com" className="hover:text-white transition-colors truncate block">
                  chandawirediesandtools@gmail.com
                </a>
              </li>
            </ul>
            
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry()}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold tracking-wider uppercase text-[10px] py-2.5 rounded-md shadow-md transition-all cursor-pointer"
                id="footer-get-quote-btn"
              >
                Quick Consultation
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom copyright with required design credit */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10 text-center sm:flex sm:justify-between sm:items-center text-xs text-slate-500 space-y-3 sm:space-y-0">
        <p className="text-left font-light">
          © 2026 Chanda Wire Dies and Tools. All Rights Reserved.
        </p>
        <p className="text-right font-medium text-slate-400 tracking-wide uppercase text-[10px]">
          Designed by <span className="text-slate-300 font-bold hover:text-accent-400 transition-colors">Manish Yadav</span>.
        </p>
      </div>
    </footer>
  );
}
