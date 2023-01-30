import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { forwardRef, HTMLAttributes } from 'react';
import { TableVariant } from '../index.js';

const TrStyled = styled('tr', {
  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});
export type TrProps = HTMLAttributes<HTMLTableRowElement> & {
  variant?: TableVariant;
  css?: PikasCSS;
};

export const Tr = forwardRef<HTMLTableRowElement, TrProps>((props, ref) => (
  <TrStyled ref={ref} {...props} />
));

Tr.displayName = 'Tr';
