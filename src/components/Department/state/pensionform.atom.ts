import { atom } from "recoil";
import { Months, PensionDataType } from "../model";

export const pensionFormDataAtom = atom<PensionDataType>({
  key: 'pensionFormDataAtom',
  default: {
    month: Months.Jan,
    no_of_emp: 0,
    employers_contribution: 0,
    employees_contribution: 0,
    total_contribution: 0,
    contributory_pension_paid: 0,
    month_paid: Months.Jan,
    status_of_filling_returns: '',
  },
})

export const pensionFormTableData = atom<PensionDataType[]>({
  key: 'pensionFormTableData',
  default: []
})