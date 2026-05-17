import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages live under https://zedyo.github.io/Femvia/
export default defineConfig({
  base: '/Femvia/',
  plugins: [react()],
})
