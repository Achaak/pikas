import { routes } from '@pikas-utils/router'

export const { getLink } = routes({
  origin: 'https://docs.pikas.io',
  links: {
    introduction: '/',
    alert: '/components/alert',
    button: '/components/button',
    checkbox: '/components/checkbox',
    contextMenu: '/components/context-menu',
    dropdownMenu: '/components/dropdown-menu',
    icons: '/components/icons',
    loader: '/components/loader',
    searchbar: '/components/searchbar',
    select: '/components/select',
    separator: '/components/separator',
    slider: '/components/slider',
    switch: '/components/switch',
    table: '/components/table',
    text: '/components/text',
    textarea: '/components/textarea',
    textfield: '/components/textfield',
    tooltip: '/components/tooltip',
    styles: '/utilities/styles',
  },
})
