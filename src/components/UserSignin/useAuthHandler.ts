import { kiaGoAuthAtom } from "@/auth/state/atoms"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import { useRecoilValue } from "recoil"

export const useAuthHandler = () => {
  const auth = useRecoilValue(kiaGoAuthAtom)
  if (!auth.token) {
    redirect('/')
  }
  // useEffect(() => { 
  //   if (!auth.token) {
  //   redirect('/')
  // }
  // },[])

  return {auth}
}