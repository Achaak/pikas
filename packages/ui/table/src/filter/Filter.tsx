import { Textfield } from '@pikas-ui/textfield';
import { styled } from '@pikas-ui/styles';
import { Column } from '@tanstack/react-table';
import { Data, useStateContext } from '../index.js';

const TextfieldContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  columnGap: '$8',
});

export const Filter = <T extends Data>({
  column,
}: {
  column: Column<T, unknown>;
}) => {
  const { table } = useStateContext();

  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id);

  const columnFilterValue = column.getFilterValue();

  return typeof firstValue === 'number' ? (
    <TextfieldContainer>
      <Textfield
        type="number"
        min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
        max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
        value={(columnFilterValue as [number, number])?.[0] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            e.target.value,
            old?.[1],
          ])
        }
        placeholder={`Min ${
          column.getFacetedMinMaxValues()?.[0]
            ? `(${column.getFacetedMinMaxValues()?.[0]})`
            : ''
        }`}
        padding="sm"
        borderRadius="sm"
        fontSize="em-small"
        minWidth={64}
      />
      <Textfield
        type="number"
        min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
        max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
        value={(columnFilterValue as [number, number])?.[1] ?? ''}
        onChange={(e) =>
          column.setFilterValue((old: [number, number]) => [
            old?.[0],
            e.target.value,
          ])
        }
        placeholder={`Max ${
          column.getFacetedMinMaxValues()?.[1]
            ? `(${column.getFacetedMinMaxValues()?.[1]})`
            : ''
        }`}
        padding="sm"
        borderRadius="sm"
        fontSize="em-small"
        minWidth={64}
      />
    </TextfieldContainer>
  ) : (
    <Textfield
      type="text"
      value={(columnFilterValue as string) ?? ''}
      onChange={(e) => column.setFilterValue(e.target.value)}
      placeholder="Search..."
      padding="sm"
      borderRadius="sm"
      fontSize="em-small"
      minWidth={128}
    />
  );
};
