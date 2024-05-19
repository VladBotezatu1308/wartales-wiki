// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  pinia: {
    storesDirs: ['./stores/**'],
  },
  build: {
    transpile: ['vuetify', 'vuetify/components', 'vuetify/directives', 'vuetify/styles'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  }
})