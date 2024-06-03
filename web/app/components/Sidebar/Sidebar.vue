<script setup lang="ts">
import type { SidebarProps } from "#imports"

$defineProps<SidebarProps>()
</script>

<template>
  <UiAccordion type="multiple" class="space-y-4">
    <template v-for="(item, index) in items">
      <UiButton
        v-if="item.type === 'button'"
        class="flex justify-start space-x-2 pl-1"
        variant="ghost"
        @click="item.action"
      >
        <Icon :name="item.icon" class="size-8 min-w-8" />
        <p>{{ item.label }}</p>
      </UiButton>

      <UiAccordionItem
        v-if="item.type === 'menu'"
        :value="`${index}:${item.label}`"
      >
        <UiAccordionTrigger>
          <template #icon>
            <div aria-hidden />
          </template>

          <UiButton class="w-full justify-start space-x-2 pl-1" variant="ghost">
            <Icon :name="item.icon" class="size-8 min-w-8" />
            <p>{{ item.label }}</p>
          </UiButton>
        </UiAccordionTrigger>

        <UiAccordionContent v-for="child in item.children" class="space-y-4">
          <UiButton
            class="flex justify-start space-x-2 pl-1"
            variant="ghost"
            @click="child.action"
          >
            <Icon :name="child.icon" class="size-8 min-w-8" />
            <p>{{ child.label }}</p>
          </UiButton>
        </UiAccordionContent>
      </UiAccordionItem>
    </template>
  </UiAccordion>
</template>
