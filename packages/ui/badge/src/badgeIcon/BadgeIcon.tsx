import { IconByName } from '@pikas-ui/icons'
import type { CustomBadgeProps } from '../customBadge/index.js'
import { CustomBadge } from '../customBadge/index.js'
import type { PikasConfigRecord } from '@pikas-ui/styles'
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

export interface BadgeIconProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> extends CustomBadgeProps<Config> {
  iconName: string
  size?: number | string
  padding?: BadgePadding
}

export const BadgeIcon = <Config extends PikasConfigRecord>({
  iconName,
  size = 24,
  padding = 'md',
  ...props
}: BadgeIconProps<Config>): JSX.Element => {
  return (
    <BadgeStyled padding={padding} {...props}>
      <IconByName name={iconName} size={size} />
    </BadgeStyled>
  )
}
