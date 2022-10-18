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
        colorName="SECONDARY"
        css={{
          fontSize: '$EM-SMALL',
          padding: '8px 16px',
        }}
      >
        Hello world
      </CustomBadge>
      <CustomBadge
        colorName="TERTIARY"
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
