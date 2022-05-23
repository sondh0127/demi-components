import { URL, fileURLToPath } from 'url'
import type { ConfigEnv, UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { loadEnv } from 'vite'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Qiankun from 'vite-plugin-qiankun'
import { name } from './package.json'

const CWD = process.cwd()

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const { VITE_BASE_URL } = loadEnv(mode, CWD)

  return {
    base: VITE_BASE_URL,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    plugins: [
      Vue(),
      AutoImport({
        imports: [
          'vue',
          '@vueuse/core',
        ],
        dts: './src/auto-imports.d.ts',
      }),
      Components({
        resolvers: [ElementPlusResolver()],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: './src/components.d.ts',
      }),
      Unocss(),
      Pages({
        pagesDir: [{ dir: './src/pages', baseRoute: '' }],
        exclude: ['**/components/**.vue'],
        extensions: ['vue'],
        syncIndex: false,
        nuxtStyle: true,
      }),
      Qiankun(name, { useDevMode: true }),
    ],
    server: {
      port: 4001,
      open: true,
    },
  }
}
