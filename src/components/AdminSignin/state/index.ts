import { atom } from "recoil";
import { UserTypeRole } from "../model";


export const signInRole = atom<UserTypeRole>({
  key: "signInAdminRole",
  default: {
    role: null,
  }
})