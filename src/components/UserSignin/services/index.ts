import { ApiRequest } from "@/model/api"
import { SigninType } from "../model"
import { useSignInAdminUrl } from "../router"

export const useSignInAdminApi = (data: SigninType): ApiRequest => {
  const url = useSignInAdminUrl()
  return {
    url,
    method: 'post',
    body: data
  }
}