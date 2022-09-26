import type { ToastPosition } from '@pikas-ui/toast'
import { ExampleContainer } from '@pikas/docs-ui'
import { DefaultToastProvider } from './defaultToastProvider'
import { toastPosition } from '../utils'

export const DefaultToastExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {toastPosition.map((position, positionKey) => (
        <DefaultToastProvider
          key={positionKey}
          position={position as ToastPosition}
        />
      ))}
    </ExampleContainer>
  )
}
