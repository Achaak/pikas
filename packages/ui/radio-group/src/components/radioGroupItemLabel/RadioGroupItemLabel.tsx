import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

const RadioGroupItemLabelStyled = styled(LabelPrimitive.Label, {
  fontSize: '$em-small',
  cursor: 'unset',
  color: '$black',
});

export type RadioGroupItemLabelProps = LabelPrimitive.LabelProps & {
  css?: PikasCSS;
};

export const RadioGroupItemLabel: FC<RadioGroupItemLabelProps> = (props) => (
  <RadioGroupItemLabelStyled {...props} />
);
