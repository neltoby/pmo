import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { redirect } from "next/navigation"

import { pmoAuthAtom } from "@/auth/state/atoms"
import { UserTypeRole } from "@/components/AdminSignin/model"
import { signInRole } from "@/components/AdminSignin/state"
import useApiQuery from "../../hooks/useApiQuery"
import { UserDetails } from "../models/auth"
import { USER_DETAILS } from "../constants"
import { getUserDetailsApi } from "../services/auth"

export const useAuthHandler = () => {
  const auth = useRecoilValue(pmoAuthAtom)
  const { refetch, data } = useApiQuery<UserDetails>(USER_DETAILS, getUserDetailsApi(), false)
  // if (!auth.token) {
  //   redirect('/')
  // }
  useEffect(() => { 
    if (!auth.token) {
    redirect('/')
  }
  },[auth.token])

  return {auth, refetch, data}
}