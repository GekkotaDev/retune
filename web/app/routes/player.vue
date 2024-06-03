<script setup lang="ts"></script>

<template>
  <NuxtLayout name="scaffold">
    <div class="flex h-full flex-col">
      <SongInfo />

      <UiSeparator class="my-4" />

      <UiTabs default-value="lyrics">
        <UiTabsList class="grid w-fit auto-cols-fr grid-flow-col">
          <UiTabsTrigger
            value="lyrics"
            @click="() => navigateTo('/player/lyrics')"
          >
            Lyrics
          </UiTabsTrigger>
          <UiTabsTrigger value="next" @click="() => navigateTo('/player/next')">
            Next
          </UiTabsTrigger>
          <UiTabsTrigger
            value="about"
            @click="() => navigateTo('/player/about')"
          >
            About
          </UiTabsTrigger>
          <UiTabsTrigger
            value="more"
            class="px-4"
            @click="() => navigateTo('/player/more')"
          >
            More like this
          </UiTabsTrigger>
        </UiTabsList>
      </UiTabs>

      <Spacer height="h-5" />

      <NuxtPage keepalive />
    </div>
  </NuxtLayout>
</template>
