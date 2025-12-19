import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => {
  return (
    <div className={`relative ${className} group`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]">
        <defs>
          <linearGradient id="logo-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#00FFF0" />
          </linearGradient>
        </defs>
        
        {/* Orbital Motion Ring - FIXED MOTION */}
        <circle 
          cx="50" cy="50" r="45" 
          stroke="url(#logo-blue-grad)" 
          strokeWidth="1.5" 
          strokeDasharray="4 6" 
          opacity="0.4" 
          className="animate-[spin_20s_linear_infinite]"
        />

        {/* Modern Octagon/Core Frame */}
        <rect 
          x="20" y="20" 
          width="60" height="60" 
          rx="14" 
          stroke="url(#logo-blue-grad)" 
          strokeWidth="8" 
          className="group-hover:stroke-white transition-colors duration-500"
        />
        
        <rect x="35" y="35" width="30" height="30" rx="8" fill="url(#logo-blue-grad)" opacity="0.15" />
        
        {/* Internal Neural Hub */}
        <circle cx="50" cy="50" r="10" fill="white" className="animate-pulse" />
        <circle cx="50" cy="50" r="6" fill="#00D4FF" className="animate-pulse" />
        
        {/* Microchip Contact Points */}
        <path d="M50 20V10" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
        <path d="M50 90V80" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
        <path d="M80 50H90" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
        <path d="M10 50H20" stroke="#00D4FF" strokeWidth="4" strokeLinecap="round" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default Logo;