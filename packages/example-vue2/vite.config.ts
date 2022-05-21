import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import AutoImport from 'unplugin-auto-import/vite'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createVuePlugin(),
    ScriptSetup(),
    AutoImport({
      imports: [
        '@vue/composition-api',
      ],
      "dts": "./src/auto-imports.d.ts",
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
