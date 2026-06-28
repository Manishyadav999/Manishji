import { TESTIMONIALS_DATA } from "../data/products";
import { Quote, Star, User } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent-100/10 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 uppercase tracking-tight">
            Trusted by Elite Wire Drawing Facilities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full mx-auto"></div>
          <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Read how wire plant directors, quality managers, and process engineers increase line efficiency and reduce scrap counts using Chanda Dies.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm relative hover:shadow-md hover:bg-slate-50/70 transition-all flex flex-col justify-between"
              id={`testimonial-card-${item.id}`}
            >
              {/* Giant Quote Icon */}
              <div className="absolute top-6 right-8 text-primary-200/40">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-accent-500">
                {Array.from({ length: item.rating }).map((_, sIdx) => (
                  <Star key={sIdx} className="w-4 h-4 fill-accent-500" />
                ))}
              </div>

              {/* Speech bubble copy */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic font-light mb-8">
                "{item.comment}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3.5 border-t border-slate-200/50 pt-5">
                <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold font-display text-sm">
                  {item.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="text-slate-800 font-bold text-xs sm:text-sm uppercase tracking-wider">{item.name}</h4>
                  <p className="text-slate-400 text-[10px] uppercase font-semibold mt-0.5 font-mono">{item.designation}</p>
                  <p className="text-primary-600 text-[10px] font-bold mt-0.5">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
