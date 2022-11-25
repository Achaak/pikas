import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, HTMLAttributes } from 'react';

const ContainerStyled = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
});

export type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  css?: PikasCSS;
};

export const Container: FC<ContainerProps> = (props) => (
  <ContainerStyled {...props} />
);
