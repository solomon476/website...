import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://solianwolves-website.vercel.app',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
