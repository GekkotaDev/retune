import Macros from "unplugin-macros/vite"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../base"],
  modules: ["v-wave/nuxt", "radix-vue/nuxt"],

  vite: {
    plugins: [Macros()],
  },
})

