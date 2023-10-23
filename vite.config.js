import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
      '@sections': "/src/sections",
      '@layout': "/src/layout",
      '@components': "/src/components",
      '@data': "/src/data",
      '@svg': "/src/assets/svg", 
    },
  },
})
