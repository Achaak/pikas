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

export interface GridBaseProps {
  children?: React.ReactNode
  css?: PikasCSS
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

export interface GridContainerProps extends GridBaseProps {
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

export type GridItemOrder = {
  default: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
}

export interface GridItemProps extends GridBaseProps {
  type: 'item'
  cols?: GridItemCols
  start?: GridItemStart
  end?: GridItemEnd
  order?: GridItemOrder
}

export type GridProps = GridContainerProps | GridItemProps

export const Grid: React.FC<GridProps> = (
  props: GridProps = {
    type: 'container',
    rowGap: 'md',
    columnGap: 'md',
    cols: { default: 12 },
  }
) => {
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
          gridCols: 'span 1',
          gridRow: `span 1`,
        }),
        ...(type === 'item' &&
          props.cols?.default && {
            gridCols: `span ${props.cols.default} / span ${props.cols.default}`,
          }),
        ...(type === 'item' &&
          props.start?.default && {
            gridColsStart: props.start.default,
          }),
        ...(type === 'item' &&
          props.end?.default && {
            gridColsEnd: props.end.default,
          }),
        ...(type === 'item' &&
          props.order?.default && {
            order: props.order.default,
          }),

        ...css,

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
              gridCols: `span ${props.cols.xs} / span ${props.cols.xs}`,
            }),
            ...(props.start?.xs && {
              gridColsStart: props.start.xs,
            }),
            ...(props.end?.xs && {
              gridColsEnd: props.end.xs,
            }),
            ...(props.order?.xs && {
              order: props.order.xs,
            }),
          }),

          ...css?.['@xs'],
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
              gridCols: `span ${props.cols.sm} / span ${props.cols.sm}`,
            }),
            ...(props.start?.sm && {
              gridColsStart: props.start.sm,
            }),
            ...(props.end?.sm && {
              gridColsEnd: props.end.sm,
            }),
            ...(props.order?.sm && {
              order: props.order.sm,
            }),
          }),

          ...css?.['@sm'],
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
              gridCols: `span ${props.cols.md} / span ${props.cols.md}`,
            }),
            ...(props.start?.md && {
              gridColsStart: props.start.md,
            }),
            ...(props.end?.md && {
              gridColsEnd: props.end.md,
            }),
            ...(props.order?.md && {
              order: props.order.md,
            }),
          }),

          ...css?.['@md'],
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
              gridCols: `span ${props.cols.lg} / span ${props.cols.lg}`,
            }),
            ...(props.start?.lg && {
              gridColsStart: props.start.lg,
            }),
            ...(props.end?.lg && {
              gridColsEnd: props.end.lg,
            }),
            ...(props.order?.lg && {
              order: props.order.lg,
            }),
          }),

          ...css?.['@lg'],
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
              gridCols: `span ${props.cols.xl} / span ${props.cols.xl}`,
            }),
            ...(props.start?.xl && {
              gridColsStart: props.start.xl,
            }),
            ...(props.end?.xl && {
              gridColsEnd: props.end.xl,
            }),
            ...(props.order?.xl && {
              order: props.order.xl,
            }),
          }),

          ...css?.['@xl'],
        },
      }}
    >
      {children}
    </Container>
  )
}
