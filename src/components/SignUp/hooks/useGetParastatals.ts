import { useSetRecoilState } from "recoil"
import { ParastatalList } from "../model"
import { parastatalListField } from "../state"
import { PARASTATAL_LIST_FIELD } from "../constant"
import { getParastatalsListApi } from "@/components/Parastatals/service"
import useApiQuery from "@/hooks/useApiQuery"
import { useEffect } from "react"

export const useGetParastatalsList = (themes = false) => {
  const setParastatalsList = useSetRecoilState<ParastatalList[]>(parastatalListField)
  const { data = [], isLoading, error, refetch } = useApiQuery<ParastatalList[]>(PARASTATAL_LIST_FIELD, getParastatalsListApi(themes), false)
  
  useEffect(() => {
    if (data?.length) {
      setParastatalsList(data)
    }
  },[data])

  return {data, isLoading, error, refetch }
  
}