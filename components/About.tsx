import React from 'react';
import SectionLabel from './SectionLabel';
import { Play } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <div className="reveal">
        <SectionLabel number="01" title="Who We Are" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div className="reveal">
          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-8">
            We preserve moments <span className="text-gray-400">that live forever through cinematic lenses and artistic eyes.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-md">
            Based in the heart of the industry, Aura Production is a collective of filmmakers and photographers dedicated to high-fidelity event documentation.
          </p>
        </div>
        
        <div className="flex flex-col gap-4 border-l border-gray-200 pl-6 md:pl-12 py-2 reveal reveal-delay-1">
            {[
                { label: "Events Covered", value: "850+" },
                { label: "Countries Traveled", value: "24" },
                { label: "Team of Professionals", value: "35" },
                { label: "Happy Memories", value: "∞" },
            ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-2">
                    <span className="font-bold text-lg">{stat.value}</span>
                    <span className="text-gray-500">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>

      <div className="w-full aspect-video bg-black rounded-lg overflow-hidden relative group cursor-pointer reveal reveal-delay-2">
        <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
            alt="Production Showreel" 
            className="w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40 grayscale"
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop";
            }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center pl-1 shadow-2xl transition-transform group-hover:scale-110">
                <Play className="w-8 h-8 fill-black text-black" />
            </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 text-center text-white text-sm font-medium tracking-widest uppercase">
             Play 2025 Showreel
        </div>
      </div>
    </section>
  );
}