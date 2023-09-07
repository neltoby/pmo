import { atom } from "recoil";
import { DeptTableEnum } from "../model";

export const deptTableAtom = atom<DeptTableEnum>({
  key: 'deptTableAtom',
  default: DeptTableEnum.Nothing
})