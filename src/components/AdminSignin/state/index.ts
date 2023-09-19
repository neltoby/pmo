import { atom } from "recoil";
import { Role } from "../model";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const signInRole = atom<Role | null>({
  key: "signInAdminRole",
  default: null,
  effects_UNSTABLE: [persistAtom]
})