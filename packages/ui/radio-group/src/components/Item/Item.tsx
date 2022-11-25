import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, HTMLAttributes } from 'react';

const ItemStyled = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingTop: 8,
  paddingBottom: 8,
});

export type ItemProps = HTMLAttributes<HTMLDivElement> & {
  css?: PikasCSS;
};

export const Item: FC<ItemProps> = (props) => <ItemStyled {...props} />;
