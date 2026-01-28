import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        kiabi: resolve(__dirname, 'KIABI/index.html'),
        cdiscount: resolve(__dirname, 'CDISCOUNT/index.html'),
        boulanger: resolve(__dirname, 'BOULANGER/index.html'),
        lahalle: resolve(__dirname, 'LA_HALLE/index.html'),
        booking: resolve(__dirname, 'BOOKING/index.html'),
      },
    },
  },
  server: {
    port: 3001,
    host: true
  }
})
