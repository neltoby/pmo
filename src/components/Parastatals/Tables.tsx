'use client';

import { FC, useMemo } from 'react';
import { Button, Paper, Space, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import Link from 'next/link';
import { ParastatalsList, TableType } from './model';
import Snowfall from 'react-snowfall';

// nested data is ok, see accessorKeys in ColumnDef below
// const data: ParastatalsType[] = allParastatalsWithLabels;

export const Table: FC<TableType> = ({data, name}) => {
	//should be memoized or stable
	const columns = useMemo<MRT_ColumnDef<ParastatalsList>[]>(
		() => [
			{
				accessorKey: 'name', //access nested data with dot notation
				header: 'Name',
			},
			{
				accessorKey: 'Id', //access nested data with dot notation
				header: '',
				Cell: ({ cell }) => (
					<Link href={`/parastatals/${cell.getValue()}/department`}>
						<Button
						color='#fff'        
						style={{ backgroundColor: '#00acee'}}
						>
							Department
						</Button>
					</Link>
				),
			},

		],
		[]
	);

  return (
    <>
      <Paper withBorder radius="md" p="md" sx={() => ({
				position: 'relative',
			})}>
        <Snowfall
          color="red"
          // Applied to the canvas element
          style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
          // Controls the number of snowflakes that are created (default 150)
          snowflakeCount={700}
        />
        
        <Space h="md" />
        <Title c='black' order={1}>{name}</Title>
        <Space h="md" />
        <MantineReactTable
          columns={columns}
          data={data}
          mantinePaperProps={{
            shadow: '0', withBorder: false, sx: () => ({
              backgroundColor: 'transparent',
              zIndex: 1,
          }) }}
        />
      </Paper>
      <Space h="md" />
    </>
	);
};