<script setup lang="ts">
// https://stackoverflow.com/a/25279340

type Props = {
  duration: number
}

const progress = defineModel<number>("progress", { required: true })
const volume = defineModel<number>("volume", { required: true })

$defineProps<Props>()
</script>

<template>
  <div class="absolute bottom-0 w-full p-3">
    <UiCard
      class="relative size-full h-24 overflow-hidden rounded-t-sm shadow-md"
    >
      <PlayerSlider :duration v-model:progress="progress" />

      <div class="flex h-full items-center space-x-4">
        <Spacer width="w-1" />

        <!-- Playback Controls -->
        <PlayButton />
        <PlayerNext />
        <PlayerBack />
        <PlayerVolume v-model:volume="volume" />

        <!-- Info -->
        <PlayerInfo />

        <Spacer />

        <!-- Additional Controls -->
        <!--? Like -->
        <Ripple>
          <UiButton size="icon" variant="ghost">
            <Icon
              name="material-symbols:thumb-up-outline-rounded"
              class="size-8"
            />
          </UiButton>
        </Ripple>

        <!--? Playlist -->
        <Ripple>
          <UiButton size="icon" variant="ghost">
            <Icon name="material-symbols:playlist-add-rounded" class="size-8" />
          </UiButton>
        </Ripple>

        <!--? Expanded view -->
        <Ripple>
          <UiButton size="icon" variant="ghost">
            <Icon name="material-symbols:lyrics-rounded" class="size-8" />
          </UiButton>
        </Ripple>

        <!--? Devices -->
        <Ripple>
          <UiButton size="icon" variant="ghost">
            <Icon
              name="material-symbols:speaker-group-rounded"
              class="size-8"
            />
          </UiButton>
        </Ripple>

        <!--? Additional-->
        <Ripple>
          <UiButton size="icon" variant="ghost">
            <!--* Popover -->
            <Icon name="material-symbols:more-vert" class="size-8" />
          </UiButton>
        </Ripple>

        <Spacer width="w-1" />
      </div>
    </UiCard>
  </div>
</template>
