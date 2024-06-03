<script setup lang="ts">
type Props = {
  width?: TwWidth
  height?: TwHeight
}

$defineProps<Props>()
</script>

<template>
  <div aria-hidden :class="`${width || height || 'grow'} ${width} ${height}`" />
</template>
