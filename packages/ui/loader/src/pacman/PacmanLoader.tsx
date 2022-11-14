import { PacmanLoader as PacmanLoaderDefault } from 'react-spinners';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import { FC } from 'react';

const PacmanLoaderStyled = styled(PacmanLoaderDefault, {
  display: 'flex',
});

export type PacmanLoaderProps = {
  size?: number;
  margin?: number;
  colorName?: PikasColor;
  colorHex?: string;
  colorBubble?: PikasColor;
  colorBubbleHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const PacmanLoader: FC<PacmanLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  colorBubble,
  colorBubbleHex,
  margin,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <PacmanLoaderStyled
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
      css={{
        '& span:nth-child(3), & span:nth-child(4), & span:nth-child(5), & span:nth-child(6)':
          {
            backgroundColor:
              (colorBubbleHex && `${colorBubbleHex} !important`) ??
              (colorBubble && `var(--colors-${colorBubble}) !important`) ??
              undefined,
            zIndex: -1,
          },
      }}
    />
  );
};
