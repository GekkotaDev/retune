<script setup lang="ts">
type Props = {
  speed?: number
}

const { speed = 0.4 } = $defineProps<Props>()
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <g
      fill="#888888"
      stroke="#888888"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      class="fill-current stroke-current"
    >
      <path d="M13 15L8 18L8 6L13 9L13 15">
        <animate
          fill="freeze"
          attributeName="d"
          :dur="`${speed}s`"
          values="M13 15L8 18L8 6L13 9L13 15;M9 18L7 18L7 6L9 6L9 18"
        />
      </path>
      <path d="M13 9L18 12L18 12L13 15L13 9">
        <animate
          fill="freeze"
          attributeName="d"
          :dur="`${speed}s`"
          values="M13 9L18 12L18 12L13 15L13 9;M15 6L17 6L17 18L15 18L15 6"
        />
      </path>
    </g>
  </svg>
</template>
