"use client"
import React, { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { data, Person } from './client';

export const ClientPage = () => {
  const columns: MRT_ColumnDef<Person>[] = useMemo(
    () => [
      {
        accessorKey: 'name',
        header: 'Name of Clients',
      },
      {
        accessorKey: 'type',
        header: 'Type',
      },
      {
        accessorKey: 'countryName',
        header: 'Client Origin	',
      },
      {
        accessorKey: 'imageUrl',
        header: 'Logo',
        // Render the image using JSX
        Cell: ({ cellData }) => (
          <img
            src={cellData}
            alt="Person"
            style={{ width: '50px', height: 'auto' }}
          />
        ),
      },
  
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
      muiTableProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
      muiTableBodyCellProps={{
        sx: {
          border: '1px solid rgba(81, 81, 81, 1)',
        },
      }}
    />
  );
};

export default ClientPage;
