import { BadgeIcon } from '@pikas-ui/badge'
import { ExampleContainer } from '@/components/ExampleContainer'

export const BadgeIconExample: React.FC = () => {
  return (
    <ExampleContainer>
      <BadgeIcon iconName="bx:baguette" />
      <BadgeIcon iconName="bx:baguette" color="SECONDARY" />
      <BadgeIcon iconName="bx:baguette" color="TERTIARY" />
    </ExampleContainer>
  )
}
