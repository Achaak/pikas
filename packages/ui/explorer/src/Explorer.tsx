import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { styled } from '@pikas-ui/styles'
import { createContext, useEffect, useRef, useState } from 'react'
import { GridContainer } from './gridContainer/index.js'
import { ListContainer } from './listContainer/index.js'
import { snapCenterToCursor } from '@dnd-kit/modifiers'
import { useOnClickOutside } from 'usehooks-ts'
import { useKeyPress } from '@pikas-utils/keyboard'

const Container = styled('div', {
  width: '100%',
  overflow: 'auto',
  userSelect: 'none',
})

export type ExplorerItemType = 'file' | 'folder'

export interface ExplorerItem {
  id: string
  name: string
  size: number
  type: ExplorerItemType
  createdAt: string
  updatedAt: string
}

export interface ExplorerItemFile extends ExplorerItem {
  type: 'file'
}

export interface ExplorerItemFolder extends ExplorerItem {
  type: 'folder'
}

export type ExplorerShowType = 'list' | 'grid'

export type OnClickItem = {
  id: string
}

export const ExplorerContext = createContext<{
  items: ExplorerItem[]
  onClickItem: (handleClick: OnClickItem) => void
  itemsSelected: ExplorerItem[]
}>({
  items: [],
  onClickItem: () => {},
  itemsSelected: [],
})

export interface ExplorerProps {
  showType?: ExplorerShowType
  items: ExplorerItem[]
  multiSelectable?: boolean
}

export const Explorer: React.FC<ExplorerProps> = ({
  showType = 'grid',
  items,
  multiSelectable = true,
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [itemsSelected, setItemsSelected] = useState<ExplorerItem[]>([])
  const [itemsFiltered, setItemsFiltered] = useState<ExplorerItem[]>([])
  const [lastItemClicked, setLastItemClicked] = useState<ExplorerItem | null>(
    null
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const ctrlPressed = useKeyPress('Control')
  const shiftPressed = useKeyPress('Shift')

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 50,
      tolerance: 5,
    },
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setItemsFiltered(sortItems(items))
  }, [items])

  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true)
    if (!itemsSelected.some((item) => item.id === event.active.id)) {
      const newItem = items.find((item) => item.id === event.active.id)
      if (newItem) {
        setItemsSelected([newItem])
        setLastItemClicked(newItem)
      }
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setIsDragging(false)
    console.log(event)
  }

  const handleClickItem = ({ id }: OnClickItem): void => {
    const item = itemsFiltered.find((item) => item.id === id)

    if (!item) {
      return
    }

    if (multiSelectable && ctrlPressed) {
      if (itemsSelected.includes(item)) {
        setItemsSelected((itemsSelected) =>
          itemsSelected.filter((itemSelected) => itemSelected.id !== item.id)
        )
      } else {
        setItemsSelected((itemsSelected) => [...itemsSelected, item])
      }
      setLastItemClicked(item)
    } else if (multiSelectable && shiftPressed) {
      if (!lastItemClicked) {
        setItemsSelected([item])
      } else {
        const indexItem = itemsFiltered.findIndex(
          (itemFiltered) => itemFiltered.id === item.id
        )
        const indexLastItemClicked = itemsFiltered.findIndex(
          (itemFiltered) => itemFiltered.id === lastItemClicked.id
        )
        const firstIndex = Math.min(indexItem, indexLastItemClicked)
        const lastIndex = Math.max(indexItem, indexLastItemClicked)
        const itemShifted = itemsFiltered.slice(firstIndex, lastIndex + 1)

        setItemsSelected(itemShifted)
      }
    } else {
      setItemsSelected([item])
      setLastItemClicked(item)
    }
  }

  const handleResetItemsSelected = () => {
    setItemsSelected([])
  }

  useOnClickOutside(containerRef, handleResetItemsSelected)

  return (
    <ExplorerContext.Provider
      value={{
        items: itemsFiltered,
        onClickItem: handleClickItem,
        itemsSelected: itemsSelected,
      }}
    >
      <Container onClick={handleResetItemsSelected} ref={containerRef}>
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          {showType === 'grid' ? <GridContainer /> : <ListContainer />}
          <DragOverlay
            style={{ backgroundColor: 'red', width: 'auto', height: 'auto' }}
            modifiers={[snapCenterToCursor]}
            adjustScale
            dropAnimation={null}
            wrapperElement="div"
          >
            {isDragging && <span>{itemsSelected.length}</span>}
          </DragOverlay>
        </DndContext>
      </Container>
    </ExplorerContext.Provider>
  )
}

const sortItems = (items: ExplorerItem[]) => {
  return items
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => {
      if (a.type === 'folder' && b.type === 'file') {
        return -1
      }
      if (a.type === 'file' && b.type === 'folder') {
        return 1
      }
      return 0
    })
}
