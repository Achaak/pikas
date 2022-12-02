import * as Loader from 'react-spinners';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import { FC } from 'react';

export type FadeLoaderProps = {
  height?: number;
  width?: number;
  radius?: number;
  margin?: number;
  colorName?: PikasColor;
  colorHex?: string;
  loading?: boolean;
};

export const FadeLoader: FC<FadeLoaderProps> = ({
  height,
  width,
  radius,
  margin,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
}) => {
  const theme = useTheme();

  return (
    <Loader.FadeLoader
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      color={colorHex ?? theme?.colors[colorName].value}
      loading={loading}
    />
  );
};
