import { ContextMenu } from '@pikas-ui/context-menu'
import { ExampleContainer } from '@/components/ExampleContainer'

export const ContextMenuExample: React.FC = () => {
  return (
    <ContextMenu
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
    >
      <ExampleContainer
        css={{
          height: 200,
          border: '1px solid $GRAY',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Right click here
      </ExampleContainer>
    </ContextMenu>
  )
}
