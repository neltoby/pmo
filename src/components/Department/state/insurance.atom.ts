import { atom } from "recoil";
import { InsuranceDataType } from "../model";

export const insuranceFormDataAtom = atom<InsuranceDataType>({
  key: 'insuranceFormDataAtom',
  default: {
  type_of_assets: '',
  net_book_value_of_assets_date: new Date(),
  net_book_value_of_assets: null,
  value_insured: '',
  type_of_insurance: '',
  insurance_company: '',
  premium_paid: null,
  period_covered: '',
  amount_paid: null,
  },
})

export const insuranceTableData = atom<InsuranceDataType[]>({
  key: 'insuranceTableData',
  default: [],
})