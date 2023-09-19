import { useEffect } from "react";
import useApiQuery from "@/hooks/useApiQuery";
import { GET_ADMIN_POST } from "../constant";
import { getAdminPostApi } from "../service";
import { NoticeBoardPostType } from "../model";

export const useGetAdminPosts = () => {
  const { data = [], refetch, isLoading, isError } = useApiQuery<NoticeBoardPostType>(GET_ADMIN_POST, getAdminPostApi(), false)

  return {
    refetch,
    data,
    isLoading,
    isError,
  }
  
}