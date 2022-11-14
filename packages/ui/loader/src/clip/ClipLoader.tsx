import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';
import { ClipLoader as ClipLoaderDefault } from 'react-spinners';

export type ClipLoaderProps = {
  size?: number | string;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
  speedMultiplier?: number;
};

export const ClipLoader: FC<ClipLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme();

  return (
    <ClipLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
    />
  );
};
