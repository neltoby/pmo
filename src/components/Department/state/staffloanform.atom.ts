import { atom } from "recoil";
import { StaffLoanDataType } from "../model";

export const staffLoanFormDataAtom = atom<StaffLoanDataType>({
  key: 'staffLoanFormDataAtom',
  default: {
    name_of_beneficiary: '',
  value_of_loan: 0,
  date_issued: new Date(),
  period_of_loan: '',
  interest_rate: 0,
  interest_amount: 0,
  repayment_date: new Date(),
  amount_paid: 0,
  balance_due: 0,
  },
})

export const staffLoanFormTableData = atom<StaffLoanDataType[]>({
  key: 'staffLoanFormTableData',
  default: []
})