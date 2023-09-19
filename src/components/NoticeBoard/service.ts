import { ApiRequest } from "@/model/api"
import { createPostUrl, getAdminPostUrl, getPostUrl } from "./router"
import { NoticeDataType } from "./model"

export const getPostApi = (): ApiRequest => {
  const url = getPostUrl()
  return {
    method: 'get',
    url
  }
}

export const getAdminPostApi = (): ApiRequest => {
  const url = getAdminPostUrl()
  return {
    method: 'get',
    url
  }
}

export const createPostApi = (body: NoticeDataType): ApiRequest => { 
  const url = createPostUrl()
  return {
    method: 'post',
    url,
    body,
  }
}