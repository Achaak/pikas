import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';
import * as Loader from 'react-spinners';

export type BeatLoaderProps = {
  size?: number | string;
  margin?: number;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const BeatLoader: FC<BeatLoaderProps> = ({
  size,
  margin,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <Loader.BeatLoader
      size={size}
      margin={margin}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
      speedMultiplier={speedMultiplier}
    />
  );
};
