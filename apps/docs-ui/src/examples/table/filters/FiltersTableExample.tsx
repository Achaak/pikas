import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import {
  FilterFn,
  rankItem,
  Table,
  TableColumnFiltersState,
} from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';
import { Textfield } from '@pikas-ui/textfield';

const fuzzyFilter: FilterFn<Person> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const FiltersTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [columnFilters, setFilters] = useState<TableColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');

  useEffect(() => {
    setData(() => makeData(10));
  }, []);

  const refreshData = () => setData(() => makeData(10));

  if (data.length === 0) {
    return null;
  }

  return (
    <ExampleContainer>
      <Textfield
        defaultValue={globalFilter}
        onChange={(e) => setGlobalFilter(e.target.value)}
        placeholder="Search..."
        css={{
          container: {
            marginBottom: '$4',
          },
        }}
      />
      <Table
        data={data}
        variant="light"
        emptyMessage="No data found"
        columns={[
          {
            header: 'First Name',
            accessorKey: 'firstName',
            id: 'firstName',
          },
          {
            header: 'Last Name',
            accessorKey: 'lastName',
            id: 'lastName',
          },
          {
            header: 'Age',
            accessorKey: 'age',
            id: 'age',
          },
          {
            header: 'Visits',
            accessorKey: 'visits',
            id: 'visits',
          },
          {
            header: 'Status',
            accessorKey: 'status',
            id: 'status',
          },
          {
            header: 'Progress',
            accessorKey: 'progress',
            id: 'progress',
            cell: ({ getValue }) =>
              `${Math.round(getValue<number>() * 100) / 100}%`,
          },
        ]}
        filters={{
          enabled: true,
          globalFilter: globalFilter,
          globalFilterFn: fuzzyFilter,
        }}
        sorting={{
          enabled: true,
        }}
        pagination={{
          enabled: true,
        }}
      />

      <BottomTools
        refreshData={refreshData}
        nbRows={data.length}
        code={columnFilters}
      />
    </ExampleContainer>
  );
};
