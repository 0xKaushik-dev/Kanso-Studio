import React from 'react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 px-4 md:px-8 pb-12 w-full max-w-7xl mx-auto">
      <div className="flex flex-col items-start mb-12">
        <div className="overflow-hidden mb-4">
          <h1 className="text-[12vw] md:text-[8rem] leading-[0.85] font-serif font-medium tracking-tighter reveal">
            Aura®
          </h1>
        </div>
        <p className="text-lg md:text-2xl text-gray-500 max-w-2xl leading-relaxed reveal reveal-delay-1">
          High-end event production agency capturing raw emotion and cinematic stories through world-class photography and film.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 reveal reveal-delay-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current text-black" />
            ))}
            <span className="text-sm font-medium ml-2">5.0/5</span>
          </div>
          <span className="text-sm text-gray-500">Trusted for <span className="text-black font-semibold">500+</span> luxury events worldwide</span>
        </div>
        
        <div className="flex gap-8 items-center opacity-40 grayscale overflow-hidden">
            <span className="text-xl font-bold font-serif hover:opacity-100 transition-opacity cursor-pointer">VOGUE</span>
            <span className="text-xl font-bold font-serif hover:opacity-100 transition-opacity cursor-pointer">BRIDES</span>
            <span className="text-xl font-bold font-serif hover:opacity-100 transition-opacity cursor-pointer">HARPER'S</span>
            <span className="text-xl font-bold font-serif hover:opacity-100 transition-opacity cursor-pointer">ELLE</span>
        </div>
      </div>

      <div className="w-full aspect-[4/3] md:aspect-[21/9] bg-gray-100 rounded-2xl overflow-hidden relative reveal-scale reveal-delay-3 group">
        <img 
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000&auto=format&fit=crop" 
            alt="Cinematic Event Capture" 
            className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-[3000ms] ease-out"
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2000&auto=format&fit=crop";
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            <p className="text-xs uppercase tracking-[0.3em] mb-2 opacity-70 font-bold">Featured Coverage</p>
            <h2 className="text-2xl md:text-4xl font-serif">The Royal Udaipur Wedding, 2025</h2>
        </div>
      </div>
    </section>
  );
}