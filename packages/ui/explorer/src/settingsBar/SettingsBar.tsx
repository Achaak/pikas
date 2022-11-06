import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import { ExplorerContext } from '../Explorer.js'
import { Actions } from './actions/Actions.js'
import { Breadcrumb } from './breadcrumb/Breadcrumb.js'

const Container = styled('div', {
  display: 'flex',
})

export const SettingsBar: React.FC = () => {
  const { showActions, showBreadcrumb } = useContext(ExplorerContext)

  if (!showBreadcrumb && !showActions) {
    return null
  }

  return (
    <Container>
      <Breadcrumb />
      <Actions />
    </Container>
  )
}
