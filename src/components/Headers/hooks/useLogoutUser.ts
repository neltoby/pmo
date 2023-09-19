import useApiMutation from "@/hooks/useApiMutation"
import { LOGOUT_USER } from "../constant"
import { useRecoilValue, useResetRecoilState } from "recoil"
import { pmoAuthAtom } from "@/auth/state/atoms"
import { logoutUserApi } from "../service"
import { useEffect } from "react"
import { LogoutReturnType } from "../model"
import { redirect } from "next/navigation"
import { signInRole } from "@/components/AdminSignin/state"

export const useLogoutUser = () => {
  const {token} = useRecoilValue(pmoAuthAtom)
  const resetToken = useResetRecoilState(pmoAuthAtom)
  const resetRole = useResetRecoilState(signInRole)
  const { mutate, isSuccess, data, isError, error } = useApiMutation<LogoutReturnType>(LOGOUT_USER, logoutUserApi(token))


  useEffect(() => {
    if (isSuccess) {
      resetToken()
      resetRole()
      redirect('/')
    }
  }, [isSuccess, resetToken])

  return { mutate }
}