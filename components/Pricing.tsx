import React, { useState } from 'react';
import SectionLabel from './SectionLabel';
import { Check, Plus } from 'lucide-react';

export default function Pricing() {
  const [collection, setCollection] = useState<'Standard' | 'Luxury'>('Standard');

  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <SectionLabel number="06" title="Event Collections" />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 reveal">
        <p className="text-gray-500 max-w-sm mb-6 md:mb-0">
             Transparent pricing for world-class production. Choose the collection that fits your celebration.
        </p>
        
        <div className="bg-gray-100 p-1 rounded-full flex">
            <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${collection === 'Standard' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
                onClick={() => setCollection('Standard')}
            >
                Photography
            </button>
            <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${collection === 'Luxury' ? 'bg-black text-white shadow-md' : 'text-gray-500 hover:text-black'}`}
                onClick={() => setCollection('Luxury')}
            >
                Full Cinema
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal reveal-delay-1">
          <div className="bg-black text-white rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col h-full border border-white/5">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Standard Gallery</h3>
                <span className="text-gray-500 font-serif">Aura®</span>
            </div>
            
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl md:text-5xl font-bold">$1,800</span>
                <span className="text-gray-400">/event</span>
            </div>

            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                Perfect for intimate weddings, haldi ceremonies, or small corporate gatherings. Focuses on high-fidelity photography and candids.
            </p>

            <div className="space-y-4 mb-12 flex-grow">
                <h4 className="text-sm text-gray-500 uppercase tracking-wider mb-4">Included:</h4>
                {[
                    "8 Hours of Continuous Coverage",
                    "Lead Photographer + Assistant",
                    "400+ Hand-Edited High-Res Photos",
                    "Online Private Gallery (1 Year)",
                    "Social Media Teaser within 48h",
                    "High-Speed Digital Delivery"
                ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-black stroke-[3]" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <button className="w-full bg-white text-black py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                Book Now <Plus size={18} />
            </button>
          </div>

          <div className="bg-gray-50 text-black rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col h-full border border-gray-100">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Diamond Cinema</h3>
                <span className="text-gray-400 font-serif">Premier®</span>
            </div>
            
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl md:text-5xl font-bold">$4,500</span>
                <span className="text-gray-500">/event</span>
            </div>

            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                The ultimate production package. Full video and photo coverage using cinema-line gear and drone cinematography.
            </p>

            <div className="space-y-4 mb-12 flex-grow">
                <h4 className="text-sm text-gray-400 uppercase tracking-wider mb-4">Everything in Standard plus:</h4>
                {[
                    "Full Day Coverage (Unlimited)",
                    "Cinematography Team (3 members)",
                    "4K Drone Aerial Footage",
                    "Cinematic Highlight Film (5-7 min)",
                    "Full Length Documentary Film",
                    "Custom Leather Photo Album",
                    "Pre-Wedding Shoot Included"
                ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-white stroke-[3]" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                    </div>
                ))}
            </div>

            <button className="w-full bg-black text-white py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                Reserve Date <Plus size={18} />
            </button>
          </div>
      </div>
    </section>
  );
}