// import PageContainer from '@/components/PageContainer/PageContainer';
// import Projects from '@/components/Projects/Projects';
import dynamic from 'next/dynamic';

const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const Projects = dynamic(() => import("@/components/Projects/Projects"), {
ssr: false,
})

export default function Dashboard() {
	return (
		<PageContainer title="Projects">
			<Projects />
		</PageContainer>
	);
}