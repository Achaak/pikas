import type { BorderRadius, PikasConfigRecord } from '@pikas-ui/styles'
import { styled, keyframes } from '@pikas-ui/styles'

const wave = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '50%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(100%)',
  },
})

const pulse = keyframes({
  '0%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.4,
  },
  '100%': {
    opacity: 1,
  },
})

const Container = styled('div', {
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',

  variants: {
    animation: {
      pulse: {
        backgroundColor: '$GRAY_LIGHT',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          animation: `${pulse} 2s 0.5s linear infinite`,
          backgroundColor: '$GRAY_LIGHTER',
        },
      },
      wave: {
        overflow: 'hidden',
        backgroundColor: '$GRAY_LIGHT',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          backgroundColor: '$GRAY_LIGHTER',
        },

        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          background:
            'linear-gradient(90deg, $TRANSPARENT, $GRAY_LIGHTER, $TRANSPARENT)',
          animation: `${wave} 3s 0.5s linear infinite`,
        },
      },
      false: {
        backgroundColor: '$GRAY_LIGHT',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
          backgroundColor: '$GRAY_LIGHTER',
        },
      },
    },
  },
})

export type SkeletonAnimation = 'pulse' | 'wave' | false

export interface SkeletonProps<Config extends PikasConfigRecord = any> {
  animation?: SkeletonAnimation
  width?: string | number
  height?: string | number
  borderRadius?: BorderRadius
  css?: Config['CSS']
}

export const Skeleton = <Config extends PikasConfigRecord>({
  animation = 'pulse',
  borderRadius = 'sm',
  height,
  width,
  css,
}: SkeletonProps<Config>): JSX.Element => {
  return (
    <Container
      css={{
        width,
        height,
        br: borderRadius,

        ...css,
      }}
      animation={animation}
    ></Container>
  )
}
