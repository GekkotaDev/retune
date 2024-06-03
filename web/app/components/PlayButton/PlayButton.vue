<script setup lang="ts">
type PlaybackState = "playing" | "paused" | "start"

const state = defineModel<PlaybackState>("icon", {
  default: "start",
})

const radius = computed(() =>
  match(state.value)
    .with(undefined, () => {
      state.value = "start"
      return ""
    })
    .with("playing", () => "")
    .with(P.union("start", "paused"), () => "rounded-[2rem]")
    .exhaustive(),
)

const onClick = () =>
  match(state.value)
    .with("paused", () => (state.value = "playing"))
    .with("playing", () => (state.value = "paused"))
    .with(P.union(undefined, "start"), () => (state.value = "playing"))
    .exhaustive()
</script>

<template>
  <UiButton
    :class="`${radius} size-11 min-w-11 cursor-pointer transition-all duration-500 ease-out`"
    size="icon"
    @click="onClick"
  >
    <IconCSS
      v-if="state === 'start'"
      name="material-symbols:play-arrow-rounded"
      class="scale-[2.5]"
    />

    <PausePlayIcon v-if="state === 'paused'" class="size-8" :speed="0.2" />
    <PlayPauseIcon v-if="state === 'playing'" class="size-8" :speed="0.25" />
  </UiButton>
</template>
