'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Articles from '@/components/sections/Articles';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(
        '#hero-section',
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.out' }
      )
      .fromTo(
        '#about-section',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        '#works-section',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
        '-=0.5'
      );
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={mainRef} className="relative w-full overflow-hidden">
      <Header />
      
      <div id="hero-section">
        <Hero />
      </div>
      
      <div className="space-y-32 pb-32">
        <div id="about-section">
          <About />
        </div>
        
        <Skills />
        
        <Articles />
        
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
