import { atom } from "recoil";
import { UserDetailsType } from "./model";

export const userDetailsState = atom<UserDetailsType>({
  key: 'userDetailsState',
  default: {
    firstname: '',
    lastname: '',
    middlename: '',
    phoneno: '',
    parastatals: '',
    department: '',
    birthdate: null,
    email: '',
    photourl: ''
  }
})