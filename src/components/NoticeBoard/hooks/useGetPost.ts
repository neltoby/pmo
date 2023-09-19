import useApiQuery from "@/hooks/useApiQuery"
import { GETPOST } from "../constant"
import { getPostApi } from "../service"
import { NoticeBoardPostType } from "../model"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { postFromBoard } from "../state"
import { useEffect } from "react"
import { signInRole } from "@/components/AdminSignin/state"

export const useGetPost = () => {
  // const role = useRecoilValue(signInRole)
  // const setPost = useSetRecoilState<NoticeBoardPostType[]>(postFromBoard)
  const { data=[], refetch, error, isLoading } = useApiQuery<NoticeBoardPostType[]>(GETPOST, getPostApi(), false)

  // useEffect(() => {
  //   if(data)
  //     setPost(data)
  // }, [data])
  return { data, refetch, error, isLoading }
}