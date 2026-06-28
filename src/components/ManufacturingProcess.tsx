import { PROCESS_TIMELINE } from "../data/products";
import { Settings, CheckSquare, Sparkles, Package, Truck, Compass } from "lucide-react";

export default function ManufacturingProcess() {
  // Mapping icons to each phase
  const getPhaseIcon = (phase: string) => {
    switch (phase) {
      case "01":
        return Compass;
      case "02":
        return Settings;
      case "03":
        return CheckSquare;
      case "04":
        return Sparkles;
      case "05":
        return Package;
      case "06":
        return Truck;
      default:
        return Settings;
    }
  };

  return (
    <section id="process" className="py-24 bg-white relative">
      {/* Decorative dots background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
            HOW WE MAKE THE BEST
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 uppercase tracking-tight">
            Our Micro-Precision Manufacturing Process
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full mx-auto"></div>
          <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
            From procuring raw mineral matrices to microscopically lapping sizing angles, see how we guarantee sub-micron circular accuracy.
          </p>
        </div>

        {/* Vertical Timeline Track */}
        <div className="relative max-w-5xl mx-auto">
          {/* Centered Vertical Track Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-200 via-accent-200 to-primary-100 -translate-x-1/2 z-0"></div>

          {/* Timeline Steps */}
          <div className="space-y-12">
            {PROCESS_TIMELINE.map((step, index) => {
              const Icon = getPhaseIcon(step.phase);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.phase}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 z-10`}
                  id={`process-step-${step.phase}`}
                >
                  {/* Left Side Container (Takes half-width on desktop, empty or text based on index) */}
                  <div className={`w-full md:w-[45%] text-left md:text-right ${isEven ? "md:order-1" : "md:order-3 md:invisible hidden md:block"}`}>
                    {isEven && (
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <span className="text-accent-500 font-extrabold text-[10px] tracking-widest block mb-2 font-mono">
                          PHASE {step.phase}
                        </span>
                        <h4 className="font-display font-bold text-base text-primary-900 uppercase tracking-wide">
                          {step.title}
                        </h4>
                        <p className="text-slate-500 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Centered Timeline Circular Button (01, 02, etc.) */}
                  <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20 md:order-2">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-primary-500 shadow-md flex items-center justify-center group hover:border-accent-500 hover:scale-110 transition-all">
                      <Icon className="w-5 h-5 text-primary-500 group-hover:text-accent-500 transition-colors" />
                    </div>
                    {/* Floating Phase ID */}
                    <span className="absolute -top-4 font-mono font-bold text-[10px] text-slate-400">
                      {step.phase}
                    </span>
                  </div>

                  {/* Right Side Container (Takes half-width on desktop, empty or text based on index) */}
                  <div className={`w-full md:w-[45%] text-left pl-14 md:pl-0 ${isEven ? "md:order-3 md:invisible hidden md:block" : "md:order-1"}`}>
                    {!isEven && (
                      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                        <span className="text-accent-500 font-extrabold text-[10px] tracking-widest block mb-2 font-mono">
                          PHASE {step.phase}
                        </span>
                        <h4 className="font-display font-bold text-base text-primary-900 uppercase tracking-wide">
                          {step.title}
                        </h4>
                        <p className="text-slate-500 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Mobile Mobile-Only Details Block */}
                  <div className="md:hidden w-full pl-14 text-left">
                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                      <span className="text-accent-500 font-extrabold text-[10px] tracking-widest block mb-2 font-mono">
                        PHASE {step.phase}
                      </span>
                      <h4 className="font-display font-bold text-base text-primary-900 uppercase tracking-wide">
                        {step.title}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
