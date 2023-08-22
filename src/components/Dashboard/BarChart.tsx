import { FC } from 'react'
import { Grid } from '@mantine/core'
import OverviewCard, { OverviewCardPropType } from './OverviewCard'
import BarChartOverview from './BarChartOverview.tsx'

export type BarChartsPropType = {
  data: OverviewCardPropType[]
}

const BarCharts: FC<BarChartsPropType> = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <Grid.Col key={item.title} sm={12} md={6} lg={4}><OverviewCard data={item.data} title={item.title}>
          <BarChartOverview labels={item.data?.labels as Array<string>} datasets={item.data?.datasets as unknown as {label: string, data: number[], tension?: number, borderColor?: string,
		backgroundColor: string,}[]} />
        </OverviewCard>
        </Grid.Col>
      ))}
    </>
  )
}
export default BarCharts