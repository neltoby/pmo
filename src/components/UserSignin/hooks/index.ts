import { useRecoilState, useSetRecoilState } from "recoil"
import { redirect } from 'next/navigation'
// import { signInRole } from "../state"
import { SigninType, ReturnValueType } from "../model"
import useApiMutation from "@/hooks/useApiMutation"
import { SIGNIN_USER } from "../constants"
import { useSignInAdminApi } from "../services"
import { useEffect } from "react"
import { kiaGoAuthAtom } from "@/auth/state/atoms"
import { signInRole } from "@/components/AdminSignin/state"
import { Role, UserTypeRole } from "@/components/AdminSignin/model"

export const useSigninUser = (val: SigninType) => {
  const [authToken, setAuthToken] = useRecoilState(kiaGoAuthAtom)
  const setRole = useSetRecoilState<UserTypeRole>(signInRole)
  const { mutate, isSuccess, data } = useApiMutation<ReturnValueType>(SIGNIN_USER, useSignInAdminApi(val))

  useEffect(() => { 
    if (isSuccess) {
      if (data?.role) {
        setAuthToken({ ...authToken, token: data.token })
        setRole({ role: data?.role[0] })
        redirect(data?.role[0] === Role.Admin ? '/dashboard' : data?.role[0] === Role.ParastatalsHeads ? `/dashboard` : data?.role[0] === Role.DepartmentHeads ? `parastatals/${data?.parastatals}/department/${data?.department}` : `parastatals/${data?.parastatals}/department/${data?.department}`)
      }
    }
  },[authToken, data?.role, data?.token, isSuccess, setRole, setAuthToken, data])
  return { mutate }
}