import { Grid } from '@pikas-ui/grid'
import { useContext } from 'react'
import { ExplorerContext } from '../../Explorer.js'
import { GridItem } from '../gridItem/index.js'

export interface GridContainerProps {}

export const GridContainer: React.FC<GridContainerProps> = () => {
  const { items } = useContext(ExplorerContext)

  return (
    <Grid
      type="container"
      cols={{ default: 4 }}
      rowGap={{ default: 16 }}
      columnGap={{ default: 16 }}
    >
      {items.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </Grid>
  )
}
