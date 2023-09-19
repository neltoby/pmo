import { ApiRequest } from "@/model/api";
import { logoutUserUrl } from "./router";

export const logoutUserApi = (token: string): ApiRequest => {
  const url = logoutUserUrl(token)
  return {
    url,
    method: 'delete',
  }
}