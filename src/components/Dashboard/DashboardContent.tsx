'use client';

import { Flex, Grid, SimpleGrid } from '@mantine/core';
import { StatsGroup } from '../StatsGroup';
import { mockData } from '../StatsGroup/mock';
import Charts from './Charts';
import { chartMockData, piechartMockData } from './mock';
import { OverviewCardPropType } from './OverviewCard';
import BarCharts from './BarChart';
import PieCharts from './PieChart';
import { useRecoilState } from 'recoil';
import { kiaGoAuthAtom } from '@/auth/state/atoms';

export function DashboardContent() {
	const [authToken, setAuthToken] = useRecoilState(kiaGoAuthAtom)
	return (
		<Grid>
			<Grid.Col sm={12} md={12} lg={12}>
				<Flex direction="column" h="100%" justify="space-between" gap="md">
					<StatsGroup data={mockData} />
				</Flex>
			</Grid.Col>
			<Charts data={chartMockData as OverviewCardPropType[]} />
			<BarCharts data={chartMockData as OverviewCardPropType[]} />
			<PieCharts data={piechartMockData} />
		</Grid>
	);
}
