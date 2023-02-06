import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { forwardRef, HTMLAttributes } from 'react';
import { useStateContext } from '../index.js';

const TrStyled = styled('tr', {
  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});
export type TrProps = HTMLAttributes<HTMLTableRowElement> & {
  css?: PikasCSS;
};

export const Tr = forwardRef<HTMLTableRowElement, TrProps>((props, ref) => {
  const { variant, css } = useStateContext();

  return (
    <TrStyled
      ref={ref}
      variant={variant}
      css={{
        ...props.css,
        ...css?.tr,
      }}
      {...props}
    />
  );
});

Tr.displayName = 'Tr';
