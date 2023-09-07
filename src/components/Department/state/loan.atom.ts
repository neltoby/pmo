import { atom } from "recoil";
import { LoanDataType } from "../model";

export const loanFormDataAtom = atom<LoanDataType>({
  key: 'loanFormDataAtom',
  default: {
    description: '',
    value_owed: null,
    period_outstanding: ''
  },
})

export const loanFormTableData = atom<LoanDataType[]>({
  key: 'loanFormTableData',
  default: []
})