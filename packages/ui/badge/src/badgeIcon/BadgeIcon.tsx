import { IconByName } from '@pikas-ui/icons'
import type { CustomBadgeProps } from '../customBadge/index.js'
import { CustomBadge } from '../customBadge/index.js'
import { styled } from '@pikas-ui/styles'
import type { BadgePadding } from '../types.js'

const BadgeStyled = styled(CustomBadge, {
  variants: {
    padding: {
      xs: {
        padding: 2,
      },
      sm: {
        padding: 4,
      },
      md: {
        padding: 8,
      },
      lg: {
        padding: 16,
      },
      xl: {
        padding: 32,
      },
    },
  },
})

export interface BadgeIconProps extends CustomBadgeProps {
  iconName: string
  size?: number | string
  padding?: BadgePadding
}

export const BadgeIcon: React.FC<BadgeIconProps> = ({
  iconName,
  size = 24,
  padding = 'md',
  ...props
}) => {
  return (
    <BadgeStyled padding={padding} {...props}>
      <IconByName name={iconName} size={size} />
    </BadgeStyled>
  )
}
