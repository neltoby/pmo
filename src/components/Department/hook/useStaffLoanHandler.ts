import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { DeptTableEnum, StaffLoanDataType } from "../model";
import { staffLoanFormDataAtom, staffLoanFormTableData } from "../state/staffloanform.atom";
import { deptTableAtom } from "../state";

export const useStaffLoanHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useRecoilState<StaffLoanDataType>(staffLoanFormDataAtom)
  const resetInput = useResetRecoilState(staffLoanFormDataAtom);
  const setTableRow = useSetRecoilState(staffLoanFormTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreateStaffLoan = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.StaffLoan)
  }

  const handleNameOfBeneficiary = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, name_of_beneficiary: e.target.value}))
  };
  const handleValueOfLoan = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, value_of_loan: +e.target.value || null}))
  };
  const handleDateIssued = (value: Date) => {
    setValue(val => ({ ...val, date_issued: value }))
  };
  const handlePeriodOfLoan = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, period_of_loan: e.target.value}))
  };
  const handleInterestRate = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, interest_rate: +e.target.value || null}))
  };
  const handleInterestAmt = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, interest_amount: +e.target.value || null}))
  };
  const handleRepaymentDate = (value: Date) => {
    setValue(val => ({ ...val, repayment_date: value }))
  };
  const handleAmountPaid = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, amount_paid: +e.target.value || null}))
  };
  const handleBalanceDue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, balance_due: +e.target.value || null}))
  };
  
  return {
    opened, open, close,
    handleNameOfBeneficiary,
    handleValueOfLoan,
    handleDateIssued,
    handlePeriodOfLoan,
    handleInterestRate,
    handleInterestAmt,
    handleRepaymentDate,
    handleAmountPaid,
    handleBalanceDue,
    handleCreateStaffLoan
  }
}