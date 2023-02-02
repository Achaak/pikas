import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, ReactNode } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import {
  RadioGroupDirection,
  RadioGroupFlexWrap,
  RadioGroupOrientation,
} from '../../types.js';

const RootStyled = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  columnGap: 8,
  rowGap: 8,

  "&[data-orientation='vertical']": {
    flexDirection: 'column',
  },
  "&[data-orientation='horizontal']": {
    flexDirection: 'row',
  },
});

export type RootProps = {
  disabled?: boolean;
  css?: PikasCSS;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
  orientation?: RadioGroupOrientation;
  dir?: RadioGroupDirection;
  loop?: boolean;
  children?: ReactNode;
  flexWrap?: RadioGroupFlexWrap;
};

export const Root: FC<RootProps> = ({ flexWrap, css, ...props }) => (
  <RootStyled
    {...props}
    css={{
      flexWrap,
      ...css,
    }}
  />
);
