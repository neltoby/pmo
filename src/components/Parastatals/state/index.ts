import { atom } from "recoil";
import { ParastatalsThemesListType } from "../model";

export const parastatalsListAtom = atom<ParastatalsThemesListType[]>({
  key: 'parastatalsListAtom',
  default: []
})