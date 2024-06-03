<script setup lang="ts"></script>

<template>
  <NuxtLayout name="scaffold">
    <template #header>
      <h1 class="text-4xl font-extrabold">Browse</h1>
    </template>

    <p>abc</p>

    <UiButton @click="() => navigateTo('/player')"> Player Demo </UiButton>
  </NuxtLayout>
</template>
