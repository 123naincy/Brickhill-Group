import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { seoBuildPlugin } from './scripts/seo-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), seoBuildPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
