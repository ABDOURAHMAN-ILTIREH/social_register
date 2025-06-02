import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(),tailwindcss(),],
  build: {
    chunkSizeWarningLimit: 1000, // Ignore warning if you're okay with 1MB chunks
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('axios')) return 'axios';
            return 'vendor'; // fallback for all other node_modules
          }
        }
      }
    }
  }
})
