import { FC } from 'react'
import { Grid } from '@mantine/core'
import OverviewCard, { OverviewCardPropType } from './OverviewCard'

export type ChartsPropType = {
  data: OverviewCardPropType[]
}

const Charts: FC<ChartsPropType> = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <Grid.Col key={item.title} sm={12} md={6} lg={4}><OverviewCard data={item.data} title={item.title} /></Grid.Col>
      ))}
    </>
  )
}
export default Charts