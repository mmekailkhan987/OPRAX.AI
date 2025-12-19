import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Services', id: 'services' },
  { name: 'Portfolio', id: 'portfolio' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'Reviews', id: 'testimonials' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? 'bg-[#050714]/80 backdrop-blur-xl border-b border-white/5 py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
        }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Logo className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-12 transition-transform duration-500" />
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase">
              OPRAX<span className="text-[#bef264]">.AI</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <a 
                key={item.name}
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)} 
                className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400 hover:text-white transition-colors relative group/link"
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#bef264] transition-all group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
             <button 
               onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
               className="bg-[#bef264] text-black px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(190,242,100,0.2)] hover:scale-105"
             >
               Start Project
             </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1 relative z-[110]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#050714] md:hidden pt-24 pb-10 px-6 flex flex-col h-[100dvh]">
          {/* Menu Items */}
          <div className="flex flex-col items-center justify-center flex-grow space-y-8 animate-in slide-in-from-bottom-5 duration-500">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-3xl font-black uppercase text-white tracking-widest hover:text-[#bef264] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile CTA */}
          <div className="mt-auto w-full max-w-sm mx-auto animate-in fade-in duration-700 delay-150">
             <div className="w-full h-px bg-white/10 mb-8" />
              <button 
                onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
                className="w-full bg-[#bef264] text-black py-4 rounded-xl text-sm font-black uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(190,242,100,0.2)]"
              >
                Start Project
              </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;