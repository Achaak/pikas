import type { ColorsType, CSS } from '@pikas-ui/styles'

export interface IconProps {
  className?: string
  size?: number | string
  styles?: {
    container?: CSS
    svg?: CSS
  }
  color?: ColorsType | (string & Record<string, unknown>)
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
