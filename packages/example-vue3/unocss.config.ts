import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export function createConfig({ strict = true, dev = true } = {}) {
  return defineConfig({
    envMode: dev ? 'dev' : 'build',
    theme: {
      colors: {
      },

    },
    shortcuts: [

    ],
    presets: [
      presetAttributify({ strict }),
      presetIcons({
        scale: 1.2,
        warn: true,
        collections: {
          ep: () => import('@iconify-json/ep/icons.json').then(i => i.default as any),
        },
      }),
      presetWebFonts({
        provider: 'google',
        fonts: {
          sans: 'Roboto',
        },
      }),
      presetUno(),
    ],
    safelist: [],
    transformers: [
      transformerVariantGroup(),
      transformerDirectives(),
    ],
  })
}

export default createConfig()
