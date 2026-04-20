import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { cars } from '../data';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot = ({ lang }: { lang: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const fleetContext = cars.map(c => `${c.name} - ${c.price} AZN/Gün (${c.category})`).join(', ');
      
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, userMessage].map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        config: {
          systemInstruction: `Sən "Caspian Rent" lüks avtomobil icarəsi mərkəzinin süni intellekt köməkçisisən. 
          Müştərilərə avtomobil seçməkdə kömək et. 
          Bizim avtomobillərimiz: ${fleetContext}. 
          Dil seçimi: İstifadəçinin dili (${lang}) ilə cavab ver. 
          Üslubun: Professional, nəzakətli və lüks xidmətə uyğun olsun. 
          Əgər müştəri qərar verə bilmirsə, onlara SUV, Sedan və ya İdman avtomobilləri arasında fərqləri izah et.`,
        },
      });

      const modelMessage: Message = { role: 'model', text: response.text || 'Bağışlayın, hazırda cavab verə bilmirəm.' };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Xəta baş verdi. Zəhmət olmasa bir az sonra yenidən cəhd edin.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/20 hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageSquare className="text-black w-7 h-7 group-hover:rotate-12 transition-transform" />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#0a0a0a] animate-pulse" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-28 right-8 z-[100] w-full max-w-[400px] bg-[#111111] border border-white/5 rounded-[32px] overflow-hidden shadow-2xl flex flex-col h-[600px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="p-6 bg-amber-500 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Bot className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-black font-black text-sm uppercase tracking-wider">Caspian AI Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-900 rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-black/60 uppercase tracking-tighter">Online</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center hover:bg-black/20 transition-colors"
              >
                <X className="text-black w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth">
              {messages.length === 0 && (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-amber-500 w-8 h-8" />
                  </div>
                  <p className="text-zinc-500 text-sm font-medium px-4">
                    Xoş gəlmisiniz! Sizin üçün uyğun lüks avtomobili tapmağa kömək edə bilərəm.
                  </p>
                </div>
              )}
              {messages.map((msg, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-amber-500 text-black rounded-tr-none' 
                      : 'bg-zinc-900 text-zinc-300 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 p-4 rounded-2xl rounded-tl-none flex gap-1">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 pt-0">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Sualınızı yazın..."
                  className="w-full bg-zinc-900 border border-white/5 rounded-2xl px-6 py-4 pr-14 text-sm font-medium focus:border-amber-500 outline-none transition-all placeholder:text-zinc-600"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 disabled:grayscale transition-all"
                >
                  <Send className="text-black w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
