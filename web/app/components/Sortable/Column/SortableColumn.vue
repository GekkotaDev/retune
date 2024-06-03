<script setup lang="ts">
type Props = {
  asChild: boolean
}

$defineProps<Props>()
</script>

<template>
  <Primitive :as-child="asChild">
    {{ asChild }}
  </Primitive>
</template>
