import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import * as LabelPrimitive from '@radix-ui/react-label';
import { ReactNode, FC } from 'react';

const LabelStyled = styled(LabelPrimitive.Label, {
  fontSize: '$EM-SMALL',
  fontWeight: '$BOLD',
  display: 'block',
  color: '$BLACK',
});

export interface LabelProps {
  children?: ReactNode;
  css?: PikasCSS;
  htmlFor?: string;
}

export const Label: FC<LabelProps> = ({ children, css, htmlFor }) => {
  return (
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
};
