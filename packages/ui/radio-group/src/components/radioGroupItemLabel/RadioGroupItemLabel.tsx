import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC } from 'react';
import { Label as LabelRadixUI, LabelProps } from '@radix-ui/react-label';

const RadioGroupItemLabelStyled = styled(LabelRadixUI, {
  fontSize: '$EM-SMALL',
  cursor: 'unset',
  color: '$BLACK',
});

export type RadioGroupItemLabelProps = LabelProps & {
  css?: PikasCSS;
};

export const RadioGroupItemLabel: FC<RadioGroupItemLabelProps> = (props) => (
  <RadioGroupItemLabelStyled {...props} />
);
