<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from "radix-vue"
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  useForwardPropsEmits,
} from "radix-vue"
import { computed, type HTMLAttributes } from "vue"

import { cn } from "@/lib/utils"

type LocalProps = { class?: HTMLAttributes["class"]; hideThumb?: boolean }

const props = defineProps<SliderRootProps & LocalProps>()
const emits = defineEmits<SliderRootEmits>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <SliderRoot
    :class="
      cn(
        'relative flex touch-none select-none items-center',
        'data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full',
        'data-[orientation=vertical]:flex-col',
        props.class,
      )
    "
    v-bind="forwarded"
  >
    <SliderTrack
      :class="
        cn(
          'bg-primary/20 relative grow overflow-hidden rounded-full',
          'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5',
          'data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full',
        )
      "
    >
      <SliderRange
        :class="
          cn(
            'bg-primary absolute',
            'data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full',
          )
        "
      />
    </SliderTrack>
    <SliderThumb
      v-for="(_, key) in modelValue"
      :key="key"
      :class="`border-primary bg-background ring-offset-background
        focus-visible:ring-ring block h-5 w-5 rounded-full border-2
        transition-colors focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2 disabled:pointer-events-none
        disabled:opacity-50 ${!hideThumb || 'invisible'}`"
    />
  </SliderRoot>
</template>

