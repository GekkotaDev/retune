<script setup lang="ts">
type Props = {
  onMinimize: () => void
}

$defineProps<Props>()
</script>

<template>
  <div
    @click="onMinimize"
    class="flex h-full w-8 items-center justify-center transition hover:bg-neutral-500/20"
  >
    <Icon name="material-symbols:chrome-minimize-rounded" />
  </div>
</template>
