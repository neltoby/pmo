import { useEffect } from "react";
import useApiMutation from "@/hooks/useApiMutation";
import { CREATE_POST, GET_ADMIN_POST } from "../constant";
import { createPostApi } from "../service";
import { useRecoilState, useResetRecoilState } from "recoil";
import { noticeBoardForm } from "../state";
import { useQueryClient } from "react-query";
import { useDisclosure } from "@mantine/hooks";

export const useCreateNotice = () => {
  const queryClient = useQueryClient()
  const [visible, { toggle }] = useDisclosure(false);
  const resetForm = useResetRecoilState(noticeBoardForm)
  const [values, setValues] = useRecoilState(noticeBoardForm)
  const { mutate, data, isLoading, isError, isSuccess } = useApiMutation(CREATE_POST, createPostApi(values), {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_ADMIN_POST)
    }
  })

  useEffect(() => {
    if (isSuccess) { 
      toggle()
      resetForm()
    } 
  }, [isSuccess])


  
  return { mutate, visible, toggle }
}