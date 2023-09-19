import { ApiRequest } from "@/model/api";
import { UserSignInType } from "./model";
import { loginUserUrl } from "./router";

export const loginUserApi = (body: UserSignInType): ApiRequest => {
  const url = loginUserUrl();
  return {
    url,
    method: 'post',
    body
  }
}