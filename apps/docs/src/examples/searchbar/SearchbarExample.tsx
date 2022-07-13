import { ExampleContainer } from '@/components/ExampleContainer'
import { Searchbar } from '@pikas-ui/searchbar'

export const SearchbarExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Searchbar<
        {
          firstName: string
          lastName: string
        }[]
      >
        searchWhenKeyUp={true}
        onSearch={(value) => {
          return [
            {
              items: value.map((item) => {
                return {
                  content: `${item.firstName} ${item.lastName}`,
                  onClick: () => {
                    console.log(item)
                  },
                }
              }),
            },
          ]
        }}
        searchFunction={async () => {
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
