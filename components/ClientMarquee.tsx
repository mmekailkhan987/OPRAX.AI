import React from 'react';

// Using SimpleIcons CDN with the /white endpoint guarantees the icons render in white
// This avoids hotlink protection issues from Wikipedia or other sources
const LOGOS = [
  { name: 'Google', url: 'https://cdn.simpleicons.org/google/white' },
  { name: 'OpenAI', url: 'https://cdn.simpleicons.org/openai/white' },
  { name: 'Vercel', url: 'https://cdn.simpleicons.org/vercel/white' },
  { name: 'Stripe', url: 'https://cdn.simpleicons.org/stripe/white' },
  { name: 'React', url: 'https://cdn.simpleicons.org/react/white' },
  { name: 'Tailwind CSS', url: 'https://cdn.simpleicons.org/tailwindcss/white' },
  { name: 'TypeScript', url: 'https://cdn.simpleicons.org/typescript/white' },
  { name: 'Amazon AWS', url: 'https://cdn.simpleicons.org/amazonaws/white' },
];

const ClientMarquee: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 relative z-10 overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 font-sans">Powering The Next Generation</span>
      </div>
      
      <div className="flex whitespace-nowrap overflow-hidden relative w-full">
        {/* Fade gradients for smooth entrance/exit */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#000000] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#000000] to-transparent z-10" />
        
        <div className="flex animate-infinite-scroll min-w-full items-center">
          {/* Loop the list multiple times to ensure seamless infinite scroll */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex items-center justify-center px-12 md:px-16 opacity-40 hover:opacity-100 transition-opacity duration-300">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-6 md:h-8 w-auto object-contain" 
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;