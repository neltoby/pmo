import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table'
import React, { FC } from 'react'

type TableProp = {
  columns: MRT_ColumnDef<any>[],
  data: any[]
}

const CustomTable: FC<TableProp> = ({columns, data}) => {
  return (
    <MantineReactTable
				columns={columns}
				data={data}
				mantinePaperProps={{ shadow: '0', withBorder: false }}
			/>
  )
}

export default CustomTable