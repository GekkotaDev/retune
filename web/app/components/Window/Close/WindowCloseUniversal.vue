<script setup lang="ts">
type Props = {
  onClose: () => void
}

$defineProps<Props>()
</script>

<template>
  <div
    @click="onClose"
    class="flex h-full w-8 items-center justify-center transition hover:bg-[#c42b1c] hover:text-white"
  >
    <Icon name="material-symbols:close-rounded" />
  </div>
</template>
