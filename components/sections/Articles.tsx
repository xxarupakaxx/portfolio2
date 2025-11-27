'use client';

import Section from '../ui/Section';
import HangingArticle from '../ui/HangingArticle';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const articles = [
  {
    title: "Depth Forge - 思考を鍛え直すログ",
    image: "/assets/depth-forge.png",
    link: "https://depth-forge.netlify.app/",
    date: "2025"
  },
  {
    title: "BASE☆BLUE：4つの問題で学ぶ、リアルタイムAI解説のプロンプト設計",
    image: "https://engineering.dena.com/blog/2025/10/starguide/cover.png",
    link: "https://engineering.dena.com/blog/2025/10/starguide/",
    date: "2025.10"
  },
  {
    title: "gRPC 完全に理解した",
    image: "https://trap.jp/content/images/2021/12/d1le0dxwoaa_c04.jpg",
    link: "https://trap.jp/post/1472/",
    date: "2021.12"
  }
];

export default function Articles() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  
  return (
    <Section id="articles" className="py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-primary dark:text-white mb-6 font-serif">Library</h2>
        <p className="text-body max-w-2xl mx-auto text-lg">
          Thoughts and technical explorations.
        </p>
      </div>

      {/* Scroll Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto pb-12 px-4 md:px-12 gap-8 snap-x snap-mandatory scrollbar-none"
        style={{ scrollBehavior: 'smooth' }}
      >
        {articles.map((article, idx) => (
          <div key={article.link} className="snap-center">
             <HangingArticle 
               title={article.title}
               image={article.image}
               link={article.link}
               date={article.date}
               delay={idx * 0.1}
             />
          </div>
        ))}
        
        {/* Padding for end of scroll */}
        <div className="w-12 flex-shrink-0" />
      </div>
      
      {/* Scroll Indicator */}
      <div className="w-full max-w-md mx-auto h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full mt-6 overflow-hidden">
        <motion.div 
          className="h-full bg-primary dark:bg-white rounded-full"
          style={{ scaleX: scrollXProgress, transformOrigin: "0%" }}
        />
      </div>
    </Section>
  );
}
