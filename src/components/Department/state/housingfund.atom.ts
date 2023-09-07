import { atom } from "recoil";
import { Months, HousingFundDataType } from "../model";


export const housingFundDataAtom = atom<HousingFundDataType>({
  key: 'housingFundDataAtom',
  default: {
    month: Months.Jan,
    no_of_emp: null,
    nhf_deducted: null,
    nhf_paid: null,
    month_paid: Months.Jan,
    status_of_filling_returns: '',
  },
})

export const housingFundTableData = atom<HousingFundDataType[]>({
  key: 'housingFundTableData',
  default: []
})