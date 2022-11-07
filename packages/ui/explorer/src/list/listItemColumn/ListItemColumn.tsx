import { styled } from '@pikas-ui/styles';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  minWidth: 100,
});

export interface ListItemColumnProps {
  children?: ReactNode;
  flex?: number;
  width?: number;
}

export const ListItemColumn: FC<ListItemColumnProps> = ({
  children,
  flex,
  width,
}) => {
  return (
    <Container
      css={{
        flex: flex,
        width: width,
        minWidth: width,
      }}
    >
      {children}
    </Container>
  );
};
