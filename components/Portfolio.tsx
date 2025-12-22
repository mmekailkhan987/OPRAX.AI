import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const SHOWCASES = [
  {
    title: 'Bright Smile Dental',
    subtitle: 'Live AI Integration Demo',
    metric: '• Intelligent Chat & Booking',
    desc: 'A fully functional live demo featuring a high-performance landing page and a custom AI agent that handles patient inquiries and appointments in real-time.',
    badge: 'LIVE DEMO',
    badgeColor: 'text-[#bef264] bg-[#bef264]/10 border-[#bef264]/20',
    glowColor: 'group-hover:shadow-[0_0_50px_rgba(190,242,100,0.2)]',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800', 
    accent: '#bef264',
    link: 'https://bright-smile-dental-diab.vercel.app'
  },
  {
    title: 'Apex Fitness',
    subtitle: 'Premium Gym Experience',
    metric: '• High-Impact Design',
    desc: 'A high-octane digital experience designed for elite fitness brands. Features seamless member acquisition flows and premium dark-mode aesthetics.',
    badge: 'LIVE DEMO',
    badgeColor: 'text-[#00D4FF] bg-[#00D4FF]/10 border-[#00D4FF]/20',
    glowColor: 'group-hover:shadow-[0_0_50px_rgba(0,212,255,0.2)]',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    accent: '#00D4FF',
    link: 'https://apex-fitness-kappa.vercel.app'
  },
  {
    title: 'AI Phone Receptionist',
    subtitle: 'Automate Every Call',
    metric: '• Handle 1000+ Calls/Month',
    desc: 'AI answers your phones, books appointments, takes orders, and transfers complex calls to you. Never miss a customer call again.',
    badge: 'VOICE AI',
    badgeColor: 'text-[#FF6B35] bg-[#FF6B35]/10 border-[#FF6B35]/20',
    glowColor: 'group-hover:shadow-[0_0_50px_rgba(255,107,53,0.2)]',
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
              onClick={() => item.link && window.open(item.link, '_blank')}
              className={`group relative glass-premium rounded-[1.5rem] overflow-hidden border border-white/5 transition-all duration-500 ${item.glowColor} flex flex-col h-full bg-gradient-to-b from-[#0A0E27]/80 to-[#000000]/80 ${item.link ? 'cursor-pointer' : ''}`}
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
                {item.link && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-30">
                        <div className="bg-[#bef264] text-black px-4 py-2 rounded-full font-black text-xs flex items-center gap-2 transform scale-90 group-hover:scale-100 transition-transform">
                            View Live Demo <ExternalLink className="w-3 h-3" />
                        </div>
                    </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20 -mt-8 md:-mt-10">
                <h3 className="text-xl md:text-2xl font-black text-white mb-1 uppercase tracking-tight leading-none group-hover:text-[#bef264] transition-colors">{item.title}</h3>
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