import { useRecoilState, useSetRecoilState } from "recoil"
import { redirect } from 'next/navigation'
import { signInRole } from "../state"
import { AdminSigninType, ReturnValueType, UserTypeRole } from "../model"
import useApiMutation from "@/hooks/useApiMutation"
import { SIGNIN_ADMIN } from "../constants"
import { useSignInAdminApi } from "../services"
import { useEffect } from "react"
import { pmoAuthAtom } from "@/auth/state/atoms"

export const useSigninAdmin = (val: AdminSigninType) => {
  const [authToken, setAuthToken] = useRecoilState(pmoAuthAtom)
  const setRole = useSetRecoilState<UserTypeRole>(signInRole)
  const { mutate, isSuccess, data } = useApiMutation<ReturnValueType>(SIGNIN_ADMIN, useSignInAdminApi(val))

  useEffect(() => { 
    if (isSuccess) {
      setAuthToken({ ...authToken, token: data.token })
      setRole(data?.roles)
      redirect('/dashboard')
    }
  },[authToken, data?.roles, data?.token, isSuccess, setRole, setAuthToken, data])
  return { mutate }
}