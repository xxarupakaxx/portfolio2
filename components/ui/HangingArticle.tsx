'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface HangingArticleProps {
  title: string;
  image: string;
  link: string;
  date?: string;
  delay?: number;
}

export default function HangingArticle({ title, image, link, date, delay = 0 }: HangingArticleProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20, rotate: -1 }}
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
        rotate: 1,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="relative group flex flex-col items-center mx-6 my-8 flex-shrink-0"
    >
      {/* Pin */}
      <div className="w-4 h-4 rounded-full bg-[#8B4513] shadow-sm z-20 relative top-1 border border-[#5D2906]" />

      {/* String */}
      <div className="relative w-full flex justify-center -mb-1">
        <div className="absolute top-1 left-1/2 w-[1px] h-24 bg-[#D2B48C] dark:bg-[#8B4513] origin-top -translate-x-1/2 rotate-[35deg] -translate-y-1 opacity-80" />
        <div className="absolute top-1 left-1/2 w-[1px] h-24 bg-[#D2B48C] dark:bg-[#8B4513] origin-top -translate-x-1/2 -rotate-[35deg] -translate-y-1 opacity-80" />
      </div>

      {/* Frame Container */}
      <div className="mt-20 relative w-[320px] h-[180px] flex flex-col items-center transform origin-top">
        
        {/* Simplified Wood Frame with gradient border */}
        <div 
          className="absolute inset-0 rounded-sm shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #e3cba8 0%, #d4a76a 50%, #c9a882 100%)',
            padding: '12px'
          }}
        >
          {/* Inner content area with image */}
          <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-sm shadow-inner relative overflow-hidden">
            <Image 
              src={image} 
              alt={title} 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Museum Label (Outside Frame) */}
      <div className="mt-6 bg-white dark:bg-[#222] px-4 py-3 shadow-md border border-gray-200 dark:border-gray-700 max-w-[280px] text-center relative">
         {/* Tiny screw heads for realism */}
         <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
         <div className="absolute top-1 right-1 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
         <div className="absolute bottom-1 left-1 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />
         <div className="absolute bottom-1 right-1 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600" />

         <h4 className="font-serif font-bold text-gray-800 dark:text-gray-200 text-sm leading-tight mb-1">
           {title}
         </h4>
         {date && <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono tracking-widest">{date}</p>}
      </div>
    </motion.a>
  );
}
