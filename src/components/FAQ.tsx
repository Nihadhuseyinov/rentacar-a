import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { faqs } from '../data';

export const FAQ = ({ lang }: { lang: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const currentLang = lang === 'عربي' ? 'EN' : lang as 'AZ' | 'EN' | 'RU';

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-zinc-900 rounded-3xl overflow-hidden bg-zinc-950/20">
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-8 text-left hover:bg-zinc-900/30 transition-colors"
          >
            <span className="text-lg font-black tracking-tight">{(faq.question as any)[currentLang]}</span>
            <ChevronDown className={`w-6 h-6 text-amber-500 transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                <div className="px-8 pb-8 text-zinc-500 font-medium leading-relaxed">
                  {(faq.answer as any)[currentLang]}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};
