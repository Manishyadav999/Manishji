import { useState, useEffect } from "react";
import { BUSINESS_HIGHLIGHTS } from "../data/products";
import { Trophy, TrendingUp, ShieldCheck, Smile } from "lucide-react";

export default function BusinessHighlights() {
  const [counts, setCounts] = useState<Record<string, number>>({
    bh1: 0,
    bh2: 0,
    bh3: 0,
    bh4: 0,
  });

  useEffect(() => {
    // Target final numbers derived from data:
    // bh1 (Years): 25
    // bh2 (Happy Clients): 1200
    // bh3 (Tons Drawn): 8500
    // bh4 (Satisfaction): 100
    const targets: Record<string, number> = {
      bh1: 25,
      bh2: 1200,
      bh3: 8500,
      bh4: 100,
    };

    const duration = 2000; // 2 seconds total animation time
    const intervalTime = 30; // ms per update
    const steps = duration / intervalTime;

    const increments: Record<string, number> = {
      bh1: targets.bh1 / steps,
      bh2: targets.bh2 / steps,
      bh3: targets.bh3 / steps,
      bh4: targets.bh4 / steps,
    };

    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setCounts((prev) => {
        const next = { ...prev };
        Object.keys(targets).forEach((key) => {
          if (stepCount >= steps) {
            next[key] = targets[key];
          } else {
            next[key] = Math.min(Math.floor(increments[key] * stepCount), targets[key]);
          }
        });
        return next;
      });

      if (stepCount >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const getHighlightIcon = (id: string) => {
    switch (id) {
      case "bh1":
        return Trophy;
      case "bh2":
        return Smile;
      case "bh3":
        return TrendingUp;
      case "bh4":
        return ShieldCheck;
      default:
        return ShieldCheck;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Highlights Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {BUSINESS_HIGHLIGHTS.map((item) => {
            const Icon = getHighlightIcon(item.id);
            const currentValue = counts[item.id];

            return (
              <div
                key={item.id}
                className="text-center space-y-3 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                id={`highlight-item-${item.id}`}
              >
                {/* Micro Top Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-500 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="mx-auto w-10 h-10 rounded-full bg-primary-50 text-primary-500 flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <span className="block font-display font-black text-3xl sm:text-4xl text-primary-900 tracking-tight">
                    {currentValue.toLocaleString()}
                    <span className="text-accent-500 font-extrabold">{item.suffix || ""}</span>
                  </span>
                  
                  <p className="text-slate-400 font-semibold text-[10px] tracking-wider uppercase font-mono">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
