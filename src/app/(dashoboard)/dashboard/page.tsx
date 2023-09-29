import dynamic, { LoaderComponent } from 'next/dynamic'
const AdminDashboard = dynamic(() => import("@/components/Dashboard/AdminDashboard"), {
ssr: false,
})
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

export default function Dashboard() {
	return (
		<PageContainer title="Dashboard">
			<AdminDashboard />
		</PageContainer>
	);
}