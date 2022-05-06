import { theme } from '@pikas-ui/styles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {},
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.WHITE.value,
      },
      {
        name: 'dark',
        value: theme.colors.BLACK.value,
      },
      {
        name: 'primary',
        value: theme.colors.PRIMARY.value,
      },
      {
        name: 'primary-lightest-1',
        value: theme.colors.PRIMARY_LIGHTEST_1.value,
      },
      {
        name: 'gray-lightest-2',
        value: theme.colors.GRAY_LIGHTEST_2.value,
      },
    ],
  },
}
