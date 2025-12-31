import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function StickyCTA() {
  // WhatsApp number for Aura Production
  const whatsappNumber = "917735791248";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-kanso-black text-white font-medium text-sm py-2.5 px-6 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:scale-105 active:scale-95 transition-all border border-white/10 flex items-center gap-3 group"
      >
        <MessageSquare className="w-4 h-4 text-white" />
        <span className="tracking-tight whitespace-nowrap">Contact Us</span>
      </a>
    </div>
  );
}