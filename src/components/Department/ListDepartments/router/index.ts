import { PARASTATAL_BASE_URL } from "@/components/Parastatals/router";

export const getDepartmentListUrl = (parastatalId: string) => `${PARASTATAL_BASE_URL}/${parastatalId}`

export const addDepartmentUrl = () => `${PARASTATAL_BASE_URL}/department`