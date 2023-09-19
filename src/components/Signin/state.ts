import { atom } from "recoil";
import { UserSignInType } from "./model";

export const userSigninDataAtom = atom<UserSignInType>({
  key: 'userSigninDataAtom',
  default: {
    email: '',
    password: ''
  }
})
