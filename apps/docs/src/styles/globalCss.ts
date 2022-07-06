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
    width: '7px',
    height: '7px',
    borderRadius: '10px',
  },
  '::-webkit-scrollbar-track': {
    borderRadius: '10px',
    backgroundColor: '$WHITE',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$GRAY',
    borderRadius: '10px',
  },
})
