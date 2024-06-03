<script setup lang="ts">
import type { TitlebarLeafProps } from "~/types/titlebar.types"

$defineProps<TitlebarLeafProps>()
</script>

<template>
  <UiMenubarItem :disabled @select="action">
    {{ label }}
    <UiMenubarShortcut v-if="shortcut"> {{ shortcut }} </UiMenubarShortcut>
  </UiMenubarItem>
</template>
