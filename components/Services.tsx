import React from 'react';
import { Laptop, Bot, PhoneIncoming } from 'lucide-react';
import { motion } from 'framer-motion';

const SERVICES = [
  {
    title: 'Premium Landing Pages',
    icon: <Laptop className="w-8 h-8 md:w-10 md:h-10 text-[#00D4FF]" />,
    desc: 'Stunning, conversion-optimized websites that turn visitors into customers.',
    reveal: '48-hour delivery\nMobile responsive\nSEO optimized',
    color: 'from-[#00D4FF]/20 to-transparent'
  },
  {
    title: 'AI Website Chatbot',
    icon: <Bot className="w-8 h-8 md:w-10 md:h-10 text-[#00FFF0]" />,
    desc: 'Never miss a lead—AI answers questions and captures contacts 24/7.',
    reveal: 'Learns your business\nHandles FAQs\nBooks appointments',
    color: 'from-[#00FFF0]/20 to-transparent'
  },
  {
    title: 'AI Voice Receptionist',
    icon: <PhoneIncoming className="w-8 h-8 md:w-10 md:h-10 text-[#FF6B35]" />,
    desc: 'Automate phone calls, bookings, and orders—never miss a customer again.',
    reveal: 'Natural voice\nMulti-language\nIntegrates with tools',
    color: 'from-[#FF6B35]/20 to-transparent'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 leading-none">
            What We <span className="gradient-text-hero">Do.</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-medium max-w-2xl mx-auto opacity-70">Engineering the future of autonomous business.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }}
              className="group glass-premium rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 relative overflow-hidden flex flex-col items-center text-center transition-all duration-500 neon-border min-h-[350px] md:min-h-[420px]"
            >
              {/* Animated Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Glowing Icon Container */}
              <div className="relative z-10 mb-6 md:mb-8 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/5 flex items-center justify-center shadow-2xl group-hover:bg-white/10 group-hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] transition-all duration-500 border border-white/5">
                {s.icon}
              </div>

              <h3 className="relative z-10 text-xl md:text-2xl font-black mb-3 md:mb-4 tracking-tighter text-white uppercase">{s.title}</h3>
              
              {/* Content Container */}
              <div className="relative z-10 w-full flex-grow flex items-center justify-center mb-6 md:mb-8">
                {/* Default Desc */}
                <p className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium leading-relaxed text-sm md:text-base transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  {s.desc}
                </p>

                {/* Reveal Text */}
                <div className="absolute inset-0 flex items-center justify-center flex-col space-y-2 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                  {s.reveal.split('\n').map((line, idx) => (
                    <span key={idx} className="text-[#00D4FF] font-black text-xs md:text-sm uppercase tracking-widest block bg-black/20 px-2 py-1 rounded">
                      {line}
                    </span>
                  ))}
                </div>
                
                {/* Invisible spacer */}
                <p className="invisible pointer-events-none text-sm md:text-base leading-relaxed">{s.desc}</p>
              </div>

              {/* Button */}
              <div className="mt-auto relative z-20">
                <button className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-[#00D4FF] transition-colors animate-pulse py-2 px-4 rounded-full hover:bg-white/5">
                  Explore Capabilities →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;