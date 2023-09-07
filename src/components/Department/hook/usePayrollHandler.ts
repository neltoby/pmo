import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { AcctStatus, DeptTableEnum, Months, PayrollDataType } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { payrollFormDataAtom, payrollFormTableData } from "../state/payrollform.atom";
import { deptTableAtom } from "../state";

export const usePayrollHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const[value, setValue] = useRecoilState<PayrollDataType>(payrollFormDataAtom)
  const resetInput = useResetRecoilState(payrollFormDataAtom);
  const setTableRow = useSetRecoilState(payrollFormTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleNoOfEmp = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, no_of_emp_a: +e.target.value || null}));
  }
  const handleNoOfEmp_b = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, no_of_emp_b: +e.target.value || null}));
  }

  const handleCreatePayroll = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.Payroll)
  }

  const handleSearchMonth = (value: Months) => { 
    setValue(val => ({...val, month: value}));
  }
  const handleGrossEarnings = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, gross_earnings: +e.target.value || null}));
  }
  const handleSetEmpCont = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, employees_contribution: +e.target.value || null}));
  }
  const handleSetTotal_c = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, total_c: +e.target.value || null}));
  }
  const handleTotalDeductions = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, total_deductions: +e.target.value || null}));
  }
  const handleNetPay = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, net_pay: +e.target.value || null}));
  }
  const handleGrossEarnings_d = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, gross_earnings_d: +e.target.value || null}));
  }
  const handleDeductions = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, deductions: +e.target.value || null}));
  }
  const handleNetPay_t = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, net_pay_t: +e.target.value || null}));
  }
  const handleTotalNoOfStaff = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, total_no_of_staff: +e.target.value || null}));
  }
  const handleGrandTotal = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, grand_total: +e.target.value || null}));
  }
  return {
    opened, open, close, handleNoOfEmp, handleSearchMonth, handleGrossEarnings, handleSetEmpCont, handleSetTotal_c, handleTotalDeductions, handleNetPay, handleGrandTotal, handleGrossEarnings_d, handleDeductions, handleNetPay_t, handleTotalNoOfStaff, handleCreatePayroll, handleNoOfEmp_b
  }
}