import { ToastVariant } from '@pikas-ui/toast'
import { ToastProvider } from '@pikas-ui/toast'
import { ExampleContainer } from '@/components/ExampleContainer'
import { ToastItem } from './toastItem'

export const ToastExample: React.FC = () => {
  return (
    <ExampleContainer
      css={{
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <ToastProvider position="top-left">
        {Object.keys(ToastVariant).map((variant, variantKey) => (
          <ToastItem variant={variant as ToastVariant} key={variantKey} />
        ))}
      </ToastProvider>
    </ExampleContainer>
  )
}
