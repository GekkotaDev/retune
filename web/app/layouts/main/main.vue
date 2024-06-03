<script setup lang="ts">
const { progress, volume } = toRefs(usePlaybackStore())
</script>

<template>
  <main class="size-full">
    <UiCard class="relative size-full rounded-b-none">
      <div class="size-full overflow-auto p-10">
        <slot />
      </div>

      <Player
        :duration="225"
        v-model:volume="volume"
        v-model:progress="progress"
      />
    </UiCard>
  </main>
</template>
