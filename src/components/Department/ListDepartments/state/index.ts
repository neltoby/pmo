import { atom } from "recoil";
import { DepartmentListReturnDataType } from "../model";

export const departmentListAtom = atom<DepartmentListReturnDataType | null>({
  key: 'departmentListAtom',
  default: null
})