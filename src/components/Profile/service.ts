import { ApiRequest } from "@/model/api";
import { uploadFileUrl } from "./router";
import { UserDetailsType } from "./model";

export const uploadFileApi = (body: UserDetailsType): ApiRequest => { 
  const url = uploadFileUrl()
  return {
    url,
    method: 'patch',
    body,
  }
}