import React, { useState } from 'react';

const FAQS = [
  { q: "How much does a website cost?", a: "Our projects start from $180 (Rs. 50k) for a high-converting landing page. Complete packages with AI chatbots start at $370 (Rs. 100k). Pricing is transparent with no hidden fees." },
  { q: "How long does delivery take?", a: "We deliver most websites in 5-7 business days. Complex enterprise solutions with full AI integration take 10-14 days. We value speed without sacrificing quality." },
  { q: "Do I need to pay for hosting?", a: "No! Every OPRAX website includes FREE enterprise-grade hosting on Vercel for 1 year (worth Rs. 10k/mo). Fast, secure, and always online." },
  { q: "Can the AI Chatbot speak Urdu?", a: "Yes! Our AI systems are bilingual and can naturally converse in both Urdu and English, ensuring you capture 100% of your market." },
  { q: "What is your payment structure?", a: "We require 50% advance to initiate the project and the remaining 50% upon successful delivery and your 100% satisfaction." }
];

const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 px-4 md:px-6 relative z-10 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4">Common <span className="gradient-text">Questions</span></h2>
          <p className="text-sm md:text-base text-gray-400 font-medium">Everything you need to know about working with OPRAX.</p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass-card rounded-2xl md:rounded-3xl overflow-hidden transition-all">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 md:p-8 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-base md:text-lg font-black tracking-tight">{faq.q}</span>
                <span className={`text-xl md:text-2xl transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {open === i && (
                <div className="px-6 pb-6 md:px-8 md:pb-8 text-sm md:text-base text-gray-400 font-medium leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;