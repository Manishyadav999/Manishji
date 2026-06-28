import React, { useState } from "react";
import { GALLERY_ITEMS } from "../data/products";
import { GalleryItem } from "../types";
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from "lucide-react";

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Derive unique categories dynamically
  const categories = ["All", ...Array.from(new Set(GALLERY_ITEMS.map((item) => item.category)))];

  // Filter items
  const filteredItems =
    selectedCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((gi) => gi.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-100/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="text-accent-500 font-extrabold uppercase tracking-widest text-xs block">
            VISUAL CATALOGUE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-900 uppercase tracking-tight">
            Our Precision Product & Manufacturing Gallery
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-500 to-amber-500 rounded-full mx-auto"></div>
          <p className="text-slate-500 text-sm font-light max-w-xl mx-auto leading-relaxed">
            A microscopic and macro visual showcase of our premium synthetic diamonds, custom compacting carbide tools, and cleanroom machining facilities.
          </p>
        </div>

        {/* Category Filters Tab Menu */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-primary-500 border-primary-500 text-white shadow-md"
                  : "bg-white border-slate-200 text-slate-500 hover:text-primary-500 hover:border-primary-200"
              }`}
              id={`gallery-cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 relative"
              id={`gallery-grid-item-${item.id}`}
            >
              {/* Image Frame */}
              <div className="relative aspect-square overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Hover overlay */}
                <div className="absolute inset-0 bg-primary-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                  <div className="text-center space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-8 h-8 text-accent-500 mx-auto" />
                    <p className="text-[10px] text-accent-400 font-extrabold uppercase tracking-widest">{item.category}</p>
                    <p className="text-white text-xs font-semibold leading-snug">{item.title}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Card Labels */}
              <div className="p-4 border-t border-slate-50 flex items-center justify-between">
                <div className="text-left">
                  <p className="text-[9px] font-extrabold text-accent-500 uppercase tracking-widest">{item.category}</p>
                  <p className="text-slate-800 text-xs font-bold mt-0.5 truncate max-w-[170px]">{item.title}</p>
                </div>
                <ImageIcon className="w-4 h-4 text-slate-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
            id="gallery-lightbox-modal"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all cursor-pointer"
              id="lightbox-close-btn"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Control */}
            <button
              onClick={prevSlide}
              className="absolute left-6 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all cursor-pointer"
              id="lightbox-prev-btn"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slider Container */}
            <div
              className="relative max-w-4xl max-h-[80vh] w-full flex flex-col items-center justify-center text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={GALLERY_ITEMS[lightboxIndex].image}
                alt={GALLERY_ITEMS[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10 animate-fade-in"
                referrerPolicy="no-referrer"
              />
              
              {/* Captions Block */}
              <div className="mt-4 text-white text-left max-w-xl">
                <span className="text-[10px] font-extrabold text-accent-500 uppercase tracking-wider">
                  {GALLERY_ITEMS[lightboxIndex].category}
                </span>
                <h4 className="font-display font-bold text-base mt-0.5">{GALLERY_ITEMS[lightboxIndex].title}</h4>
                <p className="text-slate-400 text-xs mt-1.5 font-light">
                  Precision engineered at Chanda Wire Dies & Tools New Delhi plant. Quality approved.
                </p>
              </div>
            </div>

            {/* Next Control */}
            <button
              onClick={nextSlide}
              className="absolute right-6 p-3 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all cursor-pointer"
              id="lightbox-next-btn"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
