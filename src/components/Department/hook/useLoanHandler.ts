import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { DeptTableEnum, LoanDataType } from "../model";
import { loanFormDataAtom, loanFormTableData } from "../state/loan.atom";
import { deptTableAtom } from "../state";

export const useLoanHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValues] = useRecoilState<LoanDataType>(loanFormDataAtom)
  const resetInput = useResetRecoilState(loanFormDataAtom);
  const setTableRow = useSetRecoilState(loanFormTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreateLoan = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.Loan) 
  }

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues(val => ({ ...val, description: e.currentTarget.value}))
  };
  const handleValueOwed = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, value_owed: +e.target.value || null}))
  };
  const handlePeriodOutStanding = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, period_outstanding: e.target.value}))
  };
  
  return {
    opened, open, close,
    handleDescription,
    handleValueOwed,
    handlePeriodOutStanding,
    handleCreateLoan
  }
}