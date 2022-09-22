import { globalCss } from '@pikas-ui/styles'

export const customGlobalCss = globalCss({
  'html, body, #__next': {
    fontFamily: '$roboto',
    scrollBehavior: 'smooth',
    color: '$BLACK',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  li: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
  },

  '::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
    br: 'md',
  },
  '::-webkit-scrollbar-track': {
    br: 'md',
    backgroundColor: '$GRAY',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$GRAY_DARK',
    br: 'md',
  },
})
