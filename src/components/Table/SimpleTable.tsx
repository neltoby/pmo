'use client';

import { allParastatalsWithLabels } from '@/utils/seed';
import { Button, Paper, Space, Stack, Title } from '@mantine/core';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import Link from 'next/link';
import { useMemo } from 'react';

export type ParastatalsType = {
	label: string,
	value: string,
};

// nested data is ok, see accessorKeys in ColumnDef below
const data: ParastatalsType[] = allParastatalsWithLabels;

export const SimpleTable = () => {
	//should be memoized or stable
	const columns = useMemo<MRT_ColumnDef<ParastatalsType>[]>(
		() => [
			{
				accessorKey: 'label', //access nested data with dot notation
				header: 'Name',
			},
			{
				accessorKey: 'label', //access nested data with dot notation
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
		<Paper withBorder radius="md" p="md">
			<Title order={5}>List of all Parastatals</Title>
			<Space h="md" />
			<MantineReactTable
				columns={columns}
				data={data}
				mantinePaperProps={{ shadow: '0', withBorder: false }}
			/>
		</Paper>
	);
};
