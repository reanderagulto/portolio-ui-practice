import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      '@': "/src",
      '@assets': "/src/assets",
      '@components': "/src/components",
      '@pages': "/src/pages",
      '@data': "/src/data",
      '@svg': "/src/assets/svg", 
    },
  },
})
