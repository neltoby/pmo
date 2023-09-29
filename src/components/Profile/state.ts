import { atom } from "recoil";
import { UserDetailsType } from "./model";

export const userDetailsState = atom<UserDetailsType>({
  key: 'userDetailsState',
  default: {
    firstname: '',
    lastname: '',
    middlename: '',
    phoneno: '',
    parastatal: '',
    department: '',
    birthdate: null,
    email: '',
    profileImage: ''
  }
})

export const userEditDetailsState = atom<UserDetailsType>({
  key: 'userEditDetailsState',
  default: {
    firstname: '',
    lastname: '',
    middlename: '',
    phoneno: '',
    parastatal: '',
    department: '',
    birthdate: null,
    email: '',
    profileImage: ''
  }
})