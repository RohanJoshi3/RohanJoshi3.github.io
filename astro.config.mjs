import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://rjoshi4464-rgb.github.io',
  base: '/rohanjoshi.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});