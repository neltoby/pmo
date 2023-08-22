import useApiMutation from "@/hooks/useApiMutation"
import { UPDATE_STATUS } from "../constants"
import { UpdateStatusType, VerifyadminType } from "../model"
import { updateStatusApi } from "../services"
import { useSetRecoilState } from "recoil"
import { VerificationCheckType } from "@/components/Verification/model"
import { verificationCheck } from "@/components/Verification/state/atoms"
import { updateAdminStatus } from "../state"
import { useEffect } from "react"
import { useDisclosure } from "@mantine/hooks"

export const useUpdateStatus = (val: UpdateStatusType) => {
  const setTokenVerify = useSetRecoilState<VerificationCheckType>(verificationCheck)
  const [opened, { open, close }] = useDisclosure(false);
  const setUpdateAdminStatus = useSetRecoilState<VerifyadminType>(updateAdminStatus)
  const { mutate, isSuccess } = useApiMutation(UPDATE_STATUS, updateStatusApi(val))

  useEffect(() => {
    if (isSuccess) {
      setUpdateAdminStatus({ verified: true })
      setTokenVerify({  username: null, sub: null})
      open()
    }
  }, [isSuccess, setUpdateAdminStatus])

  return { mutate, isSuccess, opened, open, close }
  
}