import React from 'react';
import SectionLabel from './SectionLabel';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <SectionLabel number="07" title="Testimonials" />
      
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl md:text-5xl font-medium max-w-md leading-tight">
            Success stories from our clients.
        </h2>
        
        <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors">
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5" />
            </button>
        </div>
      </div>

      <div className="w-full aspect-video md:aspect-[21/9] bg-black rounded-2xl overflow-hidden relative group">
        <img 
            src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2000&auto=format&fit=crop" 
            alt="Client Testimonial" 
            className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-6 left-6 flex gap-1">
             {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-white text-white" />)}
        </div>
        <div className="absolute top-6 right-6 text-white font-medium">4.9/5</div>

        <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center pl-1 shadow-lg">
                    <Play className="w-5 h-5 fill-black text-black" />
                </div>
            </button>
        </div>

        <div className="absolute bottom-6 left-6 text-white">
            <p className="font-bold text-lg">Alex D.</p>
            <p className="text-sm opacity-75">Creative Director</p>
        </div>
        
        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {[1,2,3,4,5,6].map((dot, i) => (
                <div key={i} className={`h-1.5 rounded-full ${i === 2 ? 'w-8 bg-white' : 'w-1.5 bg-white/40'}`}></div>
            ))}
        </div>
      </div>
    </section>
  );
}