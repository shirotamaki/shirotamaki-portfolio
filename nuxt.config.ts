import { defineNuxtConfig } from '@nuxt/bridge'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
  plugins: ['@/plugins/fontawesome.ts'],
})
