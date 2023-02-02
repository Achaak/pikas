import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, ReactNode } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const RadioGroupItemStyled = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$white-fixed',
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: '$gray',

  '&:focus': {
    outline: 'solid',
    outlineColor: '$primary',
    outlineWidth: 2,
  },
});

export type RadioGroupItemProps = {
  css?: PikasCSS;
  children?: ReactNode;
  value: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
};

export const RadioGroupItem: FC<RadioGroupItemProps> = (props) => (
  <RadioGroupItemStyled {...props} />
);
