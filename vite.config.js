import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Aquí solo va el nombre del repositorio, no la URL completa
  base: "/Mi-Portafolio/", 
})