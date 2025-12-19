
import React from 'react';

const BENEFITS = [
  {
    title: 'Local Team, Global Standards',
    desc: 'Based in Pakistan, delivering international-quality work with a deep understanding of global markets.',
    icon: '🇵🇰',
    size: 'col-span-1 md:col-span-2'
  },
  {
    title: 'Fixed Pricing',
    desc: 'No surprises, no hourly billing nightmares.',
    icon: '🏷️',
    size: 'col-span-1'
  },
  {
    title: 'Lightning Delivery',
    desc: 'Launched in 5-7 days, not months.',
    icon: '⚡',
    size: 'col-span-1'
  },
  {
    title: 'No Contracts',
    desc: 'Month-to-month freedom. We earn your trust daily.',
    icon: '📜',
    size: 'col-span-1 md:col-span-2'
  },
  {
    title: 'Free Hosting',
    desc: 'Enterprise Vercel hosting included free for 1 year.',
    icon: '☁️',
    size: 'col-span-1'
  },
  {
    title: 'Bilingual Support',
    desc: 'Urdu and English support across all our AI solutions.',
    icon: '🗣️',
    size: 'col-span-1'
  },
  {
    title: 'Proven Track Record',
    desc: '50+ successful deployments and counting.',
    icon: '🏆',
    size: 'col-span-1 md:col-span-2'
  },
  {
    title: '24/7 Priority Support',
    desc: 'Always available via WhatsApp and Phone.',
    icon: '🎧',
    size: 'col-span-1'
  }
];

const BentoBenefits: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10 bg-slate-900/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Why Choose <span className="gradient-text">OPRAX.AI?</span></h2>
          <p className="text-gray-400 text-lg font-medium">The digital advantage your business deserves.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {BENEFITS.map((b, i) => (
            <div key={i} className={`${b.size} glass-card p-8 rounded-[2rem] flex flex-col justify-center hover:bg-white/5 transition-all group overflow-hidden relative`}>
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{b.icon}</div>
              <h3 className="text-xl font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">{b.desc}</p>
              <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoBenefits;
