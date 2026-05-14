import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rohanjoshi3.github.io',
  base: '/',

  vite: {
    plugins: [tailwindcss()],
  },
});
