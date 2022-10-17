import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { BorderRadius, PikasConfig } from '@pikas-ui/styles'
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

export interface AvatarCSS<Config extends PikasConfig> {
  container?: Config['css']
  image?: Config['css']
  fallback?: Config['css']
}

export interface AvatarProps<Config extends PikasConfig = PikasConfig> {
  alt?: string
  src?: string
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void
  delayMs?: number
  fallback?: string
  fallbackColorName?: Config['color']
  fallbackBackgroundColorName?: Config['color']
  css?: AvatarCSS<Config>
  size?: number
  borderRadius?: BorderRadius
  loading?: boolean
}

export const Avatar = <Config extends PikasConfig = PikasConfig>({
  alt,
  src,
  onLoadingStatusChange,
  delayMs,
  fallback,
  fallbackBackgroundColorName = 'PRIMARY_LIGHTEST_2' as Config['color'],
  fallbackColorName = 'PRIMARY' as Config['color'],
  css,
  size = 80,
  borderRadius = 'round',
  loading = false,
}: AvatarProps<Config>): JSX.Element => {
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
          color: `$${fallbackColorName}`,
          backgroundColor: `$${fallbackBackgroundColorName}`,
          ...css?.fallback,
        }}
      >
        {fallback}
      </Fallback>
    </Root>
  )
}
