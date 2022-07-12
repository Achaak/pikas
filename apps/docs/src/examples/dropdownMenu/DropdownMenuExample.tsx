import { DropdownMenu } from '@pikas-ui/dropdown-menu'
import { ExampleContainer } from '@/components/ExampleContainer'
import { Button } from '@pikas-ui/button'

export const DropdownMenuExample: React.FC = () => {
  return (
    <ExampleContainer
      style={{
        alignItems: 'center',
      }}
    >
      <DropdownMenu
        data={[
          {
            label: 'Item 1',
            items: [
              {
                label: 'Item 1-1',
                type: 'item',
                onClick: console.log,
              },
              {
                type: 'checkbox',
                checked: true,
                label: 'Item 1-2',
                onCheckedChange: console.log,
                color: 'PRIMARY',
              },
              {
                type: 'radio',
                onValueChange: console.log,
                value: '1',
                radios: [
                  {
                    label: 'Item 1-3-1',
                    value: '1',
                  },
                  {
                    label: 'Item 1-3-2',
                    value: '2',
                  },
                ],
              },
              {
                type: 'menu',
                label: 'Item 1-4',
                data: [
                  {
                    label: 'Item 1-4-1',
                    items: [
                      {
                        label: 'Item 1-4-1-1',
                        type: 'item',
                        onClick: console.log,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
      <span>or</span>
      <DropdownMenu
        triggerContent={
          <Button padding="sm" fontSize="EM-SMALL">
            With trigger content
          </Button>
        }
        data={[
          {
            label: 'Item 1',
            items: [
              {
                label: 'Item 1-1',
                type: 'item',
                onClick: console.log,
              },
              {
                type: 'checkbox',
                checked: true,
                label: 'Item 1-2',
                onCheckedChange: console.log,
                color: 'PRIMARY',
              },
              {
                type: 'radio',
                onValueChange: console.log,
                value: '1',
                radios: [
                  {
                    label: 'Item 1-3-1',
                    value: '1',
                  },
                  {
                    label: 'Item 1-3-2',
                    value: '2',
                  },
                ],
              },
              {
                type: 'menu',
                label: 'Item 1-4',
                data: [
                  {
                    label: 'Item 1-4-1',
                    items: [
                      {
                        label: 'Item 1-4-1-1',
                        type: 'item',
                        onClick: console.log,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ]}
      />
    </ExampleContainer>
  )
}
