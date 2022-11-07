import { IconByName } from '@pikas-ui/icons';
import type { PikasColor } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { FC } from 'react';

const Container = styled('div', {
  width: '100%',
  padding: 32,
  marginBottom: 24,

  '@sm': {
    brTL: 'md',
    brTR: 'md',
  },
});

type InfoDialogProps = {
  backgroundColorName: PikasColor;
  iconName: string;
};

export const IconContainer: FC<InfoDialogProps> = ({
  backgroundColorName,
  iconName,
}) => (
  <Container
    css={{
      backgroundColor: `$${backgroundColorName}`,
    }}
  >
    <IconByName name={iconName} size={100} colorName="WHITE" />
  </Container>
);
