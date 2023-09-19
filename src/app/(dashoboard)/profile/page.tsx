// import PageContainer from "@/components/PageContainer/PageContainer"
// import ProfileComponent from "@/components/Profile"
import dynamic from "next/dynamic"

const PageContainer = dynamic(() => import("@/components/PageContainer/PageContainer"), {
ssr: false,
})

const ProfileComponent = dynamic(() => import("@/components/Profile"), {
ssr: false,
})

const Profile = () => {
  return (
    <PageContainer title="Profile">
      <ProfileComponent />
    </PageContainer>
  )
}

export default Profile