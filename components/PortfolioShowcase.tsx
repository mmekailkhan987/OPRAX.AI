
import React from 'react';

const CASES = [
  {
    title: 'Nonna\'s Trattoria',
    tag: 'Hospitality',
    metric: '45% Reservation Increase',
    color: 'from-orange-500 to-red-600',
    img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'IronCore Labs',
    tag: 'Fitness Tech',
    metric: '$200k ARR Boost',
    color: 'from-blue-500 to-cyan-600',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Lumina Skin Care',
    tag: 'E-commerce',
    metric: '90% CS Automation',
    color: 'from-pink-500 to-rose-600',
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800'
  }
];

const PortfolioShowcase: React.FC = () => {
  return (
    <section id="portfolio" className="py-32 px-6 relative z-10 bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
            Crafting Impressions <span className="gradient-text">That Last.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">Real-world results for global agencies and creative businesses.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CASES.map((c, i) => (
            <div key={i} className="group glass-panel rounded-[3rem] overflow-hidden relative cursor-pointer hover:glow-purple transition-all duration-700">
              <div className="relative h-80 overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {c.tag}
                </div>
              </div>
              
              <div className="p-10 relative z-10 bg-slate-950/40 backdrop-blur-md border-t border-white/5">
                <h3 className="text-3xl font-black mb-4 group-hover:text-cyan-400 transition-colors">{c.title}</h3>
                <div className="flex items-center text-green-400 font-black text-xs uppercase tracking-widest">
                  <span className="mr-3">⚡ IMPACT:</span> {c.metric}
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
