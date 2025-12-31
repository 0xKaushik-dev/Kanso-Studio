import React from 'react';
import SectionLabel from './SectionLabel';
import { Plus, Zap, Rocket, Clock, Star } from 'lucide-react';

export default function WhyUs() {
  return (
    <section className="py-24 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <SectionLabel number="02" title="Why us" />
      
      <div className="mb-20 reveal">
        <h2 className="text-4xl md:text-6xl font-medium leading-[1.1] max-w-4xl tracking-tighter">
            We cut through noise to capture shots that are <span className="text-gray-300 italic serif">breathtaking</span>, authentic, and timeless.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Feature Card */}
        <div className="w-full h-[600px] rounded-3xl relative overflow-hidden text-white flex flex-col justify-end p-10 reveal group">
            <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop" 
                alt="Cinema Camera Detail" 
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 group-hover:scale-110 transition-transform duration-[3000ms]"
            />
            <div className="relative z-10 w-full">
                <h3 className="text-3xl font-medium mb-10 font-serif max-w-sm">Cinema Grade Equipment for Authentic Memories.</h3>
                <div className="flex justify-between items-center w-full">
                    <span className="text-xs font-bold tracking-[0.4em] opacity-40">EST. 2025</span>
                    <button className="bg-white text-black px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-black hover:text-white transition-all duration-500 cursor-pointer">
                        Book a Shoot <Plus size={16} />
                    </button>
                </div>
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000"></div>
        </div>

        <div className="flex flex-col gap-8">
            {/* Benefits List */}
            <div className="bg-gray-50 p-10 rounded-3xl flex flex-col justify-center border border-gray-100 reveal reveal-delay-1">
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-gray-400 mb-8">Production Standards</h4>
                <ul className="space-y-6">
                    {[
                        "Cinema-Grade 4K/8K Native Output",
                        "Same-Day Edit High-Intensity Highlights",
                        "Professional Narrative Color Grading",
                        "High-Fidelity Spatial Audio Capture",
                        "Archival Quality Digital Galleries"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 group">
                            <div className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                                <div className="w-1.5 h-1.5 bg-black rounded-full group-hover:bg-white"></div>
                            </div>
                            <span className="font-medium text-lg text-gray-800 tracking-tight">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Service Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal reveal-delay-2">
                {[
                    { title: "Turnaround", desc: "14-day photos, 30-day films.", icon: Zap },
                    { title: "Reach", desc: "Global coverage, any continent.", icon: Rocket },
                    { title: "Service", desc: "Full planning to print.", icon: Clock },
                ].map((card, i) => (
                    <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col gap-3 hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500">
                        <card.icon className="w-5 h-5 text-gray-400" />
                        <h3 className="font-bold text-sm uppercase tracking-wider">{card.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed font-medium">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}