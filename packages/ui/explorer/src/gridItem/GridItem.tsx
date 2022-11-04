import { IconByName } from '@pikas-ui/icons'
import { styled } from '@pikas-ui/styles'
import { useWindowSize } from '@pikas-utils/screen'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ExplorerContext, ExplorerItem } from '../Explorer.js'
import { Wrapper } from '../wrapper/Wrapper.js'

const Container = styled('div', {
  borderColor: '$GRAY',
  borderStyle: 'solid',
  borderWidth: 2,
  br: 'md',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: '$WHITE',

  variants: {
    selected: {
      true: {
        backgroundColor: '$PRIMARY_LIGHTER',
      },
    },
  },
})

const Name = styled('span', {
  color: '$BLACK',
  fontSize: '$SMALL',
  marginTop: 8,
})

export interface GridItemProps {
  item: ExplorerItem
}

export const GridItem: React.FC<GridItemProps> = ({ item }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const windowSize = useWindowSize()
  const [height, setHeight] = useState<number | undefined>(undefined)
  const { itemsSelected } = useContext(ExplorerContext)

  const handleResize = useCallback(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    handleResize()
  }, [windowSize, handleResize, containerRef])

  const getIcon = useCallback(() => {
    if (item?.type === 'folder') {
      return <IconByName name="bx:folder" size={64} colorName="BLACK" />
    }
    if (item?.type === 'file') {
      return <IconByName name="bx:file" size={64} colorName="BLACK" />
    }
  }, [item])

  return (
    <Wrapper id={item.id} type={item.type}>
      <Container
        ref={containerRef}
        selected={itemsSelected.some((i) => i.id === item.id)}
        css={{
          height: height,
        }}
      >
        {getIcon()}
        <Name>{item?.name}</Name>
      </Container>
    </Wrapper>
  )
}
