import React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { BorderRadiusType, ColorsType, CSS, styled } from '@pikas-ui/styles'
import type { ImageLoadingStatus } from '@radix-ui/react-avatar'

export type { ImageLoadingStatus } from '@radix-ui/react-avatar'

const Root = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
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

export interface AvatarStylesType {
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
  styles?: AvatarStylesType
  size?: number
  borderRadius?: BorderRadiusType
}

export const Avatar: React.FC<AvatarProps> = ({
  alt,
  src,
  onLoadingStatusChange,
  delayMs,
  fallback,
  fallbackBackgroundColor,
  fallbackColor,
  styles,
  size,
  borderRadius,
}) => {
  return (
    <Root
      css={{
        height: size,
        width: size,
        br: borderRadius,
        ...styles?.container,
      }}
    >
      <Image
        src={src}
        alt={alt}
        onLoadingStatusChange={onLoadingStatusChange}
        css={{
          ...styles?.image,
        }}
      />
      <Fallback
        delayMs={delayMs}
        css={{
          fontSize: size ? size / 2.5 : undefined,
          color: `$${fallbackColor}`,
          backgroundColor: `$${fallbackBackgroundColor}`,
          ...styles?.fallback,
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
}
