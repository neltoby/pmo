import { ApiRequest } from "@/model/api"
import { getParastatalsListUrl } from "../router"

export const getParastatalsListApi = (): ApiRequest => {
  const url = getParastatalsListUrl()
  return {
    url,
    method: 'get',
  }
}