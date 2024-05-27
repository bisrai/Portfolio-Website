import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSvgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio-Website/",
  plugins: [
    react(),
    vitePluginSvgr({
      svgrOptions: {
        icon: true,
      }
    })
  ],
})

