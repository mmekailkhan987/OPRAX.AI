import React from 'react';
import Logo from './Logo';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-black border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-4 mb-6 md:mb-10">
            <Logo className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
              OPRAX<span className="text-[#bef264]">.AI</span>
            </span>
          </div>
          <p className="text-gray-500 text-xs md:text-sm font-bold leading-relaxed mb-6 md:mb-10 max-w-xs">
            Architecting the future of autonomous business operations. Premium engineering for high-performance brands worldwide.
          </p>
          <div className="flex space-x-4 md:space-x-5">
            {[
              { icon: '𝕏', color: 'hover:bg-white' },
              { icon: 'in', color: 'hover:bg-[#00D4FF]' },
              { icon: 'ig', color: 'hover:bg-[#8B5CF6]' },
              { icon: 'wa', color: 'hover:bg-[#bef264]' }
            ].map((s, i) => (
              <button key={i} className={`w-10 h-10 md:w-11 md:h-11 rounded-2xl bg-white/5 ${s.color} hover:text-black flex items-center justify-center text-sm font-black text-gray-400 transition-all hover:scale-110 active:scale-95`}>
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black mb-6 md:mb-10 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#00D4FF]">Capabilities</h4>
          <ul className="space-y-3 md:space-y-5 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-500">
            <li className="hover:text-white cursor-pointer transition-colors">AI Web Design</li>
            <li className="hover:text-white cursor-pointer transition-colors">Neural Chatbots</li>
            <li className="hover:text-white cursor-pointer transition-colors">Voice Systems</li>
            <li className="hover:text-white cursor-pointer transition-colors">Scale Strategy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-6 md:mb-10 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#8B5CF6]">Company</h4>
          <ul className="space-y-3 md:space-y-5 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-gray-500">
            <li className="hover:text-white cursor-pointer transition-colors">Our Results</li>
            <li className="hover:text-white cursor-pointer transition-colors">Client Success</li>
            <li className="hover:text-white cursor-pointer transition-colors">Documentation</li>
            <li className="hover:text-white cursor-pointer transition-colors">Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-black mb-6 md:mb-10 text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-[#bef264]">Contact</h4>
          
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
             <a href="mailto:opraxai.founder@gmail.com" className="flex items-center space-x-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#bef264] group-hover:bg-[#bef264] group-hover:text-black transition-all">
                  <Mail className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">opraxai.founder@gmail.com</span>
             </a>

             <a href="tel:+923215220276" className="flex items-center space-x-4 group">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#bef264] group-hover:bg-[#bef264] group-hover:text-black transition-all">
                  <MessageSquare className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">+92 321 5220276</span>
             </a>
          </div>

          <button 
            onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
            className="w-full bg-[#bef264] text-black px-6 py-3 md:py-4 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center space-x-2"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
        <p className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-600">
          © 2025 OPRAX.AI • PREMIER BUSINESS AUTOMATION
        </p>
        <div className="flex space-x-6 md:space-x-10 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-gray-600">
          <span className="hover:text-white cursor-pointer">Security</span>
          <span className="hover:text-white cursor-pointer">Protocol</span>
          <span className="text-[#bef264] cursor-default animate-pulse">Status: Optimal</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;