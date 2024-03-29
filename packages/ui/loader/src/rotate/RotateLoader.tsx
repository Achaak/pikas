import * as Loader from 'react-spinners';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';

export type RotateLoaderProps = {
  size?: number;
  margin?: number;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const RotateLoader: FC<RotateLoaderProps> = ({
  size,
  colorName = 'primary',
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <Loader.RotateLoader
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
    />
  );
};
