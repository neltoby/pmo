import { ApiRequest } from "@/model/api"
import { getParastatalsListUrl } from "../router"

export const getParastatalsListApi = (theme?: boolean): ApiRequest => {
  const url = getParastatalsListUrl(theme)
  return {
    url,
    method: 'get',
  }
}