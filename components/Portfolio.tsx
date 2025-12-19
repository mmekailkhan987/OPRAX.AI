import React from 'react';
import { motion } from 'framer-motion';

const SHOWCASES = [
  {
    title: 'Premium Landing Pages',
    subtitle: 'Convert Visitors Into Customers',
    metric: '• 3X Higher Conversion Rates',
    desc: 'Stunning, fast-loading websites that turn browsers into buyers. Mobile-responsive, SEO-optimized, delivered in 48 hours.',
    badge: 'WEBSITE',
    badgeColor: 'text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/20',
    glowColor: 'group-hover:shadow-[0_0_50px_rgba(0,212,255,0.2)]',
    // Image: Sleek Dashboard / Web Interface
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', 
    accent: '#00D4FF'
  },
  {
    title: 'AI Website Chatbot',
    subtitle: 'Answer Questions 24/7',
    metric: '• Captures 85% More Leads',
    desc: 'Never miss a customer again. AI answers questions, books appointments, and captures leads while you sleep.',
    badge: 'AI AUTOMATION',
    badgeColor: 'text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/20',
    glowColor: 'group-hover:shadow-[0_0_50px_rgba(168,85,247,0.2)]',
    // Image: Artificial Intelligence / Digital Brain Node
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800',
    accent: '#A855F7'
  },
  {
    title: 'AI Phone Receptionist',
    subtitle: 'Automate Every Call',
    metric: '• Handle 1000+ Calls/Month',
    desc: 'AI answers your phones, books appointments, takes orders, and transfers complex calls to you. Never miss a customer call again.',
    badge: 'VOICE AI',
    badgeColor: 'text-[#FF6B35] bg-[#FF6B35]/10 border-[#FF6B35]/20',
    glowColor: 'group-hover:shadow-[0_0_50px_rgba(255,107,53,0.2)]',
    // Image: Digital Sound Wave / Voice Visualization
    img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800',
    accent: '#FF6B35'
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 leading-none tracking-tight">
            Real Results That <span className="gradient-text-hero">Matter.</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto font-medium opacity-70">
            See how we transform businesses with AI-powered solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SHOWCASES.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`group relative glass-premium rounded-[1.5rem] overflow-hidden border border-white/5 transition-all duration-500 ${item.glowColor} flex flex-col h-full bg-gradient-to-b from-[#0A0E27]/80 to-[#000000]/80`}
            >
              {/* Image Section */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] to-transparent z-10 opacity-90" />
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-80" 
                />
                <div className={`absolute top-4 right-4 md:top-5 md:right-5 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest border backdrop-blur-md z-20 ${item.badgeColor}`}>
                  {item.badge}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 -mt-8 md:-mt-10">
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tight leading-none">{item.title}</h3>
                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">{item.subtitle}</p>
                
                <div className="mb-4 md:mb-5" style={{ color: item.accent }}>
                   <p className="font-black text-[10px] md:text-[11px] uppercase tracking-widest animate-pulse">{item.metric}</p>
                </div>

                <p className="text-gray-400 text-xs md:text-sm leading-relaxed flex-grow font-medium">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
            <button 
                onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
                className="bg-[#00D4FF] text-black px-8 py-3 md:px-10 md:py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_rgba(0,212,255,0.3)]"
            >
                Start Your Project Today
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;