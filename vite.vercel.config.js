import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',           // Vercel expects root
  build: {
    outDir: 'dist',    // Vercel expects dist
    emptyOutDir: true,
  },
})