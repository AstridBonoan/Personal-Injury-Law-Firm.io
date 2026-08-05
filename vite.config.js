import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages subdirectory: https://astridbonoan.github.io/Personal-Injury-Law-Firm/
export default defineConfig({
  base: '/Personal-Injury-Law-Firm/',
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
});
