import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const defaultParastatals = atom<string>({
  key: 'defaultParastatals',
  default: '',
  effects_UNSTABLE: [persistAtom]
})