import { ApiRequest } from "@/model/api"
import { AdminSigninType } from "../model"
import { useSignInAdminUrl } from "../router"

export const useSignInAdminApi = (data: AdminSigninType): ApiRequest => {
  const url = useSignInAdminUrl()
  return {
    url,
    method: 'post',
    body: data
  }
}