import React from 'react';
import { Plus } from 'lucide-react';

export default function Header() {
  // WhatsApp number for Aura Production
  const whatsappNumber = "917735791248";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-4 py-4 md:px-8 bg-white/80 backdrop-blur-md flex justify-between items-center border-b border-gray-100">
        <div className="flex items-center gap-2">
            <span className="font-serif text-xl font-bold tracking-tight">Aura® Production</span>
            <span className="text-xs text-gray-400 ml-2 hidden sm:block">22 May, 09:15 am</span>
        </div>
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
          aria-label="Contact via WhatsApp"
        >
            <Plus className="w-5 h-5 text-gray-600" />
        </a>
    </header>
  );
}