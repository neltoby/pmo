import { ApiRequest } from "@/model/api"
import { UpdateStatusType } from "../model"
import { updateStatusUrl } from "../router"

export const updateStatusApi = (data: UpdateStatusType): ApiRequest => {
  const url = updateStatusUrl()
  return {
    url,
    method: 'post',
    body: data
  }
}