'use client';

export default function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-20">
      <p>© {new Date().getFullYear()} あるぱか. All rights reserved.</p>
    </footer>
  );
}
