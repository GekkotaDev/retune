<script setup lang="ts">
import { VueQueryDevtools } from "@tanstack/vue-query-devtools"

windowsPlatform

import "@fontsource-variable/inter"

import "~/assets/theme/light.css"
import "~/assets/theme/dark.css"

import "~/assets/tailwind.css"
import "~/assets/css.css"

const transparency = ref(
  windowsPlatform === "windows11" ? "transparent" : "auto",
)
const {
  public: { _DEVONLY: devonly },
} = useRuntimeConfig()
</script>

<template>
  <!-- -->

  <NuxtPage />

  <DevOnly>
    <VueQueryDevtools v-show="devonly.query" />
  </DevOnly>
</template>

<style>
body {
  background-color: v-bind(transparency);
}
</style>

