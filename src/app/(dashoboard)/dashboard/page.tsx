import dynamic, { LoaderComponent } from 'next/dynamic'
const DashboardContent = dynamic(() => import("@/components/Dashboard/DashboardContent"), {
ssr: false,
})
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

export default function Dashboard() {
	return (
		<PageContainer title="Dashboard">
			<DashboardContent />
		</PageContainer>
	);
}