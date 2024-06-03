<script setup lang="ts">
import MessengerLayout from "../messenger/messenger.vue"
import WindowLayout from "../window/window.vue"
import SidebarLayout from "../sidebar/sidebar.vue"
import MainLayout from "../main/main.vue"
</script>

<template>
  <MessengerLayout>
    <WindowLayout>
      <SidebarLayout>
        <MainLayout>
          <slot />
        </MainLayout>
      </SidebarLayout>
    </WindowLayout>
  </MessengerLayout>
</template>
