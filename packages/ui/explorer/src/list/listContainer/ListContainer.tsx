import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import { ExplorerContext } from '../../Explorer.js'
import { ListItem } from '../listItem/ListItem.js'
import { ListItemColumn } from '../listItemColumn/ListItemColumn.js'

const Container = styled('div', {
  // display: 'flex',
  // flexDirection: 'column',
  overflow: 'auto',
  width: '100%',
})

const Head = styled('div', {
  display: 'flex',
  borderBottomColor: '$GRAY',
  borderBottomStyle: 'solid',
  borderBottomWidth: 2,
  fontWeight: '$MEDIUM',
  width: '100%',
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const HeadItem = styled('span', {
  padding: 4,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  flex: 1,
})

export const ListContainer: React.FC = () => {
  const { items, showDropdownMenu, showFavorite } = useContext(ExplorerContext)

  return (
    <Container>
      <Head>
        {showFavorite && <ListItemColumn width={32}></ListItemColumn>}
        <ListItemColumn width={40}></ListItemColumn>
        <ListItemColumn flex={1}>
          <HeadItem>Name</HeadItem>
        </ListItemColumn>
        <ListItemColumn flex={1}>
          <HeadItem>Size</HeadItem>
        </ListItemColumn>
        <ListItemColumn flex={1}>
          <HeadItem>Created at</HeadItem>
        </ListItemColumn>
        {showDropdownMenu && <ListItemColumn width={40}></ListItemColumn>}
      </Head>
      <Content>
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </Content>
    </Container>
  )
}
