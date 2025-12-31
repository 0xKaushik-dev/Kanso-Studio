import React, { useState } from 'react';
import SectionLabel from './SectionLabel';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        q: "What is your typical delivery timeline?",
        a: "We deliver social media teasers within 48 hours. The final high-resolution photo gallery is typically ready within 14-21 days, and cinematic films are delivered within 4-6 weeks depending on the complexity of the project."
    },
    {
        q: "Do you travel for destination weddings?",
        a: "Absolutely. We have covered events in over 24 countries. We handle all our own travel logistics to make the process as seamless as possible for our clients."
    },
    {
        q: "What gear do you use for high-end events?",
        a: "We exclusively use Sony FX6 and A7S III cinema-line cameras, DJI Mavic 3 Cine drones, and a suite of GM lenses to ensure the highest possible image quality and low-light performance."
    },
    {
        q: "Can we customize our production package?",
        a: "Yes. While we offer standard collections, we often build bespoke packages that include multiple days of coverage, specific edit lengths, and custom heirloom albums."
    },
    {
        q: "How do we secure our date?",
        a: "A 30% retainer and a signed production agreement are required to officially book your date. We operate on a first-come, first-served basis."
    }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 w-full max-w-7xl mx-auto">
      <SectionLabel number="08" title="FAQs" />
      
      <div className="mb-12 reveal">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">Planning Your Event?</h2>
        <p className="text-gray-500 mb-8 max-w-md">Everything you need to know about our production process and how we capture your most important moments.</p>
        <a href="mailto:shoot@aura.production" className="bg-gray-100 px-6 py-3 rounded-full text-sm font-medium inline-flex items-center gap-2 hover:bg-gray-200 transition-colors">
            Ask a Specific Question <Plus size={16} />
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden reveal">
                <button 
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                >
                    <span className="font-medium text-lg">{index + 1}. {faq.q}</span>
                    {openIndex === index ? <Minus className="text-gray-400" /> : <Plus className="text-gray-400" />}
                </button>
                {openIndex === index && (
                    <div className="px-6 pb-6 text-gray-500 leading-relaxed animate-in fade-in slide-in-from-top-2">
                        {faq.a}
                    </div>
                )}
            </div>
        ))}
      </div>
    </section>
  );
}