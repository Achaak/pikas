import { Explorer } from '@pikas-ui/explorer'
import { ExampleContainer } from '@pikas/docs-ui'

export const ExplorerExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Explorer
        items={[
          {
            id: '1',
            name: 'z Item 1',
            type: 'folder',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
          },
          {
            id: '2',
            name: 'r Item 2',
            type: 'file',
            size: 0,
            createdAt: '2021-01-01',
            updatedAt: '2021-01-01',
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
      />
    </ExampleContainer>
  )
}
