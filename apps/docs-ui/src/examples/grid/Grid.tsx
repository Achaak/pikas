import { Grid } from '@pikas-ui/grid';
import { ExampleContainer, styled } from '@pikas/docs-ui';
import { FC } from 'react';

const Block = styled('div', {
  backgroundColor: '$primary',
  width: '100%',
  height: 100,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white-fixed',
});

export const GridExample: FC = () => (
  <ExampleContainer>
    <Grid type="container" cols={{ default: 12 }}>
      <Grid type="item" cols={{ default: 12, xl: 6 }}>
        <Block>1</Block>
      </Grid>
      <Grid type="item" cols={{ default: 12, md: 6, xl: 3 }}>
        <Block>2</Block>
      </Grid>
      <Grid type="item" cols={{ default: 12, md: 6, xl: 3 }}>
        <Block>3</Block>
      </Grid>
      <Grid
        type="item"
        cols={{ default: 12, xl: 6 }}
        start={{ default: 1, xl: 7 }}
      >
        <Block>4</Block>
      </Grid>
    </Grid>
  </ExampleContainer>
);
