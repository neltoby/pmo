import { atom } from "recoil";
import { UserTypeRole } from "../model";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const signInRole = atom<UserTypeRole>({
  key: "signInAdminRole",
  default: {
    role: null,
  },
  effects_UNSTABLE: [persistAtom]
})