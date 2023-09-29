import { ApiRequest } from "@/model/api"
import { createProjectUrl, getDefaultDepartmentListUrl } from "../router"
import { FormInputsType } from "../model"

export const createProjectApi = (data: FormInputsType): ApiRequest => {
  const url = createProjectUrl()
  return {
    url,
    method: 'post',
    body: data
  }
}

export const getDefaultDepartmentListApi = (): ApiRequest => {
  const url = getDefaultDepartmentListUrl()
  return {
    url,
    method: 'get',
  }
}