import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientMarquee from './components/ClientMarquee';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import AIChatbot from './components/AIChatbot';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#000000]">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <ClientMarquee />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
      <AIChatbot />
    </div>
  );
};

export default App;