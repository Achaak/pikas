import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import { ExplorerContext } from '../../Explorer.js'

const Container = styled('div', {
  display: 'none',
  customColumnGap: 4,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginBottom: 16,
})

const Icon = styled('div', {
  padding: 4,
  br: 'round',
  borderColor: '$GRAY',
  borderStyle: 'solid',
  borderWidth: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '$PRIMARY_LIGHTER',
  },
})

export const Actions: React.FC = () => {
  const { showActions, actions, itemsSelected } = useContext(ExplorerContext)

  if (!showActions) {
    return null
  }

  const hasFolderSelected = itemsSelected.some((item) => item.type === 'folder')
  const hasFileSelected = itemsSelected.some((item) => item.type === 'file')

  return (
    <Container
      css={{
        ...(showActions?.default && { '@xs': { display: 'flex' } }),
        ...(showActions?.xs && { '@xs': { display: 'flex' } }),
        ...(showActions?.sm && { '@sm': { display: 'flex' } }),
        ...(showActions?.md && { '@md': { display: 'flex' } }),
        ...(showActions?.lg && { '@lg': { display: 'flex' } }),
        ...(showActions?.xl && { '@xl': { display: 'flex' } }),
      }}
    >
      {actions
        ?.filter((action) => {
          if (action.accessType.includes('folder') && hasFolderSelected) {
            return true
          }
          if (action.accessType.includes('file') && hasFileSelected) {
            return true
          }

          return false
        })
        .map((action, index) => (
          <Icon>
            <action.Icon
              size={16}
              key={index}
              onClick={(event): void => {
                event.stopPropagation()
                action.onClick(itemsSelected.map((item) => item.id))
              }}
            />
          </Icon>
        ))}
    </Container>
  )
}
