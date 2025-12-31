import React from 'react';
import SectionLabel from './SectionLabel';
import { Plus, ArrowRight } from 'lucide-react';

const services = [
  "Wedding & Pre-Wedding Cinema",
  "Haldi & Ritual Coverage",
  "Luxury Fashion & Music Videos",
  "Post-Wedding & Anniversary Shoots",
  "High-End Corporate Events",
  "Drone & Aerial Cinematography"
];

export default function Services() {
  const whatsappNumber = "917735791248";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="bg-kanso-black text-white py-24 px-4 md:px-8 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="reveal">
          <SectionLabel number="03" title="Expertise" dark />
        </div>
        
        <div className="mt-12 flex flex-col">
            {services.map((service, index) => (
                <div 
                    key={index} 
                    className={`flex justify-between items-center py-10 md:py-14 border-b border-white/10 group cursor-pointer transition-all duration-500 hover:px-6 reveal reveal-delay-${index % 4}`}
                >
                    <div className="flex items-center gap-6">
                      <span className="text-xs font-bold text-white/30 group-hover:text-white/100 transition-colors">0{index + 1}</span>
                      <h3 className="text-2xl md:text-5xl font-medium tracking-tight group-hover:italic group-hover:translate-x-4 transition-all duration-700">{service}</h3>
                    </div>
                    <div className="relative overflow-hidden w-10 h-10 flex items-center justify-center">
                      <Plus className="absolute text-gray-500 group-hover:translate-y-[-100%] transition-transform duration-500" />
                      <ArrowRight className="absolute text-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-20 reveal reveal-delay-4 flex flex-col items-center">
            <p className="text-gray-500 mb-8 max-w-sm text-center">Interested in a bespoke production? Let's discuss your vision.</p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-14"
            >
                <span className="relative z-10">Book a Consultation</span>
                <Plus size={20} className="relative z-10 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gray-200 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
        </div>
      </div>
    </section>
  );
}