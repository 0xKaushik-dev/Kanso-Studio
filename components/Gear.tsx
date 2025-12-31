import React from 'react';
import SectionLabel from './SectionLabel';
import { Camera, Aperture, Plane, Zap } from 'lucide-react';

const equipment = [
  {
    category: "Cameras",
    icon: Camera,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    items: ["Sony FX6 Cinema Line", "Sony A7S III", "Canon R5 Mirrorless", "Blackmagic Pocket 6K"]
  },
  {
    category: "Lenses",
    icon: Aperture,
    img: "https://images.unsplash.com/photo-1617005082133-548c4dd27f35?q=80&w=800&auto=format&fit=crop",
    items: ["Sony FE 24-70mm GM II", "Sony FE 16-35mm GM", "Canon RF 50mm f/1.2L", "Sigma Art 85mm f/1.4"]
  },
  {
    category: "Drones",
    icon: Plane,
    img: "https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?q=80&w=800&auto=format&fit=crop",
    items: ["DJI Mavic 3 Cine", "DJI Inspire 2", "DJI Mini 3 Pro", "FPV Custom Builds"]
  },
  {
    category: "Lighting",
    icon: Zap,
    img: "https://images.unsplash.com/photo-1554048612-387768052bf7?q=80&w=800&auto=format&fit=crop",
    items: ["Aputure LS 600d Pro", "Nanlite Pavotube 30C", "Aputure 300d II", "Godox VL150"]
  }
];

export default function Gear() {
  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <div className="reveal">
        <SectionLabel number="04" title="Equipment" />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 reveal">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-xl">
            World-class gear for world-class results.
        </h2>
        <p className="text-gray-500 max-w-xs text-sm md:text-base">
            We invest in the best technology to ensure your project looks cinematic, sharp, and professional.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipment.map((cat, i) => (
            <div key={i} className={`group rounded-2xl bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 cursor-default flex flex-col reveal reveal-delay-${i + 1}`}>
                <div className="h-48 overflow-hidden relative bg-gray-100">
                    <img 
                        src={cat.img} 
                        alt={cat.category}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop";
                        }}
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-black shadow-sm z-10">
                        <cat.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                
                <div className="p-6 flex-grow bg-white group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <h3 className="text-lg font-medium mb-4">{cat.category}</h3>
                    <ul className="space-y-2">
                        {cat.items.map((item, idx) => (
                            <li key={idx} className="text-sm opacity-60 group-hover:opacity-80 transition-opacity">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}