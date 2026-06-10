import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        transformAssetUrls
      }
    }),
    dts({
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
      logLevel: 'silent'
    }),
    quasar()
  ],
  build: {
    lib: {
      entry: 'src/components/index.ts',
      name: 'FormKitQuasar',
      fileName: "formkit-quasar",
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@formkit/vue',
        '@formkit/core',
        '@formkit/validation',
        'quasar',
        '@quasar/extras'
      ],
      output: {
        globals: {
          vue: 'Vue'
        }
      },
      onwarn(warning, warn) {
        // Vue compiler injects `resolveComponent` imports that rollup can't see as used.
        // Safe to ignore — Vue handles this at runtime.
        if (warning.code === 'UNUSED_EXTERNAL_IMPORT' && warning.exporter === 'vue' && warning.names?.includes('resolveComponent')) {
          return
        }
        warn(warning)
      }
    }
  }


})
