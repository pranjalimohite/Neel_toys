import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // ✅ This is what you need for Netlify
  plugins: [react(), tailwindcss()],
})
