import useApiQuery from "@/hooks/useApiQuery";
import { PARASTATAL_LIST } from "../constants";
import { getParastatalsListApi } from "../service";
import { useSetRecoilState } from "recoil";
import { parastatalsListAtom } from "../state";
import { useEffect } from "react";
import { ParastatalsThemesListType } from "../model";

export const useGetParastatalsList = () => {
  const setParastatalsList = useSetRecoilState<ParastatalsThemesListType[]>(parastatalsListAtom)
  const { data, isLoading, error, refetch } = useApiQuery<ParastatalsThemesListType[]>(PARASTATAL_LIST, getParastatalsListApi(), false)
  console.log(data, isLoading, error, 'line 12')
  
  useEffect(() => {
    if (data?.length) {
      setParastatalsList(data)
    }
  },[data])

  return {data, isLoading, error, refetch }
  
}