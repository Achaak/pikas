import { Grid } from '@pikas-ui/grid';
import { useContext, FC } from 'react';
import { ExplorerContext } from '../../Explorer.js';
import { GridItem } from '../gridItem/index.js';

export const GridContainer: FC = () => {
  const { items, gridCols, gridRowGap, gridColumnGap } =
    useContext(ExplorerContext);

  return (
    <Grid
      type="container"
      cols={gridCols}
      rowGap={gridRowGap}
      columnGap={gridColumnGap}
    >
      {items.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </Grid>
  );
};
