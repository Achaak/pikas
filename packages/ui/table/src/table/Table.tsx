import { styled } from '@pikas-ui/styles';
import { Data, useStateContext } from '../index.js';
import { Thead } from '../thead/Thead.js';
import { Tfoot } from '../tfoot/Tfoot.js';
import { Tbody } from '../tbody/Tbody.js';
import { useMemo } from 'react';

const TableStyled = styled('table', {
  borderCollapse: 'collapse',
  borderRadius: '$sm',
  color: '$black',

  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});

export type VisibleCell = 'all' | 'center' | 'left' | 'right';

type TbodyProps = {
  visibleCell: VisibleCell;
};

export const TableElement = <T extends Data>({ visibleCell }: TbodyProps) => {
  const { variant, css, hasTfoot, table } = useStateContext<T>();

  if (
    (visibleCell === 'left' && table.getLeftTotalSize() === 0) ||
    (visibleCell === 'right' && table.getRightTotalSize() === 0) ||
    (visibleCell === 'center' && table.getCenterTotalSize() === 0)
  ) {
    return null;
  }

  const tableSize = useMemo(() => {
    if (visibleCell === 'left') {
      return table.getLeftTotalSize();
    }

    if (visibleCell === 'right') {
      return table.getRightTotalSize();
    }

    if (visibleCell === 'center') {
      return table.getCenterTotalSize();
    }

    return table.getTotalSize();
  }, [table, visibleCell]);

  return (
    <TableStyled variant={variant} css={{ width: tableSize, ...css?.table }}>
      <Thead visibleCell={visibleCell} />

      <Tbody visibleCell={visibleCell} />

      {hasTfoot ? <Tfoot visibleCell={visibleCell} /> : null}
    </TableStyled>
  );
};
