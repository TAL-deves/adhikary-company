"use client"
import React, { useMemo } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { data, Person } from './client';
import Image from 'next/image';

export const ClientPage = () => {
  //console.log("data", data);
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
        // CELL: () => (
        //   <>
        //     {/* <Image
        //       src={data}
        //       alt="Person"
        //       style={{ width: '50px', height: 'auto' }}
        //     /> */}
        //     <h1>hello</h1>
        //   </>
        // ),
        Cell: ({renderedCellValue, row}) => (
          <Image 
          loader={()=>{
            return `${renderedCellValue}?w=500&q=100`
          }}
          src={renderedCellValue}
          alt="client-image"
          width={100}
          height={100}
          />
        ),

      }
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
