import { atom } from "recoil";
import { PayrollDataType, Months } from "../model";

export const payrollFormDataAtom = atom<PayrollDataType>({
  key: 'payrollFormDataAtom',
  default: {
    month: Months.Jan,
    no_of_emp_a: null,
    gross_earnings: null,
    employees_contribution: null,
    total_c: null,
    total_deductions: null,
    net_pay: null,
    no_of_emp_b: null,
    gross_earnings_d: null,
    deductions: null,
    net_pay_t: null,
    total_no_of_staff: null,
    grand_total: null,
  },
})

export const payrollFormTableData = atom<PayrollDataType[]>({
  key: 'payrollFormTableData',
  default: []
})