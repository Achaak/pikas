import { ExampleContainer } from '@/components/ExampleContainer'
import type { ResultGroupType } from '@pikas-ui/searchbar'
import { Searchbar } from '@pikas-ui/searchbar'

type SearchbarData = {
  firstName: string
  lastName: string
}[]

export const SearchbarExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Searchbar<SearchbarData>
        searchWhenKeyUp={true}
        onSearch={(value): ResultGroupType[] | null => {
          return [
            {
              items: value.map((item) => {
                return {
                  content: `${item.firstName} ${item.lastName}`,
                  onClick: (): void => {
                    console.log(item)
                  },
                }
              }),
            },
          ]
        }}
        searchFunction={async (): Promise<SearchbarData> => {
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
              ])
            }, 1000)
          })
        }}
      />
    </ExampleContainer>
  )
}
