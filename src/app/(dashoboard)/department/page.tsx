import dynamic, { LoaderComponent } from 'next/dynamic'
const AdminDepartment = dynamic(() => import("@/components/Department/AdminDepartment"), {
ssr: false,
})
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const Department = () => {
  return (
    <PageContainer title="Department">
			<AdminDepartment />
		</PageContainer>
  )
}

export default Department