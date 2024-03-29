import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';
import * as Loader from 'react-spinners';

export type BarLoaderProps = {
  width?: number;
  height?: number;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const BarLoader: FC<BarLoaderProps> = ({
  width,
  height,
  colorName = 'primary',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <Loader.BarLoader
      width={width}
      height={height}
      speedMultiplier={speedMultiplier}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
    />
  );
};
