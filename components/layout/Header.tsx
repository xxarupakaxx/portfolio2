'use client';

import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Header() {
  const [hidden, setHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}  
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
    >
      <nav className="pointer-events-auto bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-6">
        <ul className="flex items-center gap-6 text-sm font-medium text-body list-none m-0 p-0">
          {['About', 'Skills', 'Works', 'Contact'].map((item) => (
            <li key={item}>
              <button 
                onClick={() => scrollTo(item.toLowerCase())} 
                className="bg-transparent border-none p-0 text-body hover:text-primary dark:hover:text-white transition-colors cursor-pointer"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
