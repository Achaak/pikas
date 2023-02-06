import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import * as LabelPrimitive from '@radix-ui/react-label';
import { FC } from 'react';

const LabelStyled = styled(LabelPrimitive.Label, {
  fontSize: '$em-small',
  fontWeight: '$bold',
  display: 'block',
  color: '$black',
});

export type LabelProps = LabelPrimitive.PrimitiveLabelProps & {
  css?: PikasCSS;
};

export const Label: FC<LabelProps> = ({ css, htmlFor, ...props }) => (
  <LabelStyled
    css={{
      ...(htmlFor && {
        cursor: 'pointer',
      }),
      ...css,
    }}
    htmlFor={htmlFor}
    {...props}
  />
);
