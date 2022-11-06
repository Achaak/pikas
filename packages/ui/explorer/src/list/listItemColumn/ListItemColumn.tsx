import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  minWidth: 100,
})

export interface ListItemColumnProps {
  children?: React.ReactNode
  flex?: number
  width?: number
}

export const ListItemColumn: React.FC<ListItemColumnProps> = ({
  children,
  flex,
  width,
}) => {
  return (
    <Container
      css={{
        flex: flex,
        width: width,
        minWidth: width,
      }}
    >
      {children}
    </Container>
  )
}
