import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DeptTableEnum, Months, PensionDataType } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { pensionFormDataAtom, pensionFormTableData } from "../state/pensionform.atom";
import { deptTableAtom } from "../state";

export const usePensionHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useRecoilState<PensionDataType>(pensionFormDataAtom)
  const resetInput = useResetRecoilState(pensionFormDataAtom);
  const setTableRow = useSetRecoilState(pensionFormTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreatePension = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.Pension)
  }

  const handleMonths = (value: Months) => {
    setValue(val => ({...val, month: value }))
  };
  const handleNoOfEmp = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, no_of_emp: +e.target.value || null})) 
  };
  const handleEmployersCont = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, employers_contribution: +e.target.value || null})) 
  };
  const handleEmployeesCont = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, employees_contribution: +e.target.value || null})) 
  };
  const handleTotalCont = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, total_contribution: +e.target.value || null})) 
  };
  const handleContPensionPaid = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, contributory_pension_paid: +e.target.value || null})) 
  };
  const handleMonthPaid = (value: Months) => {
    setValue(val => ({...val, month_paid: value }))
  };
  const handleStatusOfReturns = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(val => ({...val, status_of_filling_returns: e.currentTarget.value})) 
  };
  
  return {
    opened, open, close,
    handleMonths,
    handleNoOfEmp,
    handleEmployersCont,
    handleEmployeesCont,
    handleTotalCont,
    handleContPensionPaid,
    handleMonthPaid,
    handleStatusOfReturns,
    handleCreatePension
  }
}