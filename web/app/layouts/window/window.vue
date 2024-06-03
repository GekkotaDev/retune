<script setup lang="ts">
const { title, menus } = toRefs(useTitlebarStore())
</script>

<template>
  <div id="window" class="flex h-screen w-screen flex-col">
    <Titlebar id="main" :menus>
      <template #icon>
        <Icon data-tauri-drag-region name="logos:youtube-icon" />
      </template>

      <p data-tauri-drag-region>{{ title }}</p>
    </Titlebar>

    <slot />
  </div>
</template>
