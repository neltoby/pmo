import { atom } from "recoil";
import { UserTypeRole } from "../model";


export const userSignInRole = atom<UserTypeRole>({
  key: "userSignInRole",
  default: {
    role: null,
  }
})