import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import { fileURLToPath } from 'node:url'

export default defineConfig({
    root: 'docs',
    base: './',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./docs', import.meta.url))
        }
    },
    plugins: [
        vue({ template: { transformAssetUrls } }),
        quasar()
    ],
    server: {
        port: 5173,
        open: true
    },
    build: {
        outDir: '../docs-dist',
        emptyOutDir: true
    }
})
