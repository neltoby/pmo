import { useRecoilValue, useResetRecoilState } from "recoil"
import { StagesEnum, UserSignUpDataType } from "../model"
import { userSignUpDataAtom } from "../state"
import useApiMutation from "@/hooks/useApiMutation"
import { createUserApi } from "../service"
import { CREATE_NEW_USER } from "../constant"
import { useDisclosure } from "@mantine/hooks"
import { useState, useEffect } from "react"

export const useCreateUser = () => {
  const userDetails = useRecoilValue<UserSignUpDataType>(userSignUpDataAtom)
  const resetUser = useResetRecoilState(userSignUpDataAtom)
  const [visible, { toggle }] = useDisclosure(false);
  const [isErrorNotif, setIsErrorNotif] = useState(false)
  const [isvisible, setVisible] = useState<boolean>(false)
  const [stages, setStages] = useState<StagesEnum>(StagesEnum.One)
  const { mutate, isSuccess, data, isLoading, isError, error, status } = useApiMutation(CREATE_NEW_USER, createUserApi(userDetails))

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
    mutate,
    toggle,
    setIsErrorNotif,
    setVisible,
    setStages,
    stages, 
    data,
    error,
    status,
    visible,
    isErrorNotif,
    isvisible, 
    isSuccess
  }
}