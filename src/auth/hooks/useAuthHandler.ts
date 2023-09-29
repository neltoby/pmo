import { useEffect } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { redirect, usePathname, useSearchParams } from "next/navigation"

import { pmoAuthAtom } from "@/auth/state/atoms"
import useApiQuery from "../../hooks/useApiQuery"
import { UserDetails } from "../models/auth"
import { USER_DETAILS } from "../constants"
import { getUserDetailsApi } from "../services/auth"
import { useSigninRedirect } from "@/components/Signin/hooks/useSigninRedirect"
import { defaultParastatals } from "@/components/Department/state/department.atom"
import { signInRole } from "@/components/AdminSignin/state"
import { userDetailsState, userEditDetailsState } from "@/components/Profile/state"
import { UserDetailsType } from "@/components/Profile/model"

export const useAuthHandler = () => {
  const currentPage = usePathname()

  const [auth, setAuth] = useRecoilState(pmoAuthAtom)
  const [pid, setPid] = useRecoilState(defaultParastatals)
  const [role, setRole] = useRecoilState(signInRole)
  const setUser = useSetRecoilState<UserDetailsType>(userDetailsState)
  const setEditUser = useSetRecoilState<UserDetailsType>(userEditDetailsState)
  
  const { refetch, data, error } = useApiQuery<UserDetails>(USER_DETAILS, getUserDetailsApi(), false)
  const { signinRedirect } = useSigninRedirect(pid)
  console.log(error)

  useEffect(() => { 
    if (!auth.token) {
      redirect('/')
    }
  }, [auth.token])

  useEffect(() => { 
    if (error?.response.status == 401)
      setAuth(val => ({ ...val, token: '' }))
      setRole(null)
  }, [error])

  useEffect(() => { 
    if (!pid) {
      setPid(data?.parastatal)
    }
  }, [data, pid])
  
  useEffect(() => { 
    if (data) {
      const { role, ...rest } = data
      setUser(val => ({ ...val, ...rest }))
      setEditUser(val => ({ ...val, ...rest }))
    }
  }, [data])

  useEffect(() => { 
    if (auth.token)
      if(currentPage === '/' || currentPage === '/signup')
        if (pid) 
          signinRedirect(role)
      
  },[auth.token, data, currentPage, pid])
  

  return {auth, refetch, data}
}