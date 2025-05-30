// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // jika kamu pakai React

export default defineConfig({
  base: '/merangkai1/', // WAJIB untuk GitHub Pages
  plugins: [react()],
})
