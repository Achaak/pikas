import type { PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'start',
  transition: 'all 0.3s ease',

  variants: {
    columnGap: {
      none: {},
      xs: {
        columnGap: 8,

        '@md': {
          columnGap: 8,
        },
        '@lg': {
          columnGap: 8,
        },
      },
      sm: {
        columnGap: 8,

        '@md': {
          columnGap: 8,
        },
        '@lg': {
          columnGap: 16,
        },
      },
      md: {
        columnGap: 8,

        '@md': {
          columnGap: 16,
        },
        '@lg': {
          columnGap: 24,
        },
      },
      lg: {
        columnGap: 16,

        '@md': {
          columnGap: 24,
        },
        '@lg': {
          columnGap: 32,
        },
      },
      xl: {
        columnGap: 24,

        '@md': {
          columnGap: 32,
        },
        '@lg': {
          columnGap: 40,
        },
      },
    },
    rowGap: {
      none: {},
      xs: {
        rowGap: 8,

        '@md': {
          rowGap: 8,
        },
        '@lg': {
          rowGap: 8,
        },
      },
      sm: {
        rowGap: 8,

        '@md': {
          rowGap: 8,
        },
        '@lg': {
          rowGap: 16,
        },
      },
      md: {
        rowGap: 8,

        '@md': {
          rowGap: 16,
        },
        '@lg': {
          rowGap: 24,
        },
      },
      lg: {
        rowGap: 16,

        '@md': {
          rowGap: 24,
        },
        '@lg': {
          rowGap: 32,
        },
      },
      xl: {
        rowGap: 24,

        '@md': {
          rowGap: 32,
        },
        '@lg': {
          rowGap: 40,
        },
      },
    },
  },
})

export type GridType = 'container' | 'item'

export interface GridBaseProps<CSS extends PikasCSS> {
  children?: React.ReactNode
  css?: CSS
  type: GridType
}

export type GridContainerRowGap =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | {
      default: string | number
      xs?: string | number
      sm?: string | number
      md?: string | number
      lg?: string | number
      xl?: string | number
    }

export type GridContainerColumnGap =
  | 'none'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | {
      default: string | number
      xs?: string | number
      sm?: string | number
      md?: string | number
      lg?: string | number
      xl?: string | number
    }

