import { routes } from '@pikas-utils/router'

export const { getLink } = routes({
  origin: 'https://docs.pikas.io',
  links: {
    introduction: '/',
    router: '/router',
    screen: '/screen',
  },
})
