import { globalCss } from '@pikas-ui/styles';
export * from '@pikas-ui/styles';

export const customGlobalCss = globalCss({
  'html, body, #__next': {
    fontFamily: '$roboto',
    scrollBehavior: 'smooth',
    color: '$black',
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
    width: '$8',
    height: '$8',
    borderRadius: '$lg',
  },
  '::-webkit-scrollbar-track': {
    borderRadius: '$lg',
    backgroundColor: '$gray-fixed',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$gray-fixed-dark',
    borderRadius: '$lg',
  },
});
