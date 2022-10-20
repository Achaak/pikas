import { IconByName } from '@pikas-ui/icons'
import type { PikasFontSize } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { CustomBadgeProps } from '../customBadge/index.js'
import { CustomBadge } from '../customBadge/index.js'
import type { BadgePadding } from '../types.js'

const BadgeStyled = styled(CustomBadge, {
  variants: {
    gap: {
      xs: {
        customColumnGap: 1,
      },
      sm: {
        customColumnGap: 2,
      },
      md: {
        customColumnGap: 4,
      },
      lg: {
        customColumnGap: 8,
      },
      xl: {
        customColumnGap: 16,
      },
    },
    padding: {
      xs: {
        padding: '2px 4px',
      },
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
      xl: {
        padding: '32px 64px',
      },
    },
  },
})

export const gapPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const
export type BadgeGap = keyof typeof gapPadding

export interface BadgeProps extends CustomBadgeProps {
  fontSize?: PikasFontSize
  leftIconName?: string
  rightIconName?: string
  gap?: BadgeGap
  padding?: BadgePadding
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  fontSize = 'EM-MEDIUM',
  leftIconName,
  rightIconName,
  padding = 'md',
  gap = 'md',
  ...props
}) => {
  return (
    <BadgeStyled
      gap={gap}
      padding={padding}
      css={{
        ...props?.css,
        fontSize: `$${fontSize}`,
      }}
      {...props}
    >
      {leftIconName && <IconByName name={leftIconName} size="1em" />}
      {children}
      {rightIconName && <IconByName name={rightIconName} size="1em" />}
    </BadgeStyled>
  )
}
