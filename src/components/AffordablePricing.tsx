import { Sparkles, BadgePercent, Layers, ShieldCheck, ArrowRight } from "lucide-react";

interface AffordablePricingProps {
  onOpenEnquiry: () => void;
}

export default function AffordablePricing({ onOpenEnquiry }: AffordablePricingProps) {
  const pillars = [
    {
      icon: Sparkles,
      color: "text-accent-500 bg-accent-50",
      title: "High Quality Products",
      description: "We use only selected gem-quality natural diamonds, global grade sintered PCD elements, and virgin tungsten carbide blanks."
    },
    {
      icon: BadgePercent,
      color: "text-[#25D366] bg-green-50",
      title: "Affordable Factory-Direct Pricing",
      description: "Direct-from-plant supply cuts out intermediary traders, passing 20% to 35% cost savings directly down to cable manufacturers."
    },
    {
      icon: Layers,
      color: "text-primary-500 bg-primary-50",
      title: "Bulk & Customized Orders",
      description: "Enjoy flexible volume discounts for complete die set sizing runs, tailored with custom outer casings and specialized draft profiles."
    },
    {
      icon: ShieldCheck,
      color: "text-blue-500 bg-blue-50",
      title: "Reliable & Guaranteed Quality",
      description: "Every shipment is accompanied by detailed microscopical sizing sheets and diameter calibration reports."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-primary-900 text-white relative overflow-hidden">
      {/* Visual glowing masks */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-accent-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-500/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual copy & callout */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="text-accent-400 font-extrabold uppercase tracking-widest text-xs block">
              VALUE PROPOSITION
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight leading-tight">
              Premium Quality Dies At Honest Factory Rates
            </h2>
            <div className="w-16 h-1 bg-accent-500 rounded-full"></div>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              By controlling our entire high-precision manufacturing, micro-lapping, and testing pipeline within our Shahdara, New Delhi facility, we eliminate unnecessary trade overheads.
            </p>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              This vertical integration allows wire manufacturers to source premium diamond and PCD dies that outperform market benchmarks, all within a budget that respects your plant's operational bottom line.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                className="group flex items-center gap-2.5 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-bold tracking-wider uppercase text-xs px-6 py-3.5 rounded-full shadow-lg hover:shadow-accent-500/25 transition-all cursor-pointer"
                id="pricing-quote-btn"
              >
                <span>Request Volume Pricing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Key Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all text-left group"
                  id={`pricing-pillar-${idx}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${pillar.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-white font-display font-bold text-base uppercase tracking-wide group-hover:text-accent-400 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-slate-300 text-xs mt-2.5 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
