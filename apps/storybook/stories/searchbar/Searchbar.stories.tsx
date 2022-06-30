import { globalCss, PikasUIProvider } from '@pikas-ui/styles'
import type { ResultGroupType, SearchbarProps } from '@pikas-ui/searchbar'
import type { Story, Meta } from '@storybook/react'
import { Searchbar } from '@pikas-ui/searchbar'

type SearchResult = {
  firstname: string
  lastname: string
}

export default {
  title: '@pikas-ui/searchbar',
  component: Searchbar,
  argTypes: {},
} as Meta<SearchbarProps<unknown>>

const Template: Story<SearchbarProps<unknown>> = (args) => {
  globalCss()

  return (
    <PikasUIProvider>
      <Searchbar {...args} />
    </PikasUIProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  searchFunction: (value): Promise<Array<SearchResult> | null> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (value === 'test') resolve(null)

        resolve([
          { firstname: 'John', lastname: 'Doe' },
          { firstname: 'Jane', lastname: 'Doe' },
          { firstname: 'John', lastname: 'Smith' },
          { firstname: 'Jane', lastname: 'Smith' },
        ])
      }, 1000)
    })
  },
  onSearch: (value): ResultGroupType[] | null => {
    if (!Array.isArray(value)) return null

    return [
      {
        title: 'Results',
        items: value.map((item) => ({
          content: `${item.firstname} ${item.lastname}`,
          onClick: (): void => {
            console.log(item)
          },
        })),
      },
      {
        title: 'Results 2',
        items: value.map((item) => ({
          content: `${item.firstname} ${item.lastname}`,
          onClick: (): void => {
            console.log(item)
          },
        })),
      },
    ]
  },
  searchType: 'button',
  isOpen: false,
  searchWhenKeyUp: true,
  textfield: {
    placeholder: 'Search',
    borderRadius: 'round',
  },
  directResult: {
    enable: true,
    onClick: console.log,
  },
}
