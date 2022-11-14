import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';
import { RingLoader as RingLoaderDefault } from 'react-spinners';

export type RingLoaderProps = {
  size?: number | string;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const RingLoader: FC<RingLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <RingLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
    />
  );
};
