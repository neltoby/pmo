import { Card, Stack, Title } from '@mantine/core';
import {
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LineElement,
	LinearScale,
	PointElement,
	Tooltip,
} from 'chart.js';
import { FC, ReactElement, ReactNode } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
export type ChartDataPropType = {
	labels: Array<string>;
	datasets: {
		label: string,
		data: Array<number>
		tension?: number,
		borderColor?: string,
		backgroundColor: string,
	}[]
}
export type OverviewCardPropType = {
	title: string;
	children?: ReactElement;
	data?: ChartDataPropType
}

export const options = {
	responsive: true,
	smooth: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Item A',
			data: labels.map(() => Math.random() * 1000),
			tension: 0.4,
			borderColor: '#3BC9DB',
			backgroundColor: '#3BC9DB',
		},
		{
			label: 'Item B',
			data: labels.map(() => Math.random() * 1000),
			tension: 0.4,
			borderColor: '#748FFC',
			backgroundColor: '#748FFC',
		},
	],
};

const OverviewCard: FC<OverviewCardPropType> = ({title, data, children}) => {
	return (
		<Card radius="md" w="100%" h="100%">
			<Stack h="100%" justify="between">
				<Title order={5}>{title}</Title>
				{children ? children : <Line options={options} data={data as unknown as ChartDataPropType} />}
			</Stack>
		</Card>
	);
}

export default OverviewCard;
