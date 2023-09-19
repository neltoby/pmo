
import dynamic from "next/dynamic"
const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const Chats = dynamic(() => import("@/components/Chats/Chats"), {
ssr: false,
})

const Chat = () => {
  return (
    <PageContainer title="Chat">
      <Chats />
    </PageContainer>
  )
}

export default Chat