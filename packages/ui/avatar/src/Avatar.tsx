import {
  Root as AvatarPrimitiveRoot,
  Image as AvatarPrimitiveImage,
  Fallback as AvatarPrimitiveFallback,
} from '@radix-ui/react-avatar';
import type { BorderRadius, PikasColor, PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { ImageLoadingStatus } from '@radix-ui/react-avatar';
import { Skeleton } from '@pikas-ui/skeleton';
import { FC } from 'react';

export type { ImageLoadingStatus } from '@radix-ui/react-avatar';

const Root = styled(AvatarPrimitiveRoot, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  position: 'relative',
});

const Image = styled(AvatarPrimitiveImage, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

const Fallback = styled(AvatarPrimitiveFallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  fontWeight: '$BOLD',
});

export type AvatarCSS = {
  container?: PikasCSS;
  image?: PikasCSS;
  fallback?: PikasCSS;
};

export type AvatarProps = {
  alt?: string;
  src?: string;
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
  delayMs?: number;
  fallback?: string;
  fallbackColorName?: PikasColor;
  fallbackBackgroundColorName?: PikasColor;
  css?: AvatarCSS;
  size?: number;
  borderRadius?: BorderRadius;
  loading?: boolean;
};

export const Avatar: FC<AvatarProps> = ({
  alt,
  src,
  onLoadingStatusChange,
  delayMs,
  fallback,
  fallbackBackgroundColorName = 'PRIMARY_LIGHTEST_2',
  fallbackColorName = 'PRIMARY',
  css,
  size = 80,
  borderRadius = 'round',
  loading = false,
}) => (
  <Root
    css={{
      height: size,
      minHeight: size,
      width: size,
      minWidth: size,
      br: borderRadius,
      ...css?.container,
    }}
  >
    {loading ? (
      <Skeleton
        animation="pulse"
        width="100%"
        height="100%"
        borderRadius={borderRadius}
        css={{
          position: 'absolute',
        }}
      />
    ) : null}

    <Image
      src={src}
      alt={alt}
      onLoadingStatusChange={onLoadingStatusChange}
      css={{
        ...css?.image,
      }}
    />
    <Fallback
      delayMs={delayMs}
      css={{
        fontSize: size ? size / 2.5 : undefined,
        color: `$${fallbackColorName}`,
        backgroundColor: `$${fallbackBackgroundColorName}`,
        ...css?.fallback,
      }}
    >
      {fallback}
    </Fallback>
  </Root>
);
