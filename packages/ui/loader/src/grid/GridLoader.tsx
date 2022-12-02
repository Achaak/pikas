import * as Loader from 'react-spinners';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';

export type GridLoaderProps = {
  size?: number;
  margin?: number;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const GridLoader: FC<GridLoaderProps> = ({
  size,
  margin,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <Loader.GridLoader
      size={size}
      speedMultiplier={speedMultiplier}
      margin={margin}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
    />
  );
};
