import { ExampleContainer, styled } from '@pikas/docs-ui';
import { useMediaScreenValid } from '@pikas-utils/screen';
import { FC } from 'react';

const Content = styled('div', {
  color: '$BLACK',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
});

export const UseMediaScreenValidExample: FC = () => {
  const mediaValid = useMediaScreenValid({ media: 'md', operator: '>' });

  return (
    <ExampleContainer>
      <Content>
        <span>
          Media screen: <b>md</b>
        </span>
        <span>
          Operator: <b>&gt;</b>
        </span>
        <span>
          Media valid: <b>{mediaValid ? 'true' : 'false'}</b>
        </span>
      </Content>
    </ExampleContainer>
  );
};
