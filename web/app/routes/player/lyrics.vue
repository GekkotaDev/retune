<script setup lang="ts"></script>

<template>
  <div class="scrollbar-none flex h-full flex-row space-x-8 overflow-y-hidden">
    <div class="flex flex-col-reverse space-y-2 pb-24">
      <Ripple>
        <UiButton size="icon" variant="ghost">
          <Icon name="material-symbols:sync-rounded" class="size-8" />
        </UiButton>
      </Ripple>

      <Ripple>
        <UiButton size="icon" variant="ghost">
          <Icon name="material-symbols:edit-note-rounded" class="size-8" />
        </UiButton>
      </Ripple>

      <Ripple>
        <UiButton size="icon" variant="ghost">
          <Icon name="material-symbols:refresh-rounded" class="size-8" />
        </UiButton>
      </Ripple>
    </div>

    <div
      class="scrollbar-none relative mb-16 w-full overflow-y-hidden bg-fuchsia-500/0"
    >
      <div
        aria-hidden
        class="from-card pointer-events-none absolute h-20 w-full bg-gradient-to-b"
      />

      <div class="scrollbar-none h-full space-y-4 overflow-y-auto py-16">
        <p>We're no strangers to love</p>
        <p>You know the rules and so do I (do I)</p>
        <p>A full commitment's what I'm thinking of</p>
        <p>You wouldn't get this from any other guy</p>
        <br />
        <p>I just wanna tell you how I'm feeling</p>
        <p>Gotta make you understand</p>
        <br />
        <p>Never gonna give you up</p>
        <p>Never gonna let you down</p>
        <p>Never gonna run around and desert you</p>
        <p>Never gonna make you cry</p>
        <p>Never gonna say goodbye</p>
        <p>Never gonna tell a lie and hurt you</p>
        <br />
        <p>We've known each other for so long</p>
        <p>Your heart's been aching, but you're too shy to say it (say it)</p>
        <p>Inside, we both know what's been going on (going on)</p>
        <p>We know the game and we're gonna play it</p>
        <br />
        <p>And if you ask me how I'm feeling</p>
        <p>Don't tell me you're too blind to see</p>
      </div>

      <div
        aria-hidden
        class="to-card pointer-events-none absolute bottom-0 h-20 w-full bg-gradient-to-b from-transparent"
      />
    </div>
  </div>
</template>

<style scoped>
p {
  @apply text-2xl font-semibold;
}
</style>
