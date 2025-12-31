import React from 'react';
import SectionLabel from './SectionLabel';
import { Plus } from 'lucide-react';

const steps = [
    { num: 1, title: "Vision & Planning", desc: "We sit down to understand your schedule, key moments, and aesthetic preferences. Every shoot is story-boarded for maximum impact." },
    { num: 2, title: "The Production", desc: "Our elite team arrives with cinema-grade gear. We work discreetly to capture authentic emotions and spectacular visuals." },
    { num: 3, title: "Post-Production", desc: "Our editors craft your story. We perform professional color grading, sound design, and narrative editing to bring the footage to life." },
    { num: 4, title: "Final Delivery", desc: "Your memories are delivered in 4K resolution via high-speed digital galleries, customized to your viewing requirements." }
];

export default function Process() {
  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <SectionLabel number="05" title="The Lifecycle" />
      
      <div className="mb-16 max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-6">
            From first light to final export.
        </h2>
        <p className="text-gray-500 mb-8">
            Our systematic approach ensures no moment is missed and every frame is perfect.
        </p>
        <button className="bg-gray-100 text-black px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-200 transition-colors">
            Start Your Story <Plus size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((step) => (
            <div key={step.num} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative min-h-[220px]">
                <span className="absolute top-8 right-8 text-gray-300 font-medium">{step.num}</span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                    {step.desc}
                </p>
            </div>
        ))}
      </div>
    </section>
  );
}