export type GridContainerCols = {
  default: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export type GridContainerDirection =
  | 'row'
  | 'column'
  | 'dense'
  | 'row dense'
  | 'column dense'

export type GridContainerJustifyContent =
  | 'start'
  | 'center'
  | 'end'
  | 'space-between'
  | 'space-around'

export type GridContainerAlignItems = 'start' | 'center' | 'end' | 'stretch'

export interface GridContainerProps<CSS extends PikasCSS>
  extends GridBaseProps<CSS> {
  type: 'container'
  rowGap?: GridContainerRowGap
  columnGap?: GridContainerColumnGap
  cols: GridContainerCols
  direction?: GridContainerDirection
  justifyContent?: GridContainerJustifyContent
  alignItems?: GridContainerAlignItems
}

export type GridItemCols = {
  default: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export type GridItemStart = {
  default: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export type GridItemEnd = {
  default: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export interface GridItemProps<CSS extends PikasCSS>
  extends GridBaseProps<CSS> {
  type: 'item'
  cols?: GridItemCols
  start?: GridItemStart
  end?: GridItemEnd
}

export type GridProps<CSS extends PikasCSS> =
  | GridContainerProps<CSS>
  | GridItemProps<CSS>

export const Grid = <CSS extends PikasCSS>(
  props: GridProps<CSS> = {
    type: 'container',
    rowGap: 'md',
    columnGap: 'md',
    cols: { default: 12 },
  }
): JSX.Element => {
  const { children, css, type } = props

  return (
    <Container
      rowGap={
        type === 'container' && typeof props.rowGap === 'string'
          ? props.rowGap
          : undefined
      }
      columnGap={
        type === 'container' && typeof props.columnGap === 'string'
          ? props.columnGap
          : undefined
      }
      css={{
        // CONTAINER
        ...(type === 'container' && {
          display: 'grid',
          gridAutoFlow: props.direction,
          justifyContent: props.justifyContent,
          alignItems: props.alignItems,
          width: '100%',
          gridTemplateColumns: `repeat(${props.cols.default}, 1fr)`,

          ...(typeof props.rowGap === 'object' && {
            rowGap: props.rowGap.default,
          }),
          ...(typeof props.columnGap === 'object' && {
            columnGap: props.columnGap.default,
          }),
        }),

        // ITEM
        ...(type === 'item' && {
          // Default to 1 column
          gridRowStart: 'auto',
          gridColumn: 'span 1',
          gridRow: `span 1`,
        }),
        ...(type === 'item' &&
          props.cols?.default && {
            gridColumn: `span ${props.cols.default} / span ${props.cols.default}`,
          }),
        ...(type === 'item' &&
          props.start?.default && {
            gridColumnStart: props.start.default,
          }),
        ...(type === 'item' &&
          props.end?.default && {
            gridColumnEnd: props.end.default,
          }),

        '@xs': {
          // CONTAINER
          ...(type === 'container' &&
            props.cols.xs && {
              gridTemplateColumns: `repeat(${props.cols.xs}, 1fr)`,

              ...(typeof props.rowGap === 'object' &&
                props.rowGap.xs && {
                  rowGap: props.rowGap.xs,
                }),
              ...(typeof props.columnGap === 'object' &&
                props.columnGap.xs && {
                  columnGap: props.columnGap.xs,
                }),
            }),

          // ITEM
          ...(type === 'item' && {
            ...(props.cols?.xs && {
              gridColumn: `span ${props.cols.xs} / span ${props.cols.xs}`,
            }),
            ...(props.start?.xs && {
              gridColumnStart: props.start.xs,
            }),
            ...(props.end?.xs && {
              gridColumnEnd: props.end.xs,
            }),
          }),
        },
        '@sm': {
          // CONTAINER
          ...(type === 'container' &&
            props.cols.sm && {
              gridTemplateColumns: `repeat(${props.cols.sm}, 1fr)`,

              ...(typeof props.rowGap === 'object' &&
                props.rowGap.sm && {
                  rowGap: props.rowGap.sm,
                }),
              ...(typeof props.columnGap === 'object' &&
                props.columnGap.sm && {
                  columnGap: props.columnGap.sm,
                }),
            }),

          // ITEM
          ...(type === 'item' && {
            ...(props.cols?.sm && {
              gridColumn: `span ${props.cols.sm} / span ${props.cols.sm}`,
            }),
            ...(props.start?.sm && {
              gridColumnStart: props.start.sm,
            }),
            ...(props.end?.sm && {
              gridColumnEnd: props.end.sm,
            }),
          }),
        },
        '@md': {
          // CONTAINER
          ...(type === 'container' &&
            props.cols.md && {
              gridTemplateColumns: `repeat(${props.cols.md}, 1fr)`,

              ...(typeof props.rowGap === 'object' &&
                props.rowGap.md && {
                  rowGap: props.rowGap.md,
                }),
              ...(typeof props.columnGap === 'object' &&
                props.columnGap.md && {
                  columnGap: props.columnGap.md,
                }),
            }),

          // ITEM
          ...(type === 'item' && {
            ...(props.cols?.md && {
              gridColumn: `span ${props.cols.md} / span ${props.cols.md}`,
            }),
            ...(props.start?.md && {
              gridColumnStart: props.start.md,
            }),
            ...(props.end?.md && {
              gridColumnEnd: props.end.md,
            }),
          }),
        },
        '@lg': {
          // CONTAINER
          ...(type === 'container' &&
            props.cols.lg && {
              gridTemplateColumns: `repeat(${props.cols.lg}, 1fr)`,

              ...(typeof props.rowGap === 'object' &&
                props.rowGap.lg && {
                  rowGap: props.rowGap.lg,
                }),
              ...(typeof props.columnGap === 'object' &&
                props.columnGap.lg && {
                  columnGap: props.columnGap.lg,
                }),
            }),

          // ITEM
          ...(type === 'item' && {
            ...(props.cols?.lg && {
              gridColumn: `span ${props.cols.lg} / span ${props.cols.lg}`,
            }),
            ...(props.start?.lg && {
              gridColumnStart: props.start.lg,
            }),
            ...(props.end?.lg && {
              gridColumnEnd: props.end.lg,
            }),
          }),
        },
        '@xl': {
          // CONTAINER
          ...(type === 'container' &&
            props.cols.xl && {
              gridTemplateColumns: `repeat(${props.cols.xl}, 1fr)`,

              ...(typeof props.rowGap === 'object' &&
                props.rowGap.xl && {
                  rowGap: props.rowGap.xl,
                }),
              ...(typeof props.columnGap === 'object' &&
                props.columnGap.xl && {
                  columnGap: props.columnGap.xl,
                }),
            }),

          // ITEM
          ...(type === 'item' && {
            ...(props.cols?.xl && {
              gridColumn: `span ${props.cols.xl} / span ${props.cols.xl}`,
            }),
            ...(props.start?.xl && {
              gridColumnStart: props.start.xl,
            }),
            ...(props.end?.xl && {
              gridColumnEnd: props.end.xl,
            }),
          }),
        },

        ...css,
      }}
    >
      {children}
    </Container>
  )
}
