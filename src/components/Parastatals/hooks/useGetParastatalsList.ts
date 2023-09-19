import useApiQuery from "@/hooks/useApiQuery";
import { PARASTATAL_LIST } from "../constants";
import { getParastatalsListApi } from "../service";
import { useSetRecoilState } from "recoil";
import { parastatalsListAtom } from "../state";
import { useEffect } from "react";
import { ParastatalsThemesListType } from "../model";

export const useGetParastatalsList = (themes = true) => {
  const setParastatalsList = useSetRecoilState<ParastatalsThemesListType[]>(parastatalsListAtom)
  const { data = [], isLoading, error, refetch } = useApiQuery<ParastatalsThemesListType[]>(PARASTATAL_LIST, getParastatalsListApi(themes), false)
  
  useEffect(() => {
    if (data?.length) {
      setParastatalsList(data)
    }
  },[data])

  return {data, isLoading, error, refetch }
  
}