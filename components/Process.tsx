import React from 'react';
import { Calendar, Rocket, CheckCircle2, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const STEPS = [
  {
    title: 'Book a Call',
    time: '15 min, free',
    icon: <Calendar className="w-6 h-6 md:w-8 md:h-8 text-[#00D4FF]" />,
    desc: 'Deep dive into your business goals and roadmap.',
    color: 'border-[#00D4FF]'
  },
  {
    title: 'We Build',
    time: '48-72 hours',
    icon: <Rocket className="w-6 h-6 md:w-8 md:h-8 text-[#00FFF0]" />,
    desc: 'Our neural engineering team crafts your suite.',
    color: 'border-[#00FFF0]'
  },
  {
    title: 'You Review',
    time: 'Unlimited revisions',
    icon: <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-purple-500" />,
    desc: 'Perfecting every detail until it matches your vision.',
    color: 'border-purple-500'
  },
  {
    title: 'Go Live',
    time: 'Launch day',
    icon: <Trophy className="w-6 h-6 md:w-8 md:h-8 text-[#FF6B35]" />,
    desc: 'Deployment, staff training, and neural monitoring.',
    color: 'border-[#FF6B35]'
  }
];

const Process: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 leading-none tracking-tight">
            How It <span className="gradient-text-hero">Works.</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-medium max-w-xl mx-auto opacity-70">A transparent roadmap to enterprise growth.</p>
        </div>

        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-px bg-gradient-to-r from-[#00D4FF] via-purple-500 to-[#FF6B35] opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5 }}
                className={`relative glass-premium p-6 md:p-8 rounded-[2rem] border-t-4 ${step.color} transition-all duration-500`}
              >
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-white/5 font-black text-3xl md:text-4xl select-none">
                   0{i + 1}
                </div>

                <div className="w-12 h-12 md:w-16 md:h-16 bg-black rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-xl relative z-10">
                  {step.icon}
                </div>
                
                <div className="text-[9px] font-black text-[#00D4FF] mb-2 tracking-[0.2em] uppercase">{step.time}</div>
                <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 text-white uppercase tracking-tighter">{step.title}</h3>
                <p className="text-gray-400 font-medium leading-relaxed text-xs md:text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
           <button 
             onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
             className="bg-white/5 hover:bg-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all neon-border"
           >
             Start Phase One Now
           </button>
        </div>
      </div>
    </section>
  );
};

export default Process;