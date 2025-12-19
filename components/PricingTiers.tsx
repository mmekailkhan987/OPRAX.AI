
import React from 'react';

const PLANS = [
  {
    name: 'Standard Engine',
    price: '$499',
    localPrice: 'Rs. 140,000',
    desc: 'Perfect for established creators and growth startups.',
    features: ['Custom AI Architecture', '7-Day Fast Delivery', 'Bilingual AI Core', 'Performance Optimized', 'Free Enterprise Hosting', 'Post-Launch Priority'],
    cta: 'Select Standard',
    color: 'border-white/10'
  },
  {
    name: 'Growth Suite',
    price: '$999',
    localPrice: 'Rs. 280,000',
    subscription: '$99/mo',
    desc: 'The complete AI ecosystem for multi-market scale.',
    features: ['Everything in Standard', 'Active AI Sales Agents', 'Lead Capture Engine', 'Custom Analytics Suite', 'Monthly Strategy Ops', 'Priority 24/7 Access'],
    cta: 'Choose Growth',
    popular: true,
    color: 'border-[#bef264]'
  },
  {
    name: 'Enterprise Apex',
    price: 'Custom',
    localPrice: 'Contact Sales',
    desc: 'Bespoke automation for global enterprises.',
    features: ['Full Voice AI Systems', 'Custom CRM Integration', 'Advanced Model Training', 'Dedicated Success Ops', 'Infinite Scalability', 'On-Site Strategy'],
    cta: 'Book Discovery',
    color: 'border-white/5'
  }
];

const PricingTiers: React.FC = () => {
  return (
    <section id="pricing" className="py-32 px-6 relative z-10 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-none">
            Scale with <span className="text-[#bef264]">Precision.</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto">Transparent investments for high-impact results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, i) => (
            <div key={i} className={`relative glass-panel rounded-[3rem] p-12 flex flex-col h-full transition-all duration-500 border-2 ${plan.color} ${plan.popular ? 'bg-white/[0.02]' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#bef264] text-black px-6 py-2 rounded-full text-[10px] font-black tracking-widest uppercase shadow-2xl shadow-[#bef264]/20">
                  Best Value ⭐
                </div>
              )}
              
              <div className="mb-10 text-center">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">{plan.name}</h3>
                <p className="text-gray-500 text-sm font-semibold italic">{plan.desc}</p>
              </div>

              <div className="mb-12 text-center">
                <div className="text-6xl font-black text-white mb-2">{plan.price}</div>
                <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{plan.localPrice}</div>
                {plan.subscription && <div className="mt-4 text-[10px] font-black text-[#bef264] tracking-widest underline decoration-wavy">SUBSCRIPTION: {plan.subscription}</div>}
              </div>

              <ul className="space-y-5 mb-12 flex-grow border-t border-white/5 pt-12">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center space-x-3 text-sm font-bold text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bef264] flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
                className={`w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all ${plan.popular ? 'bg-[#bef264] text-black hover:bg-white' : 'bg-white/5 hover:bg-white/10'}`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
