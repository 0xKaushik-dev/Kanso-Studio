import React from 'react';
import SectionLabel from './SectionLabel';
import { Plus } from 'lucide-react';

const articles = [
    {
        title: "Mastering the Art of Natural Light Weddings",
        date: "June 12, 2025",
        desc: "How we use golden hour and ambient shadows to create that signature 'Aura' cinematic feel without intrusive lighting.",
        tag: "Cinematography",
        img: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "The Silent Gear: Why FX6 is Our Primary Choice",
        date: "June 05, 2025",
        desc: "An inside look at our production bag and why cinema-line equipment makes a difference for live events.",
        tag: "Equipment",
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Planning Your Pre-Wedding Storyboard",
        date: "May 28, 2025",
        desc: "A guide for couples to help us script a film that feels uniquely like their own relationship.",
        tag: "Production",
        img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop"
    }
];

export default function Blog() {
  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <SectionLabel number="09" title="Journal" />
      
      <div className="flex justify-between items-end mb-12 reveal">
        <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-4">Behind the Lens.</h2>
            <p className="text-gray-500 max-w-md">Our thoughts on storytelling, technology, and the fleeting moments we capture.</p>
        </div>
        <button className="hidden md:flex bg-gray-100 px-6 py-3 rounded-full text-sm font-medium items-center gap-2 hover:bg-gray-200 transition-colors">
            View All Posts <Plus size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
            <div key={i} className={`group cursor-pointer flex flex-col h-full reveal reveal-delay-${i+1}`}>
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative mb-6">
                    <img 
                        src={article.img} 
                        alt={article.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {article.tag}
                    </span>
                </div>
                <div className="flex flex-col flex-grow">
                    <span className="text-gray-400 text-sm mb-2">{article.date}</span>
                    <h3 className="text-xl font-bold mb-3 group-hover:underline decoration-1 underline-offset-4 leading-tight">{article.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.desc}</p>
                </div>
            </div>
        ))}
      </div>
      
      <div className="md:hidden mt-8 reveal">
        <button className="w-full bg-gray-100 px-6 py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
            View All Posts <Plus size={16} />
        </button>
      </div>
    </section>
  );
}