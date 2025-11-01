import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),        // React plugin
    tailwindcss(),  // Tailwind plugin
  ],
    base: '/react-galinala-my-story/', // 👈 this is essential for GitHub Pages
})
