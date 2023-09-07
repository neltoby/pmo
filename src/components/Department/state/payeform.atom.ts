import { atom } from "recoil";
import { PayeDataType, Months } from "../model";

export const payeFormDataAtom = atom<PayeDataType>({
  key: 'payeFormDataAtom',
  default: {
    month: Months.Jan,
    no_of_emp: null,
    paye_deducted: null,
    paye_paid: null,
    month_paid: Months.Jan,
    status_of_filling_returns: ''
  },
})

export const payeFormTableData = atom<PayeDataType[]>({
  key: 'payeFormTableData',
  default: []
})