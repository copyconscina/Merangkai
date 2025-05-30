import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/ 
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        about: './about.html',
        services: './services.html',
        cases: './cases.html',
        team: './team.html',
        contact: './contact.html'
      }
    }
  }
});