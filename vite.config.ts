import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the custom domain root (brianyip.dev), so the base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
