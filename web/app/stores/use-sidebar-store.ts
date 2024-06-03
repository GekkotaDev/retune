export default defineStore("sidebar", () => {
  const items: (SidebarButton | SidebarMenu)[] = [
    {
      type: "menu",
      icon: "",
      label: "Test",
      children: [
        {
          type: "button",
          label: "Test",
          icon: "",
          action: () => {},
        },
      ],
    },
  ]
  const width = ref(20)

  return { items, width }
})
