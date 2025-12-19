
import React from 'react';
import { Globe, Bot, PhoneCall, Zap, Shield, BarChart3 } from 'lucide-react';

const SERVICES = [
  {
    title: 'Elite Web Systems',
    desc: 'High-performance digital foundations built for extreme scale and creative flair.',
    icon: <Globe className="w-8 h-8 text-[#bef264]" />,
    size: 'col-span-1 md:col-span-2',
    color: 'from-[#bef264]/10 to-transparent'
  },
  {
    title: 'Bespoke AI Agents',
    desc: 'Custom-trained Gemini agents that master your business knowledge.',
    icon: <Bot className="w-8 h-8 text-[#bef264]" />,
    size: 'col-span-1',
    color: 'from-[#bef264]/10 to-transparent'
  },
  {
    title: 'Autonomous Support',
    desc: 'Bilingual AI voice and chat that operates across every global time zone.',
    icon: <PhoneCall className="w-8 h-8 text-[#bef264]" />,
    size: 'col-span-1',
    color: 'from-[#bef264]/10 to-transparent'
  },
  {
    title: 'Revenue Automation',
    desc: 'Turn your workflow into a high-speed machine that generates growth while you sleep.',
    icon: <Zap className="w-8 h-8 text-[#bef264]" />,
    size: 'col-span-1 md:col-span-2',
    color: 'from-[#bef264]/10 to-transparent'
  }
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-7xl font-black mb-6 leading-none">
              The AI <span className="text-[#bef264]">Standard.</span>
            </h2>
            <p className="text-xl text-gray-400 font-medium">Bespoke capabilities designed for the creative and technical elite.</p>
          </div>
          <button 
            onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#bef264] hover:text-black transition-all"
          >
            Explore Capabilities
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={i} className={`group glass-panel rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-all duration-500 neon-border ${s.size}`}>
              <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 mb-12">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:bg-[#bef264]/20 transition-all duration-500">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tighter">{s.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed">{s.desc}</p>
              </div>

              <div className="relative z-10 flex items-center text-[10px] font-black uppercase tracking-widest text-[#bef264] group-hover:translate-x-2 transition-transform">
                Read More <span className="ml-2">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
