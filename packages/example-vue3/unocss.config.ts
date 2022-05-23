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
        collections: {
          carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
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
