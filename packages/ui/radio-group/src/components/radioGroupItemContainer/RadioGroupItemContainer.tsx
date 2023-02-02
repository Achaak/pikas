import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, HTMLAttributes } from 'react';

const RadioGroupItemContainerStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: 8,
  cursor: 'pointer',

  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  },
});

export type RadioGroupItemContainerProps = HTMLAttributes<HTMLDivElement> & {
  disabled?: boolean;
  css?: PikasCSS;
};

export const RadioGroupItemContainer: FC<RadioGroupItemContainerProps> = (
  props
) => <RadioGroupItemContainerStyled {...props} />;
