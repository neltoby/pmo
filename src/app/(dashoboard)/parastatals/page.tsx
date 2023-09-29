// import PageContainer from "@/components/PageContainer/PageContainer"
// import ParastatalsTable from "@/components/Parastatals/Parastatals"
import dynamic from "next/dynamic"
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const AdminParastatal = dynamic(() => import("@/components/Parastatals/AdminParastatal"), {
ssr: false,
})

const Parastatals = () => {
  return (
    <PageContainer title="Parastatals">
			<AdminParastatal />
		</PageContainer>
  )
}

export default Parastatals