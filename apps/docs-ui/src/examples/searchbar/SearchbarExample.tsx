import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import type { ResultGroup } from '@pikas-ui/searchbar';
import { Searchbar } from '@pikas-ui/searchbar';

type SearchbarData = {
  firstName: string;
  lastName: string;
};

export const SearchbarExample: FC = () => {
  return (
    <ExampleContainer>
      <Searchbar<SearchbarData[]>
        searchWhenKeyUp={true}
        onSearch={(value): ResultGroup[] | null => {
          return [
            {
              items: value.map((item) => {
                return {
                  content: `${item.firstName} ${item.lastName}`,
                  onClick: (): void => {
                    console.log(item);
                  },
                };
              }),
            },
          ];
        }}
        searchFunction={async (): Promise<SearchbarData[]> => {
          return new Promise((resolve) => {
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
          });
        }}
      />
    </ExampleContainer>
  );
};
