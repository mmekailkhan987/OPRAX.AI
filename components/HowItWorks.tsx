
import React from 'react';

const STEPS = [
  {
    title: 'Discovery & Consultation',
    day: 'Day 0',
    icon: '🤝',
    duration: '30-45 mins',
    desc: 'We dive deep into your business goals, target audience, and competition to map out your success path.',
    color: 'border-blue-500'
  },
  {
    title: 'Design & Planning',
    day: 'Day 1-2',
    icon: '🎨',
    duration: '2 days',
    desc: 'Visual mockups, color palettes, and UX flows. We get your feedback and iterate until it is perfect.',
    color: 'border-purple-500'
  },
  {
    title: 'Development & Integration',
    day: 'Day 3-5',
    icon: '💻',
    duration: '3 days',
    desc: 'High-performance coding, AI agent training, and API connections. Your vision comes to life.',
    color: 'border-cyan-500'
  },
  {
    title: 'Testing & Refinement',
    day: 'Day 6',
    icon: '🔍',
    duration: '1 day',
    desc: 'Rigorous QA testing, speed optimization, and cross-browser checks to ensure a flawless launch.',
    color: 'border-green-500'
  },
  {
    title: 'Launch & Support',
    day: 'Day 7+',
    icon: '🚀',
    duration: 'Forever',
    desc: 'DNS setup, SSL deployment, and staff training. We monitor your site 24/7 to ensure peak performance.',
    color: 'border-orange-500'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Your Journey From <span className="gradient-text">Idea to Launch</span></h2>
          <p className="text-xl text-gray-400 italic font-medium">A transparent, rapid process that delivers enterprise results in days.</p>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-orange-500 opacity-20" />
          
          <div className="grid lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <div key={i} className={`relative glass-card p-8 rounded-3xl border-t-4 ${step.color} hover:translate-y-[-10px] transition-transform duration-500`}>
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-3xl mb-6 shadow-xl mx-auto lg:mx-0">
                  {step.icon}
                </div>
                <div className="text-xs font-black text-cyan-400 mb-2 tracking-widest uppercase">{step.day}</div>
                <h3 className="text-xl font-black mb-4">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed font-medium mb-4">{step.desc}</p>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center">
                   ⏱️ {step.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
