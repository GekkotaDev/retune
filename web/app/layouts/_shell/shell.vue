<script setup lang="ts">
import Scaffold from "../scaffold/scaffold.vue"
</script>

<template>
  <Scaffold>
    <template #sidebar>
      <aside>
        <ul class="flex-col space-y-2 overflow-hidden">
          <p class="ml-11 text-nowrap text-2xl font-semibold">Placeholder</p>

          <li>
            <Ripple>
              <UiButton
                variant="ghost"
                size="xs"
                class="flex hover:bg-neutral-500/50"
              >
                <div
                  class="flex w-full items-center space-x-2 overflow-hidden pl-0"
                >
                  <Icon
                    name="material-symbols:play-circle-rounded"
                    class="size-7 min-w-7"
                  />
                  <p class="select-none">Lorem Ipsum</p>
                </div>
              </UiButton>
            </Ripple>
          </li>
          <li>
            <Ripple>
              <UiButton
                variant="ghost"
                size="xs"
                class="flex hover:bg-neutral-500/50"
              >
                <div
                  class="flex w-full items-center space-x-2 overflow-hidden pl-0"
                >
                  <Icon name="material-symbols:browse" class="size-7 min-w-7" />
                  <p class="select-none">dolor sit amet</p>
                </div>
              </UiButton>
            </Ripple>
          </li>
          <li>
            <Ripple>
              <UiButton
                variant="ghost"
                size="xs"
                class="flex hover:bg-neutral-500/50"
              >
                <div
                  class="flex w-full items-center space-x-2 overflow-hidden pl-0"
                >
                  <Icon
                    name="material-symbols:radio-rounded"
                    class="size-7 min-w-7"
                  />
                  <p class="select-none">consectetur</p>
                </div>
              </UiButton>
            </Ripple>
          </li>
        </ul>
      </aside>
    </template>

    <template #header>
      <slot name="header" />
    </template>

    <slot />
  </Scaffold>
</template>
