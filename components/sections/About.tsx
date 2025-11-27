'use client';

import Section from '../ui/Section';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

type TimelineEvent = {
  year: string;
  title: string;
  description: string;
  image?: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2002.03.22',
    title: 'born',
    description: '新潟で生まれる。育ちは横浜',
  },
  {
    year: '2020 - 2024',
    title: '東京工業大学 数学系',
    description: '数学系に所属する',
    image: '/assets/tokodai.webp',
  },
  {
    year: '2021 - 2023',
    title: 'traP SysAd班',
    description: 'デジタル創作同好会traPのSysAd班に所属。Webエンジニアとしての基礎を築く',
    image: '/assets/trap.png',
  },
  {
    year: '2022.05 - 2023.08',
    title: 'pixiv アルバイト',
    description: 'バックエンドエンジニアとしてRailsを用いた大規模Webサービスの開発を経験',
    image: '/assets/pixiv.jpg',
  },
  {
    year: '2022.08',
    title: 'ISUCON 12 本戦出場',
    description: 'webサイトの高速化を図るパフォーマンスのコンテストにチーム xxRARxx として出場し、予選突破し本戦出場',
    image: '/assets/isucon.png',
  },
  {
    year: '2023.12',
    title: 'Recruit インターン',
    description: 'Scalaを用いたサーバーサイド開発に触れる',
    image: '/assets/recruit.jpg',
  },
  {
    year: '2024.04',
    title: 'DeNA 入社',
    description: '新卒として入社',
    image: '/assets/dena.avif',
  },
];

export function About() {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent | null>(null);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <Section id="about" className="relative">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          {activeEvent && (
            <motion.div
              key={activeEvent.year}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ 
                backgroundImage: `url(${activeEvent.image})`,
                filter: 'grayscale(100%) blur(2px)'
              }}
            />
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col md:flex-row gap-16 md:gap-24">
        {/* Left: Bio */}
        <div className="flex-1 md:sticky md:top-32 h-fit">
          <motion.h2 
            className="text-4xl font-bold text-primary dark:text-white mb-8 font-serif"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            About Me
          </motion.h2>
          <motion.div
            className="text-body space-y-6 text-lg leading-relaxed"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            <p>
2020年、東工大で出会った traP をきっかけにプログラミングを開始。
ウェブやゲームの制作を通して、動くものを作る楽しさと、速さ・構造・運用の三点の両立に興味を持つ。
ISUCON12 で本戦出場した実績から、負荷に耐える調整やボトルネックを特定したりバックエンド領域が好きと自覚している。
            </p>
            <p>
              クラウドは主に Google Cloud を利用。
              基本的にマネージドサービスを選定し、Cloud Run、BigQuery、Pub/Sub、Cloud Tasks、Cloud Scheduler、Cloud Run Jobs、Cloud Logging などを適材適所で組み合わせて構成する経験がある。
              AWS や Firebase、Vercel も個人開発で使った経験はある。
            </p>
            <p>
             性格面では、集中して複数技術を触ることが苦ではなく、むしろ視界を広げる手段として行ってきた。
            </p>
            <p>
             現在は新卒として DeNA で、大規模なサービスの開発に参加  
            </p>
          </motion.div>
        </div>

        {/* Right: Timeline */}
        <div className="flex-1">
          <motion.h3
            className="text-2xl font-bold text-primary dark:text-white mb-10 font-serif"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
          >
            Footprints
          </motion.h3>
          
          <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-12 pb-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                custom={index + 3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={variants}
                className="relative pl-8 cursor-pointer group"
                onClick={() => setActiveEvent(activeEvent === event ? null : event)}
                onMouseEnter={() => setActiveEvent(event)}
              >
                {/* Dot */}
                <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full border-2 transition-colors duration-300 ${
                  activeEvent === event 
                    ? 'bg-primary border-primary dark:bg-white dark:border-white scale-125' 
                    : 'bg-white border-gray-300 dark:bg-gray-900 dark:border-gray-600 group-hover:border-primary dark:group-hover:border-white'
                }`} />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                  <span className={`text-sm font-mono font-medium transition-colors ${
                    activeEvent === event ? 'text-primary dark:text-white' : 'text-gray-400 dark:text-gray-500'
                  }`}>
                    {event.year}
                  </span>
                  <h4 className={`text-lg font-bold transition-colors ${
                    activeEvent === event ? 'text-primary dark:text-white' : 'text-gray-700 dark:text-gray-300'
                  }`}>
                    {event.title}
                  </h4>
                </div>
                
                <p className="text-body text-sm leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
