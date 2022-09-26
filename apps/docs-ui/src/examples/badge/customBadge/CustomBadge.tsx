import { CustomBadge } from '@pikas-ui/badge'
import { ExampleContainer } from '@pikas/docs-ui'

export const CustomBadgeExample: React.FC = () => {
  return (
    <ExampleContainer>
      <CustomBadge
        css={{
          fontSize: '$EM-SMALL',
          padding: '8px 16px',
        }}
      >
        Hello world
      </CustomBadge>
      <CustomBadge
        color="SECONDARY"
        css={{
          fontSize: '$EM-SMALL',
          padding: '8px 16px',
        }}
      >
        Hello world
      </CustomBadge>
      <CustomBadge
        color="TERTIARY"
        css={{
          fontSize: '$EM-SMALL',
          padding: '8px 16px',
        }}
      >
        Hello world
      </CustomBadge>
    </ExampleContainer>
  )
}
