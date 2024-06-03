<script setup lang="ts">
const { title, menus } = toRefs(useTitlebarStore())
const { progress, volume } = toRefs(usePlaybackStore())
</script>

<template>
  <div
    id="window"
    class="relative flex h-screen w-screen flex-col overflow-hidden"
  >
    <Titlebar id="main" :menus>
      <template #icon>
        <Icon data-tauri-drag-region name="logos:youtube-icon" />
      </template>

      <p data-tauri-drag-region>{{ title }}</p>
    </Titlebar>

    <div class="flex ltr:flex-row rtl:flex-row-reverse">
      <slot name="sidebar" />

      <main>
        <UiCard class="h-full w-full rounded-b-none">
          <slot />
        </UiCard>
      </main>
    </div>

    <Player
      :duration="225"
      v-model:volume="volume"
      v-model:progress="progress"
    />
  </div>
</template>

