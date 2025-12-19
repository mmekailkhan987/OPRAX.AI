import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    canvasRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(35, 35, 50, 50);
    const material = new THREE.MeshBasicMaterial({
      color: 0x00D4FF,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2.5;
    scene.add(mesh);
    camera.position.z = 8;
    camera.position.y = 2;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.z += 0.0008; 
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && canvasRef.current) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleScrollToPortfolio = () => {
    const id = 'portfolio';
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-[#050714]">
      {/* Background Layer */}
      <div ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,212,255,0.05)_0%,transparent_60%)] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Left Side: Content */}
        <div className="text-left py-6 md:py-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 mb-4 md:mb-6 backdrop-blur-xl"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#00D4FF]">Accepting New Clients</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-[58px] font-black mb-4 md:mb-6 leading-[1.1] md:leading-[1.05] tracking-tighter text-white uppercase"
          >
            We build websites <span className="text-[#00D4FF]">and AI</span><br />
            that never miss<br />
            a <span className="text-[#bef264]">customer.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-lg text-gray-400 mb-8 md:mb-10 leading-relaxed max-w-lg font-medium"
          >
            Premium landing pages, AI chatbots, and voice receptionists that convert and book customers 24/7.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4"
          >
            <button 
              onClick={() => window.open('https://calendly.com/opraxai-founder/30min', '_blank')}
              className="group relative bg-[#00D4FF] text-black px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.3)] flex items-center justify-center space-x-3"
            >
              <span className="relative z-10">Start Project</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            
            <button 
              onClick={handleScrollToPortfolio}
              className="px-6 py-3 md:px-8 md:py-3.5 rounded-xl font-black text-xs md:text-sm uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center space-x-3 group text-white"
            >
              <span>View Work</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4 mt-8 md:mt-10"
          >
            <div className="flex -space-x-3 md:-space-x-4">
              {[
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=100&h=100',
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=100&h=100',
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=100&h=100'
              ].map((src, i) => (
                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-[#050714] overflow-hidden">
                  <img src={src} alt="Client" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all" />
                </div>
              ))}
            </div>
            <div className="text-xs md:text-sm font-medium text-gray-400">
              <span className="text-[#00D4FF] font-black">50+ businesses</span> trusted
            </div>
          </motion.div>
        </div>

        {/* Right Side: Conversation & Results Engine */}
        <div className="relative flex items-center justify-center lg:justify-end mt-8 lg:mt-0 perspective-[2000px]">
          
          {/* Main Interface - Tilted */}
          <motion.div 
            initial={{ rotateY: -12, rotateX: 5 }}
            animate={{ 
              rotateY: [-12, -4, -12], 
              rotateX: [5, 0, 5],
              y: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-20 w-full max-w-[320px] md:max-w-[380px] bg-[#0A0E27]/90 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-4 md:p-6 shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6 border-b border-white/5 pb-3 md:pb-4">
               <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-[#bef264] animate-pulse" />
                  <span className="text-[10px] font-black tracking-[0.2em] text-gray-400 uppercase">AI_Agent_Active</span>
               </div>
               <div className="text-[9px] md:text-[10px] font-mono text-[#00D4FF]">STATUS: ONLINE</div>
            </div>

            {/* Chat Simulation */}
            <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
               {/* Incoming Customer Message */}
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.5, duration: 0.5 }}
                 className="flex items-start space-x-3"
               >
                 <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px]">👤</div>
                 <div className="bg-white/5 p-2 md:p-3 rounded-2xl rounded-tl-none text-[10px] md:text-xs text-gray-300 border border-white/5">
                   Hi, availability for consultation?
                 </div>
               </motion.div>

               {/* AI Processing Indicator */}
               <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: [0, 1, 0] }}
                 transition={{ delay: 1.2, duration: 1.5 }}
                 className="flex space-x-1 ml-9 md:ml-11"
               >
                  <div className="w-1 h-1 bg-[#00D4FF] rounded-full animate-bounce" />
                  <div className="w-1 h-1 bg-[#00D4FF] rounded-full animate-bounce delay-75" />
                  <div className="w-1 h-1 bg-[#00D4FF] rounded-full animate-bounce delay-150" />
               </motion.div>

               {/* AI Response */}
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 2, duration: 0.5 }}
                 className="flex items-start justify-end space-x-3"
               >
                 <div className="bg-[#00D4FF]/10 p-2 md:p-3 rounded-2xl rounded-tr-none text-[10px] md:text-xs text-white border border-[#00D4FF]/20 text-right">
                   <p className="mb-1">Yes! Tuesday 2 PM open.</p>
                   <p className="text-[#00D4FF] font-bold">Shall I book it?</p>
                 </div>
                 <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#00D4FF]/20 flex items-center justify-center text-[10px] border border-[#00D4FF]/30">🤖</div>
               </motion.div>
               
               {/* Customer Confirmation */}
                <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 3.5, duration: 0.5 }}
                 className="flex items-start space-x-3"
               >
                 <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px]">👤</div>
                 <div className="bg-white/5 p-2 md:p-3 rounded-2xl rounded-tl-none text-[10px] md:text-xs text-gray-300 border border-white/5">
                   Yes please!
                 </div>
               </motion.div>
            </div>

            {/* Results / Action Panel */}
            <motion.div 
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ delay: 4.5 }}
               className="bg-[#bef264]/10 border border-[#bef264]/20 rounded-xl p-3 md:p-4 flex items-center justify-between"
            >
               <div>
                  <div className="text-[9px] font-black uppercase text-[#bef264] tracking-widest mb-1">Result</div>
                  <div className="text-white font-bold text-xs md:text-sm">Appointment Confirmed</div>
               </div>
               <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#bef264] flex items-center justify-center text-black">
                  <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
               </div>
            </motion.div>

          </motion.div>

          {/* Floating Element: Conversion Rate */}
          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -left-4 md:-left-10 bottom-10 md:bottom-20 z-30 bg-[#1a1f3d] border border-white/10 p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl backdrop-blur-md hidden sm:block"
          >
             <div className="flex items-center space-x-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                   <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                   <div className="text-[10px] text-gray-400 font-bold uppercase">Conversion Rate</div>
                   <div className="text-sm font-black text-white">+420% Growth</div>
                </div>
             </div>
          </motion.div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-[#00D4FF]/20 to-[#8B5CF6]/20 blur-[60px] md:blur-[100px] rounded-full -z-10" />

        </div>

      </div>
    </section>
  );
};

export default Hero;