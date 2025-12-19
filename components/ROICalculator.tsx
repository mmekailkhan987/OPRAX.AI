
import React, { useState } from 'react';

const ROICalculator: React.FC = () => {
  const [customers, setCustomers] = useState(100);
  const [value, setValue] = useState(5000);
  const [digitalPot, setDigitalPot] = useState(40);

  const currentRevenue = customers * value;
  const potentialRevenue = currentRevenue * (1 + (digitalPot / 100));
  const additionalRevenue = potentialRevenue - currentRevenue;
  const annualBoost = additionalRevenue * 12;
  const payback = Math.max(0.1, (50000 / (additionalRevenue || 1))).toFixed(1);

  return (
    <section className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border-2 border-cyan-500/20 shadow-2xl shadow-cyan-500/5">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4">Calculate Your <span className="gradient-text">Growth</span></h2>
          <p className="text-gray-400 font-medium">See how much revenue you are leaving on the table without a professional presence.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div>
              <label className="flex justify-between text-sm font-black uppercase tracking-wider text-gray-400 mb-4">
                Monthly Customers <span>{customers}</span>
              </label>
              <input 
                type="range" min="10" max="1000" value={customers} 
                onChange={(e) => setCustomers(parseInt(e.target.value))}
                className="w-full accent-cyan-400 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm font-black uppercase tracking-wider text-gray-400 mb-4">
                Average Sale (Rs.) <span>Rs. {value.toLocaleString()}</span>
              </label>
              <input 
                type="range" min="1000" max="50000" step="500" value={value} 
                onChange={(e) => setValue(parseInt(e.target.value))}
                className="w-full accent-purple-400 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="flex justify-between text-sm font-black uppercase tracking-wider text-gray-400 mb-4">
                Digital Discovery Potential <span>{digitalPot}%</span>
              </label>
              <input 
                type="range" min="10" max="90" value={digitalPot} 
                onChange={(e) => setDigitalPot(parseInt(e.target.value))}
                className="w-full accent-orange-400 h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-900/50 p-10 rounded-3xl border border-white/5 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="text-xs font-black text-gray-500 uppercase tracking-widest mb-2">Annual Revenue Boost</div>
              <div className="text-5xl md:text-6xl font-black gradient-text mb-6">Rs. {annualBoost.toLocaleString()}</div>
              
              <div className="space-y-4 text-left border-t border-white/5 pt-6">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-400">Monthly Additional:</span>
                  <span className="text-green-400">+Rs. {additionalRevenue.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-gray-400">Payback Period:</span>
                  <span className="text-cyan-400">{payback} Months</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('https://calendly.com', '_blank')}
                className="btn-primary w-full mt-10 py-4 rounded-xl font-black text-lg"
              >
                Claim This Growth
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
