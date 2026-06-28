import { useState } from "react";
import { PRODUCTS_DATA } from "../data/products";
import { Product } from "../types";
import { CheckCircle2, Star, ListChecks, Settings2, HelpCircle, ArrowUpRight } from "lucide-react";

interface ProductsSectionProps {
  onOpenEnquiry: (productName?: string) => void;
}

export default function ProductsSection({ onOpenEnquiry }: ProductsSectionProps) {
  const [activeTabMap, setActiveTabMap] = useState<Record<string, "features" | "specs" | "apps">>({});

  const toggleTab = (productId: string, tab: "features" | "specs" | "apps") => {
    setActiveTabMap((prev) => ({
      ...prev,
      [productId]: tab,
    }));
  };

  const handleProductJump = (productId: string) => {
    const el = document.getElementById(`product-detail-${productId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section id="products" className="py-24 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-50/40 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
            OUR PRODUCT PORTFOLIO
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 uppercase tracking-tight">
            High-Performance Wire Drawing Dies & Tools
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full mx-auto"></div>
          <p className="text-slate-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
            Engineered using the hardest synthetic and natural minerals on earth, designed to optimize wire quality and reduce drawing line friction.
          </p>
        </div>

        {/* Quick Jump Buttons Panel */}
        <div className="mb-16">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider text-center mb-4">
            Quick Jump to Product
          </p>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {PRODUCTS_DATA.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductJump(product.id)}
                className="bg-slate-100 hover:bg-primary-50 hover:text-primary-600 text-slate-700 text-xs font-semibold px-4 py-2.5 rounded-full border border-slate-200 hover:border-primary-200 transition-all cursor-pointer"
                id={`quick-jump-${product.id}`}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {/* Alternating Products List */}
        <div className="space-y-28">
          {PRODUCTS_DATA.map((product, index) => {
            const isImageLeft = index % 2 === 0;
            const currentTab = activeTabMap[product.id] || "features";

            return (
              <div
                key={product.id}
                id={`product-detail-${product.id}`}
                className="scroll-mt-24 pt-4"
              >
                {/* Horizontal dividing line for everything except first */}
                {index > 0 && (
                  <div className="w-full h-px bg-slate-100 mb-20"></div>
                )}

                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
                  
                  {/* Column A: Image Panel (Alternates left or right based on index) */}
                  <div
                    className={`lg:col-span-5 ${
                      isImageLeft ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative group overflow-hidden rounded-2xl border border-slate-100 shadow-lg bg-slate-50">
                      {/* Product Image with Hover Zoom */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/45 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Tiny Image Category Tag */}
                      <span className="absolute top-4 left-4 bg-primary-900/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                        ISO 9001:2015 Approved
                      </span>
                    </div>
                  </div>

                  {/* Column B: Info Panel (Alternates order based on index) */}
                  <div
                    className={`lg:col-span-7 text-left space-y-6 ${
                      isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Header */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                        <span className="text-accent-500 font-extrabold text-[11px] uppercase tracking-widest">
                          Premium Series
                        </span>
                      </div>
                      <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-primary-900 uppercase tracking-tight">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-light">
                        {product.description}
                      </p>
                    </div>

                    {/* Interactive Tabs for Product Specs, Features, Apps */}
                    <div className="border-b border-slate-100 flex gap-2">
                      <button
                        onClick={() => toggleTab(product.id, "features")}
                        className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                          currentTab === "features"
                            ? "border-accent-500 text-accent-500"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                        }`}
                        id={`tab-features-${product.id}`}
                      >
                        Core Features
                      </button>
                      <button
                        onClick={() => toggleTab(product.id, "apps")}
                        className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                          currentTab === "apps"
                            ? "border-accent-500 text-accent-500"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                        }`}
                        id={`tab-apps-${product.id}`}
                      >
                        Applications
                      </button>
                      <button
                        onClick={() => toggleTab(product.id, "specs")}
                        className={`pb-3 text-xs font-bold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                          currentTab === "specs"
                            ? "border-accent-500 text-accent-500"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                        }`}
                        id={`tab-specs-${product.id}`}
                      >
                        Specifications
                      </button>
                    </div>

                    {/* Tab Contents */}
                    <div className="min-h-[140px] py-2">
                      {currentTab === "features" && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {product.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {currentTab === "apps" && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {product.applications.map((app, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                              <Star className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {currentTab === "specs" && (
                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 overflow-hidden">
                          <table className="w-full text-xs text-left">
                            <tbody>
                              {Object.entries(product.specifications).map(([key, val], sIdx) => (
                                <tr key={sIdx} className="border-b border-slate-200/55 last:border-0">
                                  <td className="py-2.5 font-bold text-slate-700 uppercase w-1/3 tracking-wider">{key}</td>
                                  <td className="py-2.5 text-slate-600 pl-4">{val}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>

                    {/* Product Key Advantages Tag Cloud */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
                        Core Advantages
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.advantages.map((adv, advIdx) => (
                          <span
                            key={advIdx}
                            className="bg-primary-50 text-primary-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-primary-100"
                          >
                            {adv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action buttons */}
                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => onOpenEnquiry(product.name)}
                        className="flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full shadow-md hover:scale-105 transition-all cursor-pointer"
                        id={`product-enquiry-${product.id}`}
                      >
                        <span>Send Enquiry</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => onOpenEnquiry(product.name)}
                        className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-full transition-all cursor-pointer"
                        id={`product-quote-${product.id}`}
                      >
                        <span>Request Pricing</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
