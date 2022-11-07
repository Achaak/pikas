import type { ToastVariant } from '@pikas-ui/toast';
import { toastVariant, ToastProvider } from '@pikas-ui/toast';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { ToastItem } from './toastItem';

export const ToastExample: FC = () => (
  <ExampleContainer
    css={{
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}
  >
    <ToastProvider position="top-left">
      {Object.keys(toastVariant).map((variant, variantKey) => (
        <ToastItem variant={variant as ToastVariant} key={variantKey} />
      ))}
    </ToastProvider>
  </ExampleContainer>
);
