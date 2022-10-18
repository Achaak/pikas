import type { BorderRadius, PikasColor, PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Skeleton } from '@pikas-ui/skeleton'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import fontColorContrast from 'font-color-contrast'

const Root = styled(ProgressPrimitive.Root, {
  position: 'relative',
  background: '$BLACK',
  zIndex: '$HIGH',

  // Fix overflow clipping in Safari
  // https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0
  transform: 'translateZ(0)',

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
})

const ProgressContent = styled('div', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  overflow: 'hidden',
})

const ProgressIndicator = styled(ProgressPrimitive.Indicator, {
  width: '100%',
  height: '100%',
  transition: 'transform 660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

const Content = styled('span', {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$WHITE',
  transition: '660ms cubic-bezier(0.65, 0, 0.35, 1)',
})

const ContentBack = styled(Content, {})

const ContentFront = styled(Content, {})

export interface ProgressCSS<Config extends PikasConfig = PikasConfig> {
  container?: Config['css']
  content?: Config['css']
  indicator?: Config['css']
}

export interface ProgressProps<Config extends PikasConfig = PikasConfig> {
  progress: number
  max?: number
  width?: number | string
  height?: number | string
  colorName?: Config['color']
  backgroundColorName?: Config['color']
  loading?: boolean
  boxShadow?: Config['shadow'] | 'none'
  borderRadius?: BorderRadius
  borderRadiusIndicator?: BorderRadius
  getValueLabel?: (value: number, max: number) => string
  content?: string
  css?: ProgressCSS<Config>
}

export const Progress = <Config extends PikasConfig = PikasConfig>({
  progress = 0,
  height = 16,
  width = 280,
  backgroundColorName = 'GRAY' as Config['color'],
  colorName = 'PRIMARY' as Config['color'],
  max = 100,
  loading = false,
  boxShadow = 'DIMINUTION_1' as Config['shadow'],
  borderRadius = 'round',
  borderRadiusIndicator = 'none',
  getValueLabel = (value, max): string => `${Math.round((value / max) * 100)}%`,
  content,
  css,
}: ProgressProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <Root
      value={progress}
      max={max}
      css={{
        width,
        height,
        backgroundColor: `$${backgroundColorName}`,
        br: borderRadius,

        '&:after': {
          br: borderRadius,
          boxShadow: `$${boxShadow}`,
        },

        ...css?.container,
      }}
      getValueLabel={getValueLabel}
    >
      <ProgressContent
        css={{
          br: borderRadius,
        }}
      >
        {loading ? (
          <Skeleton height="100%" width="100%" animation="wave" />
        ) : (
          <ProgressIndicator
            css={{
              transform: `translateX(-${
                100 - Math.round((progress / (max || 100)) * 100)
              }%)`,
              backgroundColor: `$${colorName}`,
              br: borderRadiusIndicator,

              ...css?.indicator,
            }}
          />
        )}
        <ContentBack
          css={{
            ...css?.content,
            clipPath: `inset(0 ${
              100 - Math.round((progress / (max || 100)) * 100)
            }% 0 0)`,
            color:
              theme &&
              fontColorContrast(
                theme.colors[(colorName as PikasColor) || 'PRIMARY'].value,
                0.7
              ),
          }}
        >
          {content}
        </ContentBack>
        <ContentFront
          css={{
            ...css?.content,
            clipPath: `inset(0 0 0 ${Math.round(
              (progress / (max || 100)) * 100
            )}%)`,
            color:
              theme &&
              fontColorContrast(
                theme.colors[(backgroundColorName as PikasColor) || 'GRAY']
                  .value,
                0.7
              ),
          }}
        >
          {content}
        </ContentFront>
      </ProgressContent>
    </Root>
  )
}
