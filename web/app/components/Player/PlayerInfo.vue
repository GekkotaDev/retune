<script setup lang="ts">
type Props = {
  song?: string
  artist?: string
  album?: string
}

const {
  song = "Song",
  artist = "Artist/Band",
  album = "Album",
} = $defineProps<Props>()
</script>

<template>
  <div class="aspect-square h-[99%] self-end bg-neutral-500/10"></div>

  <div class="flex cursor-default flex-col justify-center space-y-0.5">
    <p class="select-all font-semibold">{{ song }}</p>
    <p class="select-all text-xs opacity-50">{{ artist }}</p>
    <p class="select-all text-xs opacity-50">{{ album }}</p>
  </div>
</template>
