import { styled } from '@pikas-ui/styles';
import { DialogIconContainer } from '../../Components/IconContainer/index.js';
import { DialogTitle } from '../../Components/Title/Title.js';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 8,
});

export type ValidateDialogHeaderProps = {
  title?: string;
};

export const ValidateDialogHeader: FC<ValidateDialogHeaderProps> = ({
  title,
}) => (
  <Container>
    <DialogIconContainer
      iconName="ant-design:question-circle-outlined"
      backgroundColorName="warning"
    />
    <DialogTitle
      css={{
        padding: '0px 32px',
        '@sm': {
          padding: '0px 40px',
        },
      }}
    >
      {title}
    </DialogTitle>
  </Container>
);
