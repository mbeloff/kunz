// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxtjs/tailwindcss', '@nuxt/icon'],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    config: {
        theme: {
        extend: {
            fontFamily: {
                sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
                hand:
                  'Caveat, ui-serif, Georgia, Cambria, Times New Roman, Times, serif',
              },
        }
        }
    }
},
})