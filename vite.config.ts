import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { fileURLToPath } from 'url'; // Add this
import tailwindcss from "@tailwindcss/vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url)); // Add this

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});