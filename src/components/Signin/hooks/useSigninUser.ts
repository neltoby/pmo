import { redirect } from 'next/navigation'
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"

import useApiMutation from "@/hooks/useApiMutation"
import { SIGNIN_USER } from "../constant"
import { ReturnValueType, Role, UserSignInType } from "../model"
import { loginUserApi } from "../service"
import { userSigninDataAtom } from "../state"
import { useEffect, useState } from 'react'
import { pmoAuthAtom } from '@/auth/state/atoms'
import { useDisclosure } from '@mantine/hooks'
import { signInRole } from '@/components/AdminSignin/state'

export const useSigninUser = () => {
  const [authToken, setAuthToken] = useRecoilState(pmoAuthAtom)
  const [visible, { toggle }] = useDisclosure(false);
  const [isErrorNotif, setIsErrorNotif] = useState(false)
  const [role, setRole] = useRecoilState(signInRole)
  const userCred = useRecoilValue<UserSignInType>(userSigninDataAtom)
  const resetUser = useResetRecoilState(userSigninDataAtom)
  const { mutate, isSuccess, data, isLoading, isError, error, status } = useApiMutation<ReturnValueType>(SIGNIN_USER, loginUserApi(userCred))

  useEffect(() => {
    if (isSuccess) {
      if (data?.role) {
        setAuthToken({ ...authToken, token: data.token })
        setRole(data.role)
        redirect(data?.role === Role.Admin ? '/dashboard' : data?.role === Role.ParastatalsHeads ? `/dashboard/parastatals/${data.parastatal}` : data?.role === Role.DepartmentHeads ? `parastatals/${data?.parastatal}/department` : `parastatals/${data?.parastatal}/department`)
      }
    }
  }, [isSuccess])

  useEffect(() => {
    if (isSuccess || isError) { 
      toggle()
    } 
    if (isError) {
      setIsErrorNotif(true)
    }
  }, [isSuccess, isError]);

  useEffect(() => {
    if (isSuccess) {
      resetUser()
    }
  }, [isSuccess, resetUser])

  return {
    isSuccess,
    data,
    isLoading,
    isError,
    error,
    status,
    visible,
    isErrorNotif,
    mutate,
    toggle,
    setIsErrorNotif
  }
}