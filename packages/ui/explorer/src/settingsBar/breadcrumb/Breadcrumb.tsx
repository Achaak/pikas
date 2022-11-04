import { IconByName } from '@pikas-ui/icons'
import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import { ExplorerContext } from '../../Explorer.js'
import { BreadcrumbItem } from './breadcrumbItem/BreadcrumbItem.js'

const Container = styled('div', {
  display: 'none',
  customColumnGap: 4,
  flex: 1,
})

const TooManyItems = styled('div', {
  fontWeight: '$MEDIUM',
  color: '$GRAY_DARKER',
  width: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export interface BreadcrumbProps {}

export const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  const { breadcrumb, showBreadcrumb } = useContext(ExplorerContext)

  return (
    <Container
      css={{
        display: showBreadcrumb?.default ? 'flex' : 'none',

        '@xs': {
          display: showBreadcrumb?.xs ? 'flex' : 'none',
        },
        '@sm': {
          display: showBreadcrumb?.sm ? 'flex' : 'none',
        },
        '@md': {
          display: showBreadcrumb?.md ? 'flex' : 'none',
        },
        '@lg': {
          display: showBreadcrumb?.lg ? 'flex' : 'none',
        },
        '@xl': {
          display: showBreadcrumb?.xl ? 'flex' : 'none',
        },
      }}
    >
      {breadcrumb?.map((breadcrumbItem, index) => {
        if (
          breadcrumb.length > 5 &&
          breadcrumb.length - index > 4 &&
          index !== 0
        ) {
          return null
        }

        const result = []

        if (index && !(breadcrumb.length > 5 && index === 2)) {
          result.push(
            <IconByName
              name="bx:chevron-right"
              key={`${index}-next`}
              size={16}
              colorName="GRAY_DARKER"
            />
          )
        }

        result.push(<BreadcrumbItem breadcrumb={breadcrumbItem} key={index} />)

        if (breadcrumb.length > 5 && index === 0) {
          result.push(<TooManyItems key={index + 1}>···</TooManyItems>)
        }

        return result
      })}
    </Container>
  )
}
