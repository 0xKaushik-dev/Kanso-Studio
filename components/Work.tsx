import React from 'react';
import SectionLabel from './SectionLabel';

const projects = [
  { name: "Luxe Wedding", category: "Destination Cinema", year: "2025", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" },
  { name: "Neon Nights", category: "Music Video Production", year: "2025", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" },
  { name: "Golden Haldi", category: "Traditional Coverage", year: "2024", img: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?q=80&w=800&auto=format&fit=crop" },
  { name: "Urban Gala", category: "Corporate Event", year: "2024", img: "https://images.unsplash.com/photo-1505373633560-fa9a2f64603c?q=80&w=800&auto=format&fit=crop" },
  { name: "Eternal Vows", category: "Post-Wedding Shoot", year: "2023", img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop" },
  { name: "First Light", category: "Pre-Wedding Film", year: "2023", img: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop" },
];

export default function Work() {
  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <div className="reveal">
        <SectionLabel number="02" title="Portfolio" />
      </div>
      
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 reveal">
        <p className="text-gray-500 max-w-md">
            Our most recent captures. Each project is a testament to our commitment to high-end visual storytelling.
        </p>
        <button className="mt-6 md:mt-0 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors flex items-center gap-2 w-fit">
            View All Captures <span>+</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
            <div key={index} className={`group cursor-pointer reveal reveal-delay-${(index % 2) + 1}`}>
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden mb-4">
                    <img 
                        src={project.img} 
                        alt={project.name} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                </div>
                <div className="flex justify-between items-end border-b border-gray-100 pb-2">
                    <div>
                        <h3 className="text-xl font-medium">{project.name}</h3>
                        <p className="text-sm text-gray-500">{project.category}</p>
                    </div>
                    <span className="text-sm text-gray-400">{project.year}</span>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}