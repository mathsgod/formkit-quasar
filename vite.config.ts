import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts()],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'FormKitQuasar',
      fileName: "formkit-quasar",
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', '@formkit/vue', 'quasar', "@quasar/extras", "@formkit/validation"],
      output: {
        globals: {
          vue: 'Vue',
        }
      }
    }
  }


})
