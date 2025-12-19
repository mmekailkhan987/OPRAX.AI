import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToAI } from '../services/gemini';
import { MessageSquare, X, Send, Sparkles, ChevronDown, Calendar, ArrowRight } from 'lucide-react';

const SUGGESTED_QUESTIONS = [
  "Pricing?",
  "What do you sell?",
  "Growth Suite Info",
  "Book Strategy Call"
];

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Initial state includes the greeting, but we won't send this specific message to the API to avoid role errors
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: "Hello. I'm Atlas. Ready to automate your growth? Ask me about pricing or booking." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    setInput('');
    // Optimistically update UI
    setMessages(prev => [...prev, { role: 'user', text: textToSend }]);
    setIsTyping(true);

    try {
      // Filter out the very first "welcome" message from the history sent to API
      // to ensure the conversation flow starts correctly for the model (User first or empty history)
      const apiHistory = messages.slice(1).map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));

      const aiResponse = await sendMessageToAI(textToSend, apiHistory);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please book a call directly." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-[999] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-3 w-[320px] md:w-[340px] max-w-[calc(100vw-32px)] bg-[#0A0E27]/95 backdrop-blur-2xl border border-[#00D4FF]/30 rounded-[1.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col h-[400px] md:h-[450px] animate-in slide-in-from-bottom-5 duration-300 ring-1 ring-white/10">
          
          {/* Header */}
          <div className="px-4 py-3 bg-gradient-to-r from-[#00D4FF]/10 to-[#8B5CF6]/10 border-b border-white/5 flex justify-between items-center relative overflow-hidden shrink-0 cursor-pointer" onClick={() => setIsOpen(false)}>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="flex items-center space-x-3 relative z-10">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#8B5CF6] flex items-center justify-center shadow-lg ring-1 ring-white/10">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#bef264] rounded-full border-2 border-[#0A0E27] animate-pulse" />
              </div>
              <div>
                <span className="font-black text-white block text-xs tracking-wide">ATLAS AI</span>
                <span className="text-[9px] text-[#00D4FF] font-bold uppercase tracking-widest flex items-center gap-1">
                  Sales Director
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
                <button 
                  onClick={(e) => { e.stopPropagation(); window.open('https://calendly.com/opraxai-founder/30min', '_blank'); }}
                  className="p-1.5 text-[#bef264] hover:bg-[#bef264]/10 rounded-full transition-colors"
                  title="Book Call"
                >
                    <Calendar className="w-4 h-4" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                  className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full"
                >
                  <ChevronDown className="w-5 h-5" />
                </button>
            </div>
          </div>

          {/* Chat Area */}
          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 scrollbar-hide bg-gradient-to-b from-transparent to-[#000000]/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] px-3 py-2.5 rounded-2xl text-xs md:text-sm font-medium leading-relaxed shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-[#00D4FF] text-black rounded-br-none shadow-[0_0_15px_rgba(0,212,255,0.1)]' 
                    : 'bg-[#1a1f3d] text-gray-200 border border-white/5 rounded-bl-none'
                }`}>
                  {/* Smart Link Parsing */}
                  {m.text.split(/(\bhttps?:\/\/[^\s]+)/g).map((part, idx) => (
                    part.match(/^https?:\/\//) ? (
                      <a key={idx} href={part} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 mt-1 bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-colors border border-white/5 group">
                         <span className="underline font-bold text-[#bef264] break-all truncate">Book Now</span>
                         <ArrowRight className="w-3 h-3 text-[#bef264] group-hover:translate-x-1 transition-transform" />
                      </a>
                    ) : (
                      <span key={idx}>{part}</span>
                    )
                  ))}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#1a1f3d] px-4 py-3 rounded-2xl rounded-bl-none border border-white/5">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full animate-bounce [animation-delay:0.15s]" />
                    <div className="w-1.5 h-1.5 bg-[#00D4FF] rounded-full animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions - Always visible when not typing */}
          {!isTyping && (
            <div className="px-3 pb-2 flex gap-2 overflow-x-auto scrollbar-hide mask-fade-right shrink-0">
              {SUGGESTED_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="whitespace-nowrap px-3 py-1.5 bg-white/5 hover:bg-[#00D4FF] hover:text-black border border-white/10 hover:border-[#00D4FF] rounded-lg text-[10px] font-bold text-gray-300 transition-all active:scale-95"
                >
                  {q}
                </button>
              ))}
            </div>
          )}

          {/* Input Area */}
          <div className="p-3 bg-[#050714] border-t border-white/10 shrink-0">
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-2 py-1.5 focus-within:border-[#00D4FF]/50 focus-within:bg-white/10 transition-all shadow-inner">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask Atlas..."
                className="flex-grow bg-transparent px-3 py-1 text-sm text-white focus:outline-none placeholder:text-gray-500"
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isTyping}
                className="w-8 h-8 rounded-full bg-[#00D4FF] text-black flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 transition-all"
              >
                <Send className="w-3.5 h-3.5 ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00D4FF] shadow-[0_0_30px_rgba(0,212,255,0.4)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 z-[100]"
      >
        <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20" />
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6 text-black" />
        ) : (
          <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-black fill-black" />
        )}
        
        {!isOpen && messages.length <= 1 && (
           <span className="absolute -top-1 -right-1 flex h-4 w-4">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#bef264] opacity-75"></span>
             <span className="relative inline-flex rounded-full h-4 w-4 bg-[#bef264] text-[9px] text-black items-center justify-center font-bold">1</span>
           </span>
        )}
      </button>
    </div>
  );
};

export default AIChatbot;