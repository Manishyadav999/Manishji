import { motion } from "motion/react";
import { Phone, MessageSquare, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
  openEnquiryModal: () => void;
}

export default function Hero({ onScrollToSection, openEnquiryModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-primary-950"
    >
      {/* Background Image with Dark Blue & Obsidian Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/industrial_hero_bg_1782630033730.jpg"
          alt="Chanda Wire Dies Plant Background"
          className="w-full h-full object-cover scale-105"
          style={{ transform: "translate3d(0, 0, 0)" }}
          referrerPolicy="no-referrer"
        />
        {/* Multi-layered Premium Gradients for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/40"></div>
        
        {/* Cyberpunk Sparkle Dot Overlay to accentuate industrial theme */}
        <div className="absolute inset-0 bg-[radial-gradient(#ff7a00_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-15"></div>
      </div>

      {/* Decorative Warm Light Accent */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[35rem] h-[35rem] bg-accent-500/10 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy Container */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Small Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/30 text-accent-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase backdrop-blur-md"
            >
              <ShieldCheck className="w-4 h-4 text-accent-500" />
              <span>An ISO 9001:2015 Certified Manufacturer</span>
            </motion.div>

            {/* Giant Title and Subheading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-white leading-none tracking-tight uppercase"
              >
                CHANDA
                <span className="block text-accent-500 font-black mt-2">
                  WIRE DIES & TOOLS
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-display font-medium text-lg sm:text-xl text-slate-200 tracking-wide border-l-4 border-accent-500 pl-4"
              >
                Precision Engineered Wire Dies for Superior Performance
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-slate-300 text-sm sm:text-base max-w-xl font-light"
              >
                Premium quality natural diamond, PCD, and tungsten carbide dies crafted with extreme sub-micron tolerances. Perfect wire ovality, mirror finish, and ultimate wear-resistance.
                <span className="block mt-2 font-medium text-accent-400">
                  Premium Quality Products at Affordable Prices.
                </span>
              </motion.p>
            </div>

            {/* Action Buttons Grid */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4 items-center"
            >
              {/* Primary Call Action */}
              <button
                onClick={openEnquiryModal}
                className="group flex items-center gap-2 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold tracking-wider uppercase text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-accent-500/20 hover:scale-105 transition-all cursor-pointer"
                id="hero-get-quote-btn"
              >
                <span>Get Free Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* View Products */}
              <button
                onClick={() => onScrollToSection("products")}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white font-bold tracking-wider uppercase text-xs sm:text-sm px-6 py-3.5 rounded-full backdrop-blur-sm transition-all hover:scale-105 cursor-pointer"
                id="hero-view-products-btn"
              >
                <span>View Products</span>
              </button>

              {/* Call Now */}
              <a
                href="tel:+919810934082"
                className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white text-xs sm:text-sm font-semibold tracking-wide uppercase px-5 py-3 rounded-full shadow-md transition-all hover:scale-105"
                id="hero-call-now-btn"
              >
                <Phone className="w-4 h-4 text-accent-400" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp Chat */}
              <a
                href="https://wa.me/919810934082"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase px-5 py-3 rounded-full shadow-md transition-all hover:scale-105"
                id="hero-whatsapp-btn"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* Right Floating Bento-style Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="glass-panel-dark backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
              {/* Highlight Lines */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500/10 rounded-full filter blur-xl group-hover:bg-accent-500/25 transition-all"></div>
              
              <h3 className="font-display font-bold text-xl text-white mb-6 uppercase tracking-wider border-b border-white/10 pb-3 flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent-500 animate-pulse" />
                <span>Precision Guarantee</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent-500/20 p-2.5 rounded-lg shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Sub-micron Tolerance</h4>
                    <p className="text-slate-300 text-xs mt-1">Our natural diamond dies maintain accuracy up to ±0.0001 mm for absolute uniformity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-500/20 p-2.5 rounded-lg shrink-0">
                    <Zap className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Extreme Longevity</h4>
                    <p className="text-slate-300 text-xs mt-1">Sintered PCD blanks provide isotropic durability designed for highly abrasive steel drawing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-accent-500/20 p-2.5 rounded-lg shrink-0">
                    <Layers className="w-5 h-5 text-accent-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">100% Customized Angles</h4>
                    <p className="text-slate-300 text-xs mt-1">Bespoke entry, reduction and exit angles customized exactly for your drawing metals.</p>
                  </div>
                </div>
              </div>

              {/* Live Status indicator */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>NEW DELHI FACILITY</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-ping"></span>
                  <span className="text-slate-200">PRODUCTION DIRECT</span>
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
