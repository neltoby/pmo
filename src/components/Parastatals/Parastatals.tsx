'use client'

import { useGetParastatalsList } from './hooks/useGetParastatalsList'
import { Paper } from '@mantine/core'
import { ParastatalsThemesListType } from './model'
import { Table } from './Tables'

const Parastatals = () => {
  const { data, isLoading, error } = useGetParastatalsList()
  
  return (
  <>
      {isLoading && <Paper>Loading...</Paper>}
      {error && <Paper>Something went wrong</Paper>}
      {data && data.map((item: ParastatalsThemesListType, i: number) => (
        <Table key={item.Id} data={item.parastatals} name={item.name} />
      ))}
  </>
  )


}

export default Parastatals