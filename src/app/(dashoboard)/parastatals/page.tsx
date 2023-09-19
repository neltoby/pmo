// import PageContainer from "@/components/PageContainer/PageContainer"
// import ParastatalsTable from "@/components/Parastatals/Parastatals"
import dynamic from "next/dynamic"
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const ParastatalsTable = dynamic(() => import("@/components/Parastatals/Parastatals"), {
ssr: false,
})

const Parastatals = () => {
  return (
    <PageContainer title="Parastatals">
			<ParastatalsTable />
		</PageContainer>
  )
}

export default Parastatals