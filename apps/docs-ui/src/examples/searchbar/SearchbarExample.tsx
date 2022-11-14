import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import type { ResultGroup } from '@pikas-ui/searchbar';
import { Searchbar } from '@pikas-ui/searchbar';

type SearchbarData = {
  firstName: string;
  lastName: string;
};

export const SearchbarExample: FC = () => (
  <ExampleContainer>
    <Searchbar<SearchbarData[]>
      searchWhenKeyUp={true}
      onSearch={(value): ResultGroup[] | null => [
        {
          items: value.map((item) => ({
            content: `${item.firstName} ${item.lastName}`,
            onClick: (): void => {
              // eslint-disable-next-line no-console
              console.log(item);
            },
          })),
        },
      ]}
      searchFunction={async (): Promise<SearchbarData[]> =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve([
              {
                firstName: 'John',
                lastName: 'Doe',
              },
              {
                firstName: 'Jane',
                lastName: 'Doe',
              },
            ]);
          }, 1000);
        })
      }
    />
  </ExampleContainer>
);
