import { atom } from "recoil";
import { AcctStatus, FormInputsType } from "../model";

export const bankFormDataAtom = atom<FormInputsType>({
  key: 'bankFormDataAtom',
  default: {
    name_of_bank: '',
    account_no: '',
    purpose_of_acct: '',
    balance_for_the_day: null,
    cashbook_balance: null,
    status_of_bank_account: AcctStatus.Active,
  },
})

export const bankFormTableData = atom<FormInputsType[]>({
  key: 'bankFormTableData',
  default: []
})