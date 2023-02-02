import type { ExplorerItem, ExplorerShowType } from '@pikas-ui/explorer';
import { Explorer } from '@pikas-ui/explorer';
import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { ExampleContainer } from '@pikas/docs-ui';
import type { FC } from 'react';

type ExplorerExampleProps = {
  showType: ExplorerShowType;
};

const TrashIcon: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:trash" />
);

const data: ExplorerItem[] = [
  {
    id: '1',
    name: 'Folder 1',
    type: 'folder',
    size: '1.2 MB',
    createdAt: '2021-01-01',
    updatedAt: '2021-01-01',
    isFavorite: true,
  },
  {
    id: '2',
    name: 'Folder 2',
    type: 'folder',
    size: '12.3 MB',
    createdAt: '2021-08-01',
    updatedAt: '2021-08-01',
    isFavorite: false,
  },
  {
    id: '3',
    name: 'Folder 3',
    type: 'folder',
    size: '123.4 MB',
    createdAt: '2021-08-01',
    updatedAt: '2021-08-01',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'my-file-1.txt',
    type: 'file',
    size: '42.3 KB',
    createdAt: '2020-03-01',
    updatedAt: '2020-03-01',
    isFavorite: false,
  },
  {
    id: '5',
    name: 'my-file-2.pdf',
    type: 'file',
    size: '123.4 KB',
    createdAt: '2020-03-01',
    updatedAt: '2020-03-01',
    isFavorite: true,
  },
  {
    id: '6',
    name: 'my-file-3.doc',
    type: 'file',
    size: '1.2 MB',
    createdAt: '2020-03-01',
    updatedAt: '2020-03-01',
    isFavorite: false,
  },
  {
    id: '7',
    name: 'my-file-4.png',
    type: 'file',
    size: '987.6 KB',
    createdAt: '2020-03-01',
    updatedAt: '2020-03-01',
    isFavorite: false,
  },
];

export const ExplorerExample: FC<ExplorerExampleProps> = ({ showType }) => (
  <ExampleContainer>
    <Explorer
      showType={showType}
      showFavorite={true}
      items={data.map((item) => ({
        ...item,
        menu: [
          {
            items: [
              {
                type: 'item',
                label: 'Delete',
                onClick: (): void => {
                  alert(`Delete item id: ${item.id}`);
                },
                colorName: 'danger',
                Icon: TrashIcon,
              },
            ],
          },
        ],
      }))}
      breadcrumb={[
        {
          id: '100',
          name: 'Root',
        },
        {
          id: '101',
          name: 'Folder after root',
        },
        {
          id: '102',
          name: 'Folder test',
        },
      ]}
      onOpenItem={(item): void => {
        alert(`Open item id: ${item.id}`);
      }}
      onDropItems={({ folderId, item }): void => {
        alert(
          `Drop item id: ${item
            .map((i) => i.id)
            .join(', ')} to folder id: ${folderId}`
        );
      }}
      onFavoriteItem={async (item): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert(`Favorite item id: ${item.id}`);
      }}
      showBreadcrumb={{
        default: false,
        xs: false,
        sm: false,
        md: true,
        lg: true,
        xl: true,
      }}
      actions={[
        {
          accessType: ['folder'],
          onClick: (ids): void => {
            alert(`Delete items id: ${ids.join(', ')}`);
          },
          Icon: TrashIcon,
        },
      ]}
    />
  </ExampleContainer>
);
