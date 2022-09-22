type Items = {
  label: string
  href: string
  disabled?: boolean
}

type GroupeItem = {
  label: string
  items: Items[]
}

export type Menu = GroupeItem[]
