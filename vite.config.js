// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),        // React plugin
//     tailwindcss(),  // Tailwind plugin
//   ],
//     base: '/react-galinala-my-story/', // 👈 this is essential for GitHub Pages
// })




// export default defineConfig({
//   plugins: [react(), tailwindcss()],
//   base: '/react-galinala-my-story/',
//   build: {
//     outDir: 'docs',
//     emptyOutDir: true,
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/react-galinala-my-story/', // works for GitHub Pages
  build: {
    outDir: 'docs',                  // output for GitHub Pages
    emptyOutDir: true,
  },
})
