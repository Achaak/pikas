import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type {
  BorderRadius,
  ColorsRecord,
  PikasCSS,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
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

export interface AvatarCSS<CSS extends PikasCSS> {
  container?: CSS
  image?: CSS
  fallback?: CSS
}

export interface AvatarProps<
  CSS extends PikasCSS,
  Color extends ColorByPikas<ColorsRecord>
> {
  alt?: string
  src?: string
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void
  delayMs?: number
  fallback?: string
  fallbackColorName?: Color
  fallbackBackgroundColorName?: Color
  css?: AvatarCSS<CSS>
  size?: number
  borderRadius?: BorderRadius
  loading?: boolean
}

export const Avatar = <
  CSS extends PikasCSS = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  alt,
  src,
  onLoadingStatusChange,
  delayMs,
  fallback,
  fallbackBackgroundColorName = 'PRIMARY_LIGHTEST_2' as Color,
  fallbackColorName = 'PRIMARY' as Color,
  css,
  size = 80,
  borderRadius = 'round',
  loading = false,
}: AvatarProps<CSS, Color>): JSX.Element => {
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
