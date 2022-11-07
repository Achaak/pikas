import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { Label as LabelPrimitiveLabel } from '@radix-ui/react-label';
import { ReactNode, FC } from 'react';

const LabelStyled = styled(LabelPrimitiveLabel, {
  fontSize: '$EM-SMALL',
  fontWeight: '$BOLD',
  display: 'block',
  color: '$BLACK',
});

export type LabelProps = {
  children?: ReactNode;
  css?: PikasCSS;
  htmlFor?: string;
};

export const Label: FC<LabelProps> = ({ children, css, htmlFor }) => (
  <LabelStyled
    css={{
      ...(htmlFor && {
        cursor: 'pointer',
      }),
      ...css,
    }}
    htmlFor={htmlFor}
  >
    {children}
  </LabelStyled>
);
