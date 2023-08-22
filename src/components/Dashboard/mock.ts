import { data } from "./OverviewCard";
import { piedata } from "./PieChartsOverview";

export const chartMockData = [
  {
    title: 'Projects Comparison',
    data: data
  },
  {
    title: 'Road Project',
    data: data
  },
  {
    title: 'Light Project',
    data: data
  },
]

export const piechartMockData = [{title: 'Alausa projects', ...piedata}, {title: 'Housing', ...piedata}, {title: 'Water board project', ...piedata}]