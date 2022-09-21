import type {
  BorderRadiusType,
  ColorsType,
  ShadowsType,
} from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Skeleton } from '@pikas-ui/skeleton'
import React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

const Root = styled(ProgressPrimitive.Root, {
  position: 'relative',
  background: '$BLACK',
  zIndex: '$HIGH',

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)',

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
})
const Content = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'hidden',
})

const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

export interface ProgressProps {
  progress: number
  max?: number
  width?: number | string
  height?: number | string
  color?: ColorsType
  backgroundColor?: ColorsType
  loading?: boolean
  boxShadow?: ShadowsType | 'none'
  borderRadius?: BorderRadiusType
  borderRadiusIndicator?: BorderRadiusType
  getValueLabel?: (value: number, max: number) => string
}

export const Progress: React.FC<ProgressProps> = ({
  progress,
  height,
  width,
  backgroundColor,
  color,
  max,
  loading,
  boxShadow,
  borderRadius,
  borderRadiusIndicator,
  getValueLabel,
}) => {
  return (
    <Root
      value={progress}
      max={max}
      css={{
        width,
        height,
        backgroundColor: `$${backgroundColor}`,
        br: borderRadius,

        '&:after': {
          br: borderRadius,
          boxShadow: `$${boxShadow}`,
        },
      }}
      getValueLabel={getValueLabel}
    >
      <Content
        css={{
          br: borderRadius,
        }}
      >
        {loading ? (
          <Skeleton height="100%" width="100%" animation="wave" />
        ) : (
          <ProgressIndicator
            css={{
              transform: `translateX(-${100 - progress}%)`,
              backgroundColor: `$${color}`,
              br: borderRadiusIndicator,
            }}
          />
        )}
      </Content>
    </Root>
  )
}

Progress.defaultProps = {
  progress: 0,
  width: 280,
  height: 16,
  color: 'PRIMARY',
  backgroundColor: 'GRAY',
  max: 100,
  loading: false,
  boxShadow: 'DIMINUTION_1',
  borderRadius: 'round',
  borderRadiusIndicator: 'none',
  getValueLabel: (value, max): string => `${Math.round((value / max) * 100)}%`,
}
