'use client';

import Section from '../ui/Section';

export default function Contact() {
  return (
    <Section id="contact" className="max-w-2xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-primary dark:text-white mb-6">Contact</h2>
      <div className="flex justify-center gap-8">
        <a 
          href="https://github.com/xxarupakaxx" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
        >
          <span className="sr-only">GitHub</span>
          <img src="/assets/github-mark.png" alt="GitHub" className="w-10 h-10" />
        </a>
        <a 
          href="https://x.com/arupaka03254" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
        >
          <span className="sr-only">X (Twitter)</span>
          <img src="/assets/x-logo.png" alt="X (Twitter)" className="w-10 h-10" />
        </a>
      </div>
    </Section>
  );
}
