import { atom } from "recoil";
import { ParastatalList, UserSignUpDataType } from "./model";

export const userSignUpDataAtom = atom<UserSignUpDataType>({
  key: 'userSignUpDataAtom',
  default: {
    firstname: '',
    middlename: '',
    lastname: '',
    parastatal: '',
    email: '',
    password: '',
    isHod: false
  }
})

export const parastatalListField = atom<ParastatalList[]>({
  key: 'parastatalListField',
  default: []
})