import type { TitlebarMenuTrigger } from "~/types/titlebar.types"

export default defineStore("titlebar", () => {
  const appConfig = useAppConfig()

  const menus = reactive<TitlebarMenuTrigger[]>([
    { label: "File", children: [] },
  ])
  const title = ref(appConfig.title)

  return { menus, title }
})
