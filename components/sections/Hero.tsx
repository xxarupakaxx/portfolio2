  'use client';


import { motion } from 'framer-motion';

export default function Hero() {


  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-bg-light dark:bg-bg-dark">
      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-8">
            <img 
              src="/assets/icon.png" 
              alt="YOSHIKI" 
              className="w-20 h-20 rounded-full object-cover border-2 border-gray-100 dark:border-gray-800 shadow-sm"
            />
          </div>
          <h2 className="text-accent text-lg md:text-xl font-medium tracking-wide mb-6">
             Full-Stack Experience Engineer
          </h2>
          <p className="text-b  ody text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed text-gray-600 dark:text-gray-400">
            あるぱか Portfolio
          </p>
        </motion.div>
      </div>
      

    </section>
  );
}
