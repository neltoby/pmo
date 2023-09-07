import dynamic, { LoaderComponent } from 'next/dynamic'
const DepartmentComponent = dynamic(() => import("@/components/Department/Department"), {
ssr: false,
})
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const Department = () => {
  return (
    <PageContainer title="Department">
			<DepartmentComponent />
		</PageContainer>
  )
}

export default Department