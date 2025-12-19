
import React from 'react';

const TESTIMONIALS = [
  { name: 'James Wilson', role: 'CEO, Wilson Growth', text: 'OPRAX scaled our New York operations with AI automations that actually work. 300% ROI in 2 months.', city: 'New York, USA' },
  { name: 'Fatemah Al-Sayed', role: 'Founder, Luxe Gems', text: 'The bilingual AI assistant is magical. It handles 95% of our inquiries across the Middle East perfectly.', city: 'Dubai, UAE' },
  { name: 'Hans Muller', role: 'Director, TechCore', text: 'Flawless engineering. The delivery speed is unmatched in the European market. Elite service.', city: 'Berlin, Germany' },
  { name: 'Marcus R.', role: 'Founder, DevLab', text: 'Best AI partner we’ve worked with. Their integration with Gemini is seamless and powerful.', city: 'Austin, USA' },
  { name: 'Adv. Ahmed Raza', role: 'Partner, LegalLink', text: 'Professional, sharp, and results-driven. They transformed our digital presence in just 7 days.', city: 'Islamabad, Pakistan' },
  { name: 'Sana Khalid', role: 'Head of Ops, Global Logistics', text: 'Reduced our operational overhead by 60% with custom AI voice agents. Exceptional impact.', city: 'Abu Dhabi, UAE' },
  { name: 'David Chen', role: 'CTO, OmniScale', text: 'The interface performance is world-class. Our users reported a 2x increase in speed instantly.', city: 'Seattle, USA' },
  { name: 'Ayesha Malik', role: 'Manager, Spice Garden', text: 'Never missed a lead since we integrated the OPRAX chatbot. It truly is 24/7 intelligence.', city: 'Karachi, Pakistan' },
];

const TestimonialCloud: React.FC = () => {
  // Duplicate for seamless infinite scroll
  const col1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const col2 = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];
  const col3 = [...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(0, 4)];

  return (
    <section id="testimonials" className="py-32 px-6 relative z-10 overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-none tracking-tight">
            Global <span className="text-[#bef264]">Validation.</span>
          </h2>
          <p className="text-xl text-gray-400 font-medium max-w-2xl mx-auto italic opacity-70">The world's most ambitious brands rely on our neural expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[700px] overflow-hidden relative">
          {/* Masking Gradients */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#030303] to-transparent z-20" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#030303] to-transparent z-20" />

          {[col1, col2, col3].map((col, idx) => (
            <div key={idx} className={`flex flex-col gap-8 ${idx === 0 ? 'animate-vertical-1' : idx === 1 ? 'animate-vertical-2' : 'animate-vertical-3'}`}>
              {col.map((t, i) => (
                <div key={i} className="glass-panel p-10 rounded-[2.5rem] neon-border bg-white/[0.02] group shrink-0">
                  <div className="flex text-[#bef264] mb-6 text-sm">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-200 font-semibold italic leading-relaxed mb-8 text-lg">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/5 rounded-full border border-white/10 flex items-center justify-center font-black text-[#bef264] text-sm shadow-inner">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-black text-white">{t.name}</div>
                      <div className="text-[10px] font-bold text-[#bef264] uppercase tracking-widest">{t.role}, {t.city}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCloud;
