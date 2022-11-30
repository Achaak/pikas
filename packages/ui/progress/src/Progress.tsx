import type {
  BorderRadius,
  PikasColor,
  PikasCSS,
  PikasShadow,
} from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import { Skeleton } from '@pikas-ui/skeleton';
import {
  Root as ProgressPrimitiveRoot,
  Indicator,
} from '@radix-ui/react-progress';
import { Color } from '@pikas-utils/color';
import { FC } from 'react';

const Root = styled(ProgressPrimitiveRoot, {
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
});

const ProgressContent = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'hidden',
});

const ProgressIndicator = styled(Indicator, {
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

const Content = styled('span', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$WHITE',
  transition: '660ms cubic-bezier(0.65, 0, 0.35, 1)',
});

const ContentBack = styled(Content, {});

const ContentFront = styled(Content, {});

export type ProgressCSS = {
  container?: PikasCSS;
  content?: PikasCSS;
  indicator?: PikasCSS;
};

export type ProgressProps = {
  progress: number;
  max?: number;
  width?: number | string;
  height?: number | string;
  colorName?: PikasColor;
  backgroundColorName?: PikasColor;
  loading?: boolean;
  boxShadow?: PikasShadow | 'none';
  borderRadius?: BorderRadius;
  borderRadiusIndicator?: BorderRadius;
  getValueLabel?: (value: number, max: number) => string;
  content?: string;
  css?: ProgressCSS;
};

export const Progress: FC<ProgressProps> = ({
  progress = 0,
  height = 16,
  width = 280,
  backgroundColorName = 'GRAY',
  colorName = 'PRIMARY',
  max = 100,
  loading = false,
  boxShadow = 'DIMINUTION_1',
  borderRadius = 'round',
  borderRadiusIndicator = 'none',
  getValueLabel = (value, maxRes): string =>
    `${Math.round((value / maxRes) * 100)}%`,
  content,
  css,
}) => {
  const theme = useTheme();

  return (
    <Root
      value={progress}
      max={max}
      css={{
        width,
        height,
        backgroundColor: `$${backgroundColorName}`,
        br: borderRadius,

        '&:after': {
          br: borderRadius,
          boxShadow: `$${boxShadow}`,
        },

        ...css?.container,
      }}
      getValueLabel={getValueLabel}
    >
      <ProgressContent
        css={{
          br: borderRadius,
        }}
      >
        {loading ? (
          <Skeleton height="100%" width="100%" animation="wave" />
        ) : (
          <ProgressIndicator
            css={{
              transform: `translateX(-${
                100 - Math.round((progress / (max || 100)) * 100)
              }%)`,
              backgroundColor: `$${colorName}`,
              br: borderRadiusIndicator,

              ...css?.indicator,
            }}
          />
        )}
        <ContentBack
          css={{
            ...css?.content,
            clipPath: `inset(0 ${
              100 - Math.round((progress / (max || 100)) * 100)
            }% 0 0)`,
            color:
              theme && new Color(theme.colors[colorName].value).getContrast(),
          }}
        >
          {content}
        </ContentBack>
        <ContentFront
          css={{
            ...css?.content,
            clipPath: `inset(0 0 0 ${Math.round(
              (progress / (max || 100)) * 100
            )}%)`,
            color:
              theme &&
              new Color(theme.colors[backgroundColorName].value).getContrast(
                0.7
              ),
          }}
        >
          {content}
        </ContentFront>
      </ProgressContent>
    </Root>
  );
};
