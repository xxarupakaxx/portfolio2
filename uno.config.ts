import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['flex-center', 'flex items-center justify-center'],
    ['text-body', 'text-gray-700 dark:text-gray-300 leading-relaxed font-sans'],
    ['text-title', 'text-gray-900 dark:text-gray-100 font-serif'],
    ['section-container', 'max-w-5xl mx-auto px-6 py-20 md:py-32'],
  ],
  theme: {
    colors: {
      // Custom palette for "Quiet Minimal Atelier 2.0"
      primary: '#2c2c2c', // Deep charcoal
      secondary: '#595959', // Muted grey
      accent: '#d4af37', // Muted Gold (subtle)
      bg: {
        light: '#fdfbf7', // Warm paper-like white
        dark: '#121212', // Soft black
      },
    },
    fontFamily: {
      sans: '"Inter", "Zen Kaku Gothic New", sans-serif',
      serif: '"Cormorant Garamond", "Noto Serif JP", serif',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: [
          {
            name: 'Inter',
            weights: ['300', '400', '500'],
          },
          {
            name: 'Zen Kaku Gothic New',
            weights: ['300', '400', '500'],
          },
        ],
        serif: [
          {
            name: 'Cormorant Garamond',
            weights: ['400', '500', '600', '700'],
            italic: true,
          },
        ],
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
