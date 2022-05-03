export const gap = {
  customGap: (value: number): Record<string, unknown> => {
    const supported = {
      gap: value,
    }

    const notSupported = {
      gap: 0,

      '& > *': {
        margin: value / 2,
      },
    }

    return {
      ...supported,

      '@supports (-webkit-appearance:none) and (stroke-color:transparent)': {
        ...notSupported,
      },
    }
  },
  customColumnGap: (value: number): Record<string, unknown> => {
    const supported = {
      columnGap: `${value}px`,
    }

    const notSupported = {
      columnGap: 0,

      '& > *:not(:last-child):not(:first-child)': {
        marginLeft: value / 2,
        marginRight: value / 2,
      },
      '& > *:first-child': {
        marginRight: value / 2,
      },
      '& > *:last-child': {
        marginLeft: value / 2,
      },
    }

    return {
      ...supported,

      '@supports (-webkit-appearance:none) and (stroke-color:transparent)': {
        ...notSupported,
      },
    }
  },
  customRowGap: (value: number): Record<string, unknown> => {
    const supported = {
      rowGap: `${value}px`,
    }

    const notSupported = {
      rowGap: 0,

      '& > *:not(:last-child):not(:first-child)': {
        marginTop: value / 2,
        marginBottom: value / 2,
      },
      '& > *:first-child': {
        marginBottom: value / 2,
      },
      '& > *:last-child': {
        marginTop: value / 2,
      },
    }

    return {
      ...supported,

      '@supports (-webkit-appearance:none) and (stroke-color:transparent)': {
        ...notSupported,
      },
    }
  },
}
