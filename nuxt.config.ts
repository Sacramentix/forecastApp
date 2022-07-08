import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  runtimeConfig: {
    weatherApiKey: ""
  }
})
