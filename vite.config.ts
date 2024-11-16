import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  build: {
    outDir: './dist',
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: '/apptolast.com/',
  resolve: {
    alias: {
      '@': './src',
    },
  },
});