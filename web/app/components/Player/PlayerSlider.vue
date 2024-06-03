<script setup lang="ts">
// https://stackoverflow.com/a/25279340

type Props = {
  duration: number
}

const progress = defineModel<number>("progress", { required: true })

const sliderValue = computed<[number]>({
  get() {
    return [progress.value]
  },

  set(volumeArray) {
    progress.value = volumeArray[0]
  },
})

$defineProps<Props>()
</script>

<template>
  <div class="relative">
    <UiSlider
      class="top-0 h-1"
      :max="225"
      v-model:model-value="sliderValue"
      hide-thumb
    />
  </div>
</template>
