<script setup lang="ts">
import type { SubProps } from "./types"

$defineProps<SubProps>()
</script>

<template>
  <UiMenubarSub>
    <UiMenubarSubTrigger> {{ label }} </UiMenubarSubTrigger>

    <UiMenubarSubContent>
      <template v-for="child in children">
        <TitlebarLeaf
          v-if="child.type === 'leaf'"
          :disabled="child.disabled"
          :label="child.label"
          :shortcut="child.shortcut"
          :action="child.action"
        />

        <TitlebarSubmenu
          v-if="child.type === 'submenu'"
          :label="child.label"
          :children="child.children"
        />
      </template>
    </UiMenubarSubContent>
  </UiMenubarSub>
</template>
