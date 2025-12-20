import React from 'react';

// Text-based companies for guaranteed visibility and premium aesthetic
const COMPANIES = [
  "GOOGLE",
  "OPENAI",
  "NIKE",
  "AMAZON",
  "FIGMA",
  "RIOT GAMES",
  "VERCEL",
  "STRIPE",
  "ADIDAS",
  "ROGUE"
];

const ClientMarquee: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 relative z-10 overflow-hidden bg-[#050714]">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 font-sans">Powering The Next Generation</span>
      </div>
      
      <div className="flex whitespace-nowrap overflow-hidden relative w-full">
        {/* Fade gradients for smooth entrance/exit */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[#050714] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[#050714] to-transparent z-20 pointer-events-none" />
        
        {/* 
           Infinite Scroll Animation:
           We duplicate the list 4 times. The animation translates -50%.
           At -50%, we have scrolled past exactly half the width (2 sets).
           The view then instantly snaps back to 0%, where set 1 is visible, matching set 3.
        */}
        <div 
          className="flex animate-infinite-scroll min-w-full items-center"
          style={{ 
            animationDuration: '5s',
            willChange: 'transform',
            backfaceVisibility: 'hidden'
          }} 
        >
          {[...COMPANIES, ...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, i) => (
            <div key={i} className="flex items-center justify-center px-12 md:px-20">
              <span className="text-3xl md:text-5xl font-black text-white/20 uppercase tracking-tighter hover:text-white transition-colors duration-500 cursor-default font-sans whitespace-nowrap transform translate-z-0">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;