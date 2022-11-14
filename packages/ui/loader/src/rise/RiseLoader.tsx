import { RiseLoader as RiseLoaderDefault } from 'react-spinners';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';

export type RiseLoaderProps = {
  size?: number;
  margin?: number;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const RiseLoader: FC<RiseLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <RiseLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
    />
  );
};
