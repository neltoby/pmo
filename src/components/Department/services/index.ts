import { ApiRequest } from "@/model/api"
import { createProjectUrl } from "../router"
import { CreateProjectType, FormInputsType } from "../model"

export const createProjectApi = (data: FormInputsType): ApiRequest => {
  const url = createProjectUrl()
  return {
    url,
    method: 'post',
    body: data
  }
}