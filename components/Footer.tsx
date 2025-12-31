import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-kanso-black text-white px-4 md:px-8 pt-20 pb-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-12">
            <div className="max-w-lg">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Aura® Production</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Ready to capture your next big chapter? Whether it's a destination wedding or a cinematic music video, <span className="text-white font-medium">we are ready to roll.</span>
                </p>
                
                <div className="mb-8">
                    <a href="mailto:shoot@aura.production" className="block text-2xl font-bold hover:text-gray-300 transition-colors">shoot@aura.production</a>
                    <p className="text-lg text-gray-400 mt-2">+1 (888) AURA-FILM</p>
                </div>

                <div>
                    <p className="text-sm font-bold mb-4">Join our visual journal for weekly inspiration.</p>
                    <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 flex-grow"
                        />
                        <button className="bg-gray-200 text-black font-bold px-6 py-3 rounded-lg hover:bg-white transition-colors">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex gap-20">
                <div className="flex flex-col gap-4">
                    {['Galleries', 'Showreel', 'Pricing', 'Process', 'Contact'].map(link => (
                        <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    ))}
                </div>
                <div className="flex flex-col gap-4">
                    {['Booking Terms', 'Licensing', 'Client Portal'].map(link => (
                        <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    ))}
                </div>
                 <div className="flex flex-col gap-4">
                    {['Instagram', 'Vimeo', 'YouTube', 'Behance'].map(link => (
                        <a key={link} href="#" className="text-gray-400 hover:text-white transition-colors">{link}</a>
                    ))}
                </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; 2025 Aura Production Agency. All rights reserved.</p>
            <p>Frames with Soul.</p>
        </div>
      </div>
    </footer>
  );
}