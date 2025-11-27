'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HangingSkillProps {
  name: string;
  icon?: string;
  delay?: number;
}

export default function HangingSkill({ name, icon, delay = 0 }: HangingSkillProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay, 
        duration: 0.8, 
        type: "spring", 
        stiffness: 50,
        damping: 15
      }}
      whileHover={{ 
        rotate: 2,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="relative group flex flex-col items-center mx-4 my-4"
    >
      {/* Pin */}
      <div className="w-3 h-3 rounded-full bg-[#8B4513] shadow-sm z-20 relative top-1 border border-[#5D2906]" />

      {/* String */}
      <div className="relative w-full flex justify-center -mb-1">
        <div className="absolute top-1 left-1/2 w-[1px] h-16 bg-[#D2B48C] dark:bg-[#8B4513] origin-top -translate-x-1/2 rotate-[25deg] -translate-y-1 opacity-80" />
        <div className="absolute top-1 left-1/2 w-[1px] h-16 bg-[#D2B48C] dark:bg-[#8B4513] origin-top -translate-x-1/2 -rotate-[25deg] -translate-y-1 opacity-80" />
      </div>

      {/* Frame Container */}
      <div className="mt-12 relative w-32 h-32 flex items-center justify-center transform origin-top">
        
        {/* Simplified Wood Frame with gradient border */}
        <div 
          className="absolute inset-0 rounded-sm shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #e3cba8 0%, #d4a76a 50%, #c9a882 100%)',
            padding: '10px'
          }}
        >
          {/* Inner content area */}
          <div className="w-full h-full bg-[#f9f7f2] dark:bg-[#2a2a2a] rounded-sm shadow-inner flex items-center justify-center p-3 relative overflow-hidden">
            {icon ? (
              <Image 
                src={icon} 
                alt={name} 
                width={64} 
                height={64} 
                className="object-contain max-w-full max-h-full drop-shadow-md relative z-10"
              />
            ) : (
              <span className="text-center font-serif font-bold text-gray-700 dark:text-gray-300 text-sm leading-tight z-10 break-words w-full">
                {name}
              </span>
            )}
          </div>
        </div>
        
        {/* Label on hover */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-xs font-medium text-white bg-black/80 px-2 py-1 rounded shadow-sm pointer-events-none z-30">
          {name}
        </div>
      </div>
    </motion.div>
  );
}
