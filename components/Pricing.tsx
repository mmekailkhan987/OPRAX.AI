import React from 'react';
import { motion } from 'framer-motion';

const PLANS = [
  {
    name: 'Standard Launch',
    price: '$900',
    desc: 'Perfect for startups and creative portfolios needing speed.',
    features: ['Premium landing page', 'Mobile responsive', 'WhatsApp integration', 'Custom Domain', '48-hour delivery', '30-day support'],
    cta: 'Get Started',
    color: 'border-white/10'
  },
  {
    name: 'Growth Suite',
    price: '$1,500',
    subscription: '$300/mo',
    desc: 'The complete AI toolkit for scaling businesses in 72 hours.',
    features: ['Everything in Standard', 'AI Website Chatbot', 'Lead capture system', 'Custom Domain', 'First month free', '60-day support'],
    cta: 'Choose Growth',
    popular: true,
    color: 'border-[#00D4FF]'
  },
  {
    name: 'Enterprise AI',
    price: '$2,500',
    subscription: '$800/mo',
    desc: 'Bespoke high-performance automation for multi-location brands.',
    features: ['Everything in Growth', 'AI Voice Receptionist', 'Full automation setup', 'Custom Domain', '2 months free', '90-day priority support'],
    cta: 'Go Enterprise',
    color: 'border-[#FF6B35]/30'
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-[#050714]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 leading-none tracking-tight">
            Transparent Pricing,<br />
            <span className="gradient-text-hero">Maximum ROI.</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-medium max-w-2xl mx-auto opacity-70 italic">Custom packages available—let's talk about your unique scale.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.03 }}
              className={`relative glass-premium rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col h-full transition-all duration-500 border-2 ${plan.color} ${plan.popular ? 'neon-glow-blue bg-white/[0.02]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-[#00D4FF] text-black px-6 md:px-8 py-1.5 md:py-2 rounded-full text-[9px] md:text-[10px] font-black tracking-widest uppercase shadow-2xl">
                  MOST POPULAR ⭐
                </div>
              )}
              
              <div className="mb-6 md:mb-8 text-center">
                <h3 className="text-xl md:text-2xl font-black mb-2 uppercase tracking-tighter text-white">{plan.name}</h3>
                <p className="text-gray-500 text-xs md:text-sm font-semibold italic">{plan.desc}</p>
              </div>

              <div className="mb-6 md:mb-10 text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{plan.price}</div>
                {plan.subscription && <div className="mt-2 md:mt-3 text-[9px] md:text-[10px] font-black text-[#00D4FF] tracking-[0.3em] uppercase">Maintenance: {plan.subscription}</div>}
              </div>

              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow border-t border-white/5 pt-6 md:pt-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center space-x-3 text-xs md:text-sm font-bold text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] shadow-[0_0_8px_#00D4FF] shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
                className={`w-full py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${plan.popular ? 'bg-[#00D4FF] text-black hover:bg-white' : 'bg-white/5 hover:bg-white/10'}`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;