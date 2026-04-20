import React from 'react';
import { Quote, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { testimonials } from '../data';

export const Testimonials = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((item, i) => (
        <motion.div 
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-10 bg-[#0d0d0d] border border-zinc-900 rounded-[40px] relative group hover:border-amber-500/30 transition-all duration-500"
        >
          <Quote className="absolute top-8 right-8 text-amber-500/10 w-16 h-16 group-hover:scale-110 transition-transform" />
          
          <div className="flex gap-1 mb-6">
            {[...Array(5)].map((_, idx) => (
              <Star key={idx} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>

          <p className="text-zinc-400 font-medium leading-relaxed mb-10 italic">
            "{item.content}"
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-zinc-800">
              <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-black tracking-tight text-white">{item.name}</h4>
              <p className="text-[10px] uppercase font-black tracking-widest text-zinc-600">{item.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
