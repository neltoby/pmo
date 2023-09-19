// import Notice from "@/components/NoticeBoard"
// import PageContainer from "@/components/PageContainer/PageContainer"
import dynamic from "next/dynamic"

const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})
const Notice = dynamic(() => import("@/components/NoticeBoard"), {
ssr: false,
})

const NoticeBoard = () => {
  return (
    <PageContainer title="Notice Board">
      <Notice />
    </PageContainer>
  )
}

export default NoticeBoard