import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages: site is served at https://<user>.github.io/<repo>/
const base = process.env.BASE_URL ? `/${process.env.BASE_URL}/` : '/'

export default defineConfig({
  base,
  plugins: [react()],
})
