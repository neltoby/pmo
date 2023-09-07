import { ApiRequest } from "@/model/api";
import { addDepartmentUrl, getDepartmentListUrl } from "../router";
import { AdddDepartmentType } from "../model";

export const getDepartmentListApi = (parastatalId: string): ApiRequest => {
  const url = getDepartmentListUrl(parastatalId);
  return {
    url,
    method: 'get'
  }
}

export const addDepartmentApi = (body: AdddDepartmentType): ApiRequest => {
  const url = addDepartmentUrl()
  return {
    url,
    method: 'post',
    body
  }
}