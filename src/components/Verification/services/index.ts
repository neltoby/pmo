import { ApiRequest } from "@/model/api"
import { getVerifySuperAdminTokenUrl } from "../router"

export const getVerifySuperAdminTokenApi = (token: string): ApiRequest => {
  const url = getVerifySuperAdminTokenUrl(token)
  return {
    url,
    method: 'get',
  }
}