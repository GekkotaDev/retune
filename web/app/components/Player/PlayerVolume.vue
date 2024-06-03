<script setup lang="ts">
const muted = defineModel<boolean>("muted", { default: false })
const volume = defineModel<number>("volume", { required: true })

const volumeIcon = computed(() => {
  if (muted.value) return "muted"
  if (volume.value >= 50) return "full"
  if (volume.value > 0) return "half"
  return "empty"
})

const sliderValue = computed<[number]>({
  get() {
    return [volume.value]
  },

  set(volumeArray) {
    volume.value = volumeArray[0]
  },
})

const onClick = () => (muted.value = !muted.value)
</script>

<template>
  <UiHoverCard :open-delay="0">
    <UiHoverCardTrigger as-child>
      <Ripple>
        <UiButton size="icon" variant="ghost" @click="onClick">
          <Icon
            v-show="volumeIcon === 'full'"
            class="size-8 cursor-pointer"
            name="material-symbols:volume-up-rounded"
          />
          <Icon
            v-show="volumeIcon === 'half'"
            class="size-8 cursor-pointer"
            name="material-symbols:volume-down-rounded"
          />
          <Icon
            v-show="volumeIcon === 'empty'"
            class="size-8 cursor-pointer"
            name="material-symbols:volume-mute-rounded"
          />
          <Icon
            v-show="volumeIcon === 'muted'"
            class="size-8 cursor-pointer"
            name="material-symbols:volume-off-rounded"
          />
        </UiButton>
      </Ripple>
    </UiHoverCardTrigger>

    <UiHoverCardContent
      v-if="!muted"
      align="center"
      side="top"
      class="h-64 w-fit"
    >
      <UiSlider
        :max="100"
        v-model:model-value="sliderValue"
        orientation="vertical"
      />
    </UiHoverCardContent>
  </UiHoverCard>
</template>
