import type { PikasRadius, PikasCSS } from '@pikas-ui/styles';
import { styled, keyframes } from '@pikas-ui/styles';
import { FC } from 'react';

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
});

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
});

const Container = styled('div', {
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',

  variants: {
    animation: {
      pulse: {
        backgroundColor: '$gray-light',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          animation: `${pulse.name} 2s 0.5s linear infinite`,
          backgroundColor: '$gray-lighter',
        },
      },
      wave: {
        overflow: 'hidden',
        backgroundColor: '$gray-light',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          backgroundColor: '$gray-lighter',
        },

        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          width: '100%',
          background:
            'linear-gradient(90deg, $transparent, $gray-lighter, $transparent)',
          animation: `${wave.name} 3s 0.5s linear infinite`,
        },
      },
      false: {
        backgroundColor: '$gray-light',

        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.7,
          backgroundColor: '$gray-lighter',
        },
      },
    },
  },
});

export type SkeletonAnimation = 'pulse' | 'wave' | false;

export type SkeletonProps = {
  animation?: SkeletonAnimation;
  width?: number | string;
  height?: number | string;
  borderRadius?: PikasRadius;
  css?: PikasCSS;
};

export const Skeleton: FC<SkeletonProps> = ({
  animation = 'pulse',
  borderRadius = 'sm',
  height,
  width,
  css,
}) => (
  <Container
    css={{
      width,
      height,
      borderRadius: `$${borderRadius}`,

      ...css,
    }}
    animation={animation}
  ></Container>
);
