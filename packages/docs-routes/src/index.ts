import { routes } from '@pikas-utils/router';

export const docsUIRoutes = routes({
  origin: 'https://pikas-ui.vercel.app',
  links: {
    introduction: '/',
    gettingStarted: '/docs/getting-started',
    createPikas: '/docs/createPikas',
    alert: '/components/alert',
    avatar: '/components/avatar',
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
    tabs: '/components/tabs',
    text: '/components/text',
    textarea: '/components/textarea',
    textfield: '/components/textfield',
    tooltip: '/components/tooltip',
    skeleton: '/components/skeleton',
    dialog: '/components/dialog',
    progress: '/components/progress',
    title: '/components/title',
    toast: '/components/toast',
    grid: '/components/grid',
    dropzone: '/components/dropzone',
    explorer: '/components/explorer',
    drawer: '/components/drawer',
    radioGroup: '/components/radio-group',
    colorPicker: '/components/color-picker',
    multiInputField: '/components/multi-input-field',
    toggleGroup: '/components/toggle-group',
    badge: '/components/badge',
    colorsManager: '/tools/colors-manager',
    styles: '/utilities/styles',
    useTheme: '/utilities/useTheme',
  },
});

export const docsUtilsRoutes = routes({
  origin: 'https://pikas-utils.vercel.app',
  links: {
    introduction: '/',
    router: '/router',
    screen: '/screen',
    file: '/file',
    keyboard: '/keyboard',
  },
});
