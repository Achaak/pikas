import { Explorer, ExplorerShowType } from '@pikas-ui/explorer'
import { IconByName, IconProps } from '@pikas-ui/icons'
import { ExampleContainer } from '@pikas/docs-ui'
import { FC } from 'react'

interface ExplorerExampleProps {
  showType: ExplorerShowType
}

const TrashIcon: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:trash" />
)

export const ExplorerExample: React.FC<ExplorerExampleProps> = ({
  showType,
}) => {
  return (
    <ExampleContainer>
      <Explorer
        showType={showType}
        showFavorite={true}
        items={[
          {
            id: '1',
            name: 'z Item 1',
            type: 'folder',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
            isFavorite: true,
          },
          {
            id: '2',
            name: 'r Item 2',
            type: 'file',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
            isFavorite: false,
          },
          {
            id: '3',
            name: 'b Item 3',
            type: 'folder',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
          },
          {
            id: '4',
            name: 'Item 4',
            type: 'file',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
          },
          {
            id: '5',
            name: 'Item 5',
            type: 'folder',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
          },
          {
            id: '6',
            name: 'Item 6',
            type: 'file',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
          },
        ]}
        breadcrumb={[
          {
            id: '1-1',
            name: 'Item 1',
          },
          {
            id: '1-2',
            name: 'Item 2',
          },
          {
            id: '1-3',
            name: 'Item 3',
          },
          {
            id: '1-4',
            name: 'Item 4',
          },
          {
            id: '1-5',
            name: 'Item 5',
          },
          {
            id: '1-6',
            name: 'Item 6',
          },
        ]}
        onOpenItem={(item) => {
          alert(`Open item id: ${item.id}`)
        }}
        onDropItems={({ folderId, item }) => {
          alert(
            `Drop item id: ${item.map(
              (item) => item.id
            )} to folder id: ${folderId}`
          )
        }}
        itemMenuData={[
          {
            items: [
              {
                type: 'item',
                label: 'Delete',
                onClick: (id) => {
                  alert('Delete item id: ' + id)
                },
                colorName: 'DANGER',
                Icon: TrashIcon,
              },
            ],
          },
        ]}
        onFavoriteItem={async (item) => {
          await new Promise((resolve) => setTimeout(resolve, 1000))
          alert(`Favorite item id: ${item.id}`)
        }}
        showBreadcrumb={{
          default: false,
          xs: false,
          sm: false,
          md: true,
          lg: true,
          xl: true,
        }}
      />
    </ExampleContainer>
  )
}
