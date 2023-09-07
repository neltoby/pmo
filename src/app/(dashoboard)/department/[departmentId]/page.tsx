import dynamic, { LoaderComponent } from 'next/dynamic'
const DepartmentIdComponent = dynamic(() => import("@/components/Department/DepartmentId"), {
ssr: false,
})
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const DepartmentId = ({
  params,
  searchParams,
}: {
  params: { departmentId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
  }) => {
  console.log(params, 'line 16')
  return (
     <PageContainer title="Department">
			<DepartmentIdComponent department={params.departmentId} />
		</PageContainer>
  )
}

export default DepartmentId