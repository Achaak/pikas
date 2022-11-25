import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, ReactNode } from 'react';
import { RadioGroupItem as RadioGroupPrimitiveItem } from '@radix-ui/react-radio-group';

const RadioGroupItemStyled = styled(RadioGroupPrimitiveItem, {
  all: 'unset',
  backgroundColor: '$WHITE_FIX',
  borderStyle: 'solid',
  borderWidth: 2,
  borderColor: '$GRAY',

  '&:focus': {
    outline: 'solid',
    outlineColor: '$PRIMARY',
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
