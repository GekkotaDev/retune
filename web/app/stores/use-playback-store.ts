export default defineStore(
  "playback",
  () => {
    const playback = ref(false)
    const speed = ref(1)
    const volume = ref(100)
    const loop = ref(0)
    const progress = ref(0)

    return { loop, playback, progress, speed, volume }
  },
  {
    persist: {
      paths: ["speed", "volume", "loops", "progress"],
    },
  },
)
