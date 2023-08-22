import { PageContainer } from "@/components/PageContainer/PageContainer"
import { PaginationTable } from "@/components/Table/PaginationTable"
import { SimpleTable } from "@/components/Table/SimpleTable"

const Parastatals = () => {
  return (
    <PageContainer title="Parastatals">
			<SimpleTable />
			{/* <PaginationTable /> */}
		</PageContainer>
  )
}

export default Parastatals