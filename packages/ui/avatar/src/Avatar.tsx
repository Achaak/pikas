import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { BorderRadiusType, ColorsType, CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { ImageLoadingStatus } from '@radix-ui/react-avatar'
import { Skeleton } from '@pikas-ui/skeleton'

export type { ImageLoadingStatus } from '@radix-ui/react-avatar'

const Root = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  position: 'relative',
})

const Image = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const Fallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
  fontWeight: '$BOLD',
})

export interface AvatarCSSType {
  container?: CSS
  image?: CSS
  fallback?: CSS
}

export interface AvatarProps {
  alt?: string
  src?: string
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void
  delayMs?: number
  fallback?: string
  fallbackColor?: ColorsType
  fallbackBackgroundColor?: ColorsType
  css?: AvatarCSSType
  size?: number
  borderRadius?: BorderRadiusType
  loading?: boolean
}

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  onLoadingStatusChange,
  delayMs,
  fallback,
  fallbackBackgroundColor,
  fallbackColor,
  css,
  size,
  borderRadius,
  loading,
}) => {
  return (
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
          color: `$${fallbackColor}`,
          backgroundColor: `$${fallbackBackgroundColor}`,
          ...css?.fallback,
        }}
      >
        {fallback}
      </Fallback>
    </Root>
  )
}

Avatar.defaultProps = {
  size: 80,
  fallbackColor: 'PRIMARY',
  fallbackBackgroundColor: 'PRIMARY_LIGHTEST_2',
  borderRadius: 'round',
  loading: false,
}
