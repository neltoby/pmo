import { atom } from "recoil";
import { Months, ParastatalTenderBoardDataType } from "../model";

export const ptbFormDataAtom = atom<ParastatalTenderBoardDataType>({
  key: 'ptbFormDataAtom',
  default: {
    month: Months.Jan,
    total_value_of_procuremnet_approved: null,
    description_of_procurement: '',
    date_of_ptb: new Date()
  },
})

export const ptbFormTableData = atom<ParastatalTenderBoardDataType[]>({
  key: 'ptbFormTableData',
  default: []
})