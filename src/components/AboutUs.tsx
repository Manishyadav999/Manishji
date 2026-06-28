import { motion } from "motion/react";
import { Award, ShieldCheck, Settings, Users, ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary-50/50 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute left-0 top-1/4 w-72 h-72 bg-accent-50/40 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Story & Management Profiles */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
                ABOUT CHANDA WIRE DIES
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 uppercase tracking-tight leading-tight">
                Our Legacy of Uncompromising Precision and Engineering Craft
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full"></div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Established with a vision to redefine wire drawing efficiency, <strong>Chanda Wire Dies and Tools</strong> has emerged as a premier manufacturer of high-end diamond and tungsten carbide dies in India. Since our inception, we have catered to major power cable corporations, fine electronics wire processors, and global metal drawing plants with unyielding dimensional accuracy.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Every single die crafted in our New Delhi plant is subject to microscope-guided bore inspection and lapped using premium grade diamond powder. Our dedication to sub-micron tolerances ensures that our clients experience minimal wire friction, zero micro-scratching, and maximum run lengths.
            </p>

            {/* Founders & Leadership Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Founder Profile */}
              <div className="bg-primary-50 border-l-4 border-primary-500 p-5 rounded-r-xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-2 right-2 text-primary-200 group-hover:text-primary-300 group-hover:scale-110 transition-all">
                  <Award className="w-10 h-10 stroke-1" />
                </div>
                <span className="text-primary-600 text-[10px] font-extrabold uppercase tracking-widest block mb-1">FOUNDER</span>
                <h4 className="font-display font-bold text-lg text-primary-900">Vikram Yadav</h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Pioneered the wire die manufacturing process with expert engineering principles and established the foundation of Chanda Dies.
                </p>
              </div>

              {/* Current Director Profile */}
              <div className="bg-accent-50 border-l-4 border-accent-500 p-5 rounded-r-xl shadow-sm relative overflow-hidden group">
                <div className="absolute top-2 right-2 text-accent-200 group-hover:text-accent-300 group-hover:scale-110 transition-all">
                  <Users className="w-10 h-10 stroke-1" />
                </div>
                <span className="text-accent-600 text-[10px] font-extrabold uppercase tracking-widest block mb-1">CURRENTLY MANAGED BY</span>
                <h4 className="font-display font-bold text-lg text-primary-900">Hari Shankar Yadav</h4>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                  Steering the enterprise into the digital age with advanced CNC machining, sub-micron coordinate quality checks, and international exports.
                </p>
              </div>
            </div>

            {/* Quality Statement */}
            <div className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl bg-slate-50/50">
              <ShieldCheck className="w-8 h-8 text-accent-500 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-primary-900 uppercase block mb-0.5">100% Quality Verification</span>
                <span className="text-slate-500 leading-relaxed">We certify every die with standard microscope inspection reports and tolerance verification sheets.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Interactive Facility Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
              {/* Main Image */}
              <img
                src="/images/machining_facility_1782630078490.jpg"
                alt="Chanda Dies Manufacturing Workshop"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay styling for industrial context */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-transparent to-transparent opacity-60"></div>

              {/* In-Image Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg text-left">
                <h4 className="font-display font-bold text-base text-primary-900 uppercase tracking-wide flex items-center gap-2">
                  <Settings className="w-4 h-4 text-accent-500 animate-spin-slow" />
                  <span>State-Of-The-Art Facility</span>
                </h4>
                <p className="text-slate-600 text-[11px] mt-1.5 leading-relaxed">
                  Located in the premier industrial hub of New Delhi – New Vishwas Nagar, Shahdara. Our plant is equipped with ultra-precise CNC sizing grinders and microscopic analysis labs.
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-[10px] font-bold text-primary-600 uppercase tracking-wider">
                  <span>Visit Facility Direct</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-accent-500" />
                </div>
              </div>
            </div>

            {/* Behind-image geometric boxes for depth */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-100 rounded-2xl z-0 -rotate-6 hidden sm:block"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent-100 rounded-2xl z-0 rotate-12 hidden sm:block"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
