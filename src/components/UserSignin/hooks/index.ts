import { useRecoilState, useSetRecoilState } from "recoil"
import { redirect } from 'next/navigation'
// import { signInRole } from "../state"
import { AdminSigninType, ReturnValueType, Role, UserTypeRole } from "../model"
import useApiMutation from "@/hooks/useApiMutation"
import { SIGNIN_ADMIN } from "../constants"
import { useSignInAdminApi } from "../services"
import { useEffect } from "react"
import { kiaGoAuthAtom } from "@/auth/state/atoms"
import { signInRole } from "@/components/AdminSignin/state"

export const useSigninAdmin = (val: AdminSigninType) => {
  const [authToken, setAuthToken] = useRecoilState(kiaGoAuthAtom)
  const setRole = useSetRecoilState<UserTypeRole>(signInRole)
  const { mutate, isSuccess, data } = useApiMutation<ReturnValueType>(SIGNIN_ADMIN, useSignInAdminApi(val))

  useEffect(() => { 
    if (isSuccess) {
      setAuthToken({ ...authToken, token: data.token })
      setRole({ role: data?.role[0] })
      redirect(data?.role[0] === Role.Admin ? '/dashboard' : data?.role[0] === Role.ParastatalsHeads ? `parastatals/${data?.parastatals}` : data?.role[0] === Role.DepartmentHeads ? `parastatals/${data?.parastatals}/department/${data?.department}` : `parastatals/${data?.parastatals}/department/${data?.department}`)
    }
  },[authToken, data?.role[0], data?.token, isSuccess, setRole, setAuthToken, data])
  return { mutate }
}