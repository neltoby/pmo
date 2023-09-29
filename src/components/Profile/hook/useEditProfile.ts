import useApiMutation from "@/hooks/useApiMutation"
import { UPLOAD_IMAGE } from "../constant"
import { uploadFileApi } from "../service"
import { UserDetailsType } from "../model"
import { useQueryClient } from "react-query"
import { USER_DETAILS } from "@/auth/constants"
import { useEffect } from "react"
import { useSetRecoilState } from "recoil"
import { pmoAuthAtom } from "@/auth/state/atoms"
import { signInRole } from "@/components/AdminSignin/state"

export const useEditProfile = (user: UserDetailsType) => {
  const queryClient = useQueryClient()
  const setAuth = useSetRecoilState(pmoAuthAtom)
  const setRole = useSetRecoilState(signInRole)
  const { mutate, data, isLoading, error, } = useApiMutation(UPLOAD_IMAGE, uploadFileApi(user), {
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [USER_DETAILS]})
    }
  })
  
  // useEffect(() => {
  //   if (error?.request.status == 401)
  //     setAuth(val => ({ ...val, token: '' }))
  //     setRole(null)
  // }, [error])
  return {mutate}
}