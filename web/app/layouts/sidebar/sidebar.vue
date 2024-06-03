<script setup lang="ts">
const { progress, volume } = toRefs(usePlaybackStore())
const { items, width } = toRefs(useSidebarStore())
</script>

<template>
  <UiResizablePanelGroup
    class="size-full"
    direction="horizontal"
    auto-save-id="window-layout"
  >
    <SplitterPanel class="min-w-10">
      <Sidebar :items />
    </SplitterPanel>

    <UiResizableHandle class="invisible" />

    <SplitterPanel :min-size="55">
      <slot />
    </SplitterPanel>
  </UiResizablePanelGroup>
</template>
