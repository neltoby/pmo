import { FC } from 'react'
import { Grid } from '@mantine/core'
import OverviewCard, { ChartDataPropType, OverviewCardPropType } from './OverviewCard'
import PieChartOverview, { PieChartDataType, PieChartOverviewPropTypes } from './PieChartsOverview'

export type PieChartOverviewArrayType = {
  data: PieChartDataType[]
}

const PieCharts: FC<PieChartOverviewArrayType> = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <Grid.Col key={item.title} sm={12} md={6} lg={4}><OverviewCard data={item as unknown as ChartDataPropType} title={item.title as string}>
          <PieChartOverview data={item} />
        </OverviewCard>
        </Grid.Col>
      ))}
    </>
  )
}
export default PieCharts