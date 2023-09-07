import { ApiRequest } from "@/model/api"
import { createProjectUrl } from "../router"
import { CreateProjectType } from "../model"

export const createProjectApi = (data: CreateProjectType): ApiRequest => {
  const url = createProjectUrl()
  return {
    url,
    method: 'post',
    body: data
  }
}