import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import tailwindcss from '@tailwindcss/vite';
import sitemap from 'vite-plugin-sitemap';
import { visualizer } from "rollup-plugin-visualizer"

// Polyfill __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss(), sitemap({
    hostname: 'https://prabh.me',
    outDir: './dist'
  }), visualizer({
    open: true
  })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
