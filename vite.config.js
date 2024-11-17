import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/', // Make sure the base is set to your GitHub repo name
  plugins: [react()],
})
