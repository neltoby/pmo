import { atom } from "recoil";
import { VerifyadminType } from "../model";


export const updateAdminStatus = atom<VerifyadminType>({
  key: "updateAdminStatus",
  default: {
    verified: false
  }
})