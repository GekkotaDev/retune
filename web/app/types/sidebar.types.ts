export type SidebarButton = {
  type: "button"
  icon: string
  label: string
  action: () => void
}

export type SidebarMenu = {
  type: "menu"
  icon: string
  label: string
  children: SidebarButton[]
}

export type SidebarProps = {
  items: (SidebarButton | SidebarMenu)[]
}
