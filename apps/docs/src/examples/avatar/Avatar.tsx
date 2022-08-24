import { Avatar } from '@pikas-ui/avatar'
import { ExampleContainer } from '@/components/ExampleContainer'
import { useTheme } from '@pikas-ui/styles'

export const AvatarExample: React.FC = () => {
  const t = useTheme()

  return (
    <ExampleContainer>
      <Avatar alt="John Doe" fallback="JD" />
      <Avatar
        alt="Jane Doe"
        fallback="JD"
        src={
          'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80'
        }
      />
    </ExampleContainer>
  )
}
