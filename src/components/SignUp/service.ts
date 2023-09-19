import { ApiRequest } from "@/model/api";
import { UserSignUpDataType } from "./model";
import { createUserUrl } from "./router";

export const createUserApi = (body: UserSignUpDataType): ApiRequest => {
  const url = createUserUrl()
  return {
    url,
    method: 'post',
    body,
  }
}