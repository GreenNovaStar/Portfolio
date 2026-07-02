import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this project site under /Portfolio/. Use that base for
// production builds only, so the local dev server keeps clean root URLs.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Portfolio/' : '/',
  plugins: [react()],
}));
