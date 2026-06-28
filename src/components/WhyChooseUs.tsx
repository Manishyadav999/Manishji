import { Award, BadgePercent, Cpu, CheckCircle, Hourglass, Users, Truck, ThumbsUp, Wrench } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source pristine global raw materials and verify every die using extreme magnification optical microscopes."
    },
    {
      icon: BadgePercent,
      title: "Affordable Prices",
      description: "Direct manufacturing eliminates intermediaries, offering world-class quality at competitive prices."
    },
    {
      icon: Cpu,
      title: "Precision Engineering",
      description: "Our dies are machined to sub-micron tolerances, maintaining perfect roundness and zero micro-scratches."
    },
    {
      icon: CheckCircle,
      title: "Reliable Performance",
      description: "Guarantees highly uniform wire diameters, preventing wire snaps and line halts on your shop floor."
    },
    {
      icon: Hourglass,
      title: "Long Lasting Products",
      description: "Formulated with ultra-dense sintered crystals that offer 30%+ extended wear lifespan under continuous drawing."
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Backed by 25+ years of core expertise in metal-drawing geometries, led by veteran engineering leaders."
    },
    {
      icon: Truck,
      title: "Timely Delivery",
      description: "Our efficient production scheduling and secure logistics ensure bulk batches reach your plant on time."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Providing 100% transparent after-sales consultation, custom sizing support, and immediate response."
    },
    {
      icon: Wrench,
      title: "Custom Manufacturing",
      description: "We engineer custom profile shapes (square, hex, flat ribbon) tailored precisely to your technical CAD blueprints."
    }
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-100/30 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
            CHANDA ADVANTAGE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 uppercase tracking-tight">
            Why Leading Wire Plants Choose Chanda Dies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full mx-auto"></div>
          <p className="text-slate-500 text-sm font-light max-w-xl mx-auto leading-relaxed">
            Through high-end materials, rigorous optical inspection, and meticulous polishing, we deliver dies that exceed global wire drawing standards.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-left group"
                id={`why-choose-card-${index}`}
              >
                {/* Icon block with active colored circle */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-primary-50 text-primary-500 mb-6 group-hover:bg-accent-500 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-lg text-primary-900 group-hover:text-accent-500 transition-colors duration-200">
                  {feature.title}
                </h3>
                
                <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
