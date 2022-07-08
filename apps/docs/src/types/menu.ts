type Items = {
  label: string
  href: string
}

type GroupeItem = {
  label: string
  items: Items[]
}

export type Menu = GroupeItem[]
