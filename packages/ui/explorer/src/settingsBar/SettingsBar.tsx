import { styled } from '@pikas-ui/styles'
import { useContext } from 'react'
import { ExplorerContext } from '../Explorer.js'
import { Breadcrumb } from './breadcrumb/Breadcrumb.js'

const Container = styled('div', {
  display: 'flex',
  marginBottom: 16,
})

export interface SettingsBarProps {}

export const SettingsBar: React.FC<SettingsBarProps> = () => {
  const { breadcrumb } = useContext(ExplorerContext)

  if (!breadcrumb) {
    return null
  }

  return (
    <Container>
      <Breadcrumb />
    </Container>
  )
}
