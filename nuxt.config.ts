// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/'
  }
  
})