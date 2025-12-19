import React from 'react';

const TESTIMONIALS = [
  { name: 'Sarah M.', role: 'Fitness Studio', text: "OPRAX.AI's landing page converted 40% better than our old site. The AI chatbot paid for itself in week one.", city: 'Dubai' },
  { name: 'Dr. Ahmed K.', role: 'Dental Clinic', text: "Their AI receptionist answers 90% of our calls. We've saved $3,000/month in staff overhead.", city: 'Lahore' },
  { name: 'Michael T.', role: 'Law Firm', text: "Fast, professional, insane ROI. Can't recommend enough for any service business.", city: 'New York' },
  { name: 'Fatima R.', role: 'Salon Owner', text: "The team delivered in 48 hours as promised. Our bookings doubled instantly after launch.", city: 'Riyadh' },
  { name: 'Chris P.', role: 'Restaurant', text: "Best investment we made this year. The automation handles all our table bookings flawlessly.", city: 'Melbourne' },
  { name: 'Hassan J.', role: 'Logistics', text: "Seamless integration with our CRM. The AI voice agent sounds incredibly natural.", city: 'Karachi' },
  { name: 'Elena G.', role: 'Spa Director', text: "Absolute game changer for our business scaling. Their design sense is elite.", city: 'Doha' },
  { name: 'Marcus L.', role: 'Real Estate', text: "The quality of leads from the AI chatbot is significantly higher than our old web form.", city: 'Toronto' },
];

const Testimonials: React.FC = () => {
  // Triple columns with different speeds
  const col1 = [...TESTIMONIALS, ...TESTIMONIALS];
  const col2 = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];
  const col3 = [...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(0, 4), ...TESTIMONIALS.slice(4), ...TESTIMONIALS.slice(0, 4)];

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-6 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 leading-none tracking-tight">
            What Our <span className="gradient-text-hero">Clients Say.</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 font-medium max-w-2xl mx-auto italic opacity-70">Global scale validation from the world's most ambitious leaders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-[600px] md:h-[800px] overflow-hidden relative">
          {/* Masking Gradients */}
          <div className="absolute inset-x-0 top-0 h-32 md:h-48 bg-gradient-to-b from-[#000000] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-[#000000] to-transparent z-20 pointer-events-none" />

          {[
            { items: col1, speed: 'animate-scroll-slow' },
            { items: col2, speed: 'animate-scroll-medium' },
            { items: col3, speed: 'animate-scroll-fast' }
          ].map((col, idx) => (
            // On mobile, only show the first column to save space, or all. Let's show all but stack them (grid-cols-1 handles stacking, but infinite scroll might look weird if stacked).
            // Actually, for mobile, showing just one scrolling column often looks better.
            <div key={idx} className={`flex flex-col gap-6 md:gap-8 ${col.speed} ${idx > 0 ? 'hidden md:flex' : 'flex'}`}>
              {col.items.map((t, i) => (
                <div key={i} className="glass-premium p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] neon-border bg-white/[0.02] group shrink-0">
                  <div className="flex text-[#00D4FF] mb-4 md:mb-6 text-xs md:text-sm">
                    {'★'.repeat(5)}
                  </div>
                  <p className="text-gray-200 font-semibold italic leading-relaxed mb-6 md:mb-10 text-sm md:text-lg">"{t.text}"</p>
                  <div className="flex items-center gap-4 md:gap-5">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] rounded-full flex items-center justify-center font-black text-white text-base md:text-lg shadow-2xl">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="font-black text-white text-sm md:text-lg">{t.name}</div>
                      <div className="text-[9px] md:text-[10px] font-bold text-[#00D4FF] uppercase tracking-[0.2em]">{t.role} • {t.city}</div>
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

export default Testimonials;