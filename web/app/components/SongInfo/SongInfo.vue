<template>
  <div class="flex max-h-fit space-x-4">
    <div class="aspect-square bg-neutral-500/50" />

    <div class="flex flex-col space-y-4">
      <h1 class="text-4xl font-extrabold">
        Song <br />
        Name
      </h1>

      <div class="flex flex-row space-x-2">
        <p>Artist</p>

        <UiSeparator orientation="vertical" />

        <p>Album</p>

        <UiSeparator orientation="vertical" />

        <p>2024</p>
      </div>

      <div class="flex flex-row space-x-2">
        <Ripple>
          <UiButton size="icon" variant="ghost">
            <Icon
              name="material-symbols:download-for-offline-rounded"
              class="size-8"
              @click="navigateTo('/')"
            />
          </UiButton>
        </Ripple>
      </div>
    </div>
  </div>
</template>
