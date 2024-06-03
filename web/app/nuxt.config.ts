import Defaults from "./.railroad/nuxt-config"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...Defaults,

  modules: ["@pinia-plugin-persistedstate/nuxt", "nuxt-typed-router"],

  imports: {
    presets: [
      {
        from: "vue-use-gesture",
        imports: [
          "useDrag",
          "useMove",
          "useHover",
          "useScroll",
          "useWheel",
          "usePinch",
          "useGesture",
        ],
      },
    ],
  },
})

