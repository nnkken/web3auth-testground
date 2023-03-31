import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    vue(),
  ],
  server: {
    host: '0.0.0.0',
    port: 31801,
    // https: true,
  },
})
