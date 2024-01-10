import { defineNuxtConfig } from '@nuxt/bridge'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@fortawesome/fontawesome-svg-core/styles.css', '@/assets/css/main.css'],
  plugins: ['@/plugins/fontawesome.ts'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
})
