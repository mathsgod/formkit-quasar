import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'FormKitQuasar',
      fileName: "formkit-quasar",
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', '@formkit/vue', 'quasar'],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }
})
