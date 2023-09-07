import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DeptTableEnum, Months, PayeDataType } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { payeFormDataAtom, payeFormTableData } from "../state/payeform.atom";
import { deptTableAtom } from "../state";

export const usePayeHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useRecoilState<PayeDataType>(payeFormDataAtom)
  const resetInput = useResetRecoilState(payeFormDataAtom);
  const setTableRow = useSetRecoilState(payeFormTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreatePaye = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.Paye)
  }

  const handleMonths = (value: Months) => {
    setValue(val => ({...val, month: value}))
  };
  const handleNoOfEmp = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(val => ({...val, no_of_emp: +e.target.value || null })) 
  };
  const handlePayeDeducted = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, paye_deducted: +e.target.value || null}))
  };
  const handlePayePaid = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, paye_paid: +e.target.value || null}))
  };
  const handleMonthPaid = (value: Months) => {
    setValue(val => ({...val, month_paid: value}))
  };
  const handleStatusOfReturns = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(val => ({...val, status_of_filling_returns: e.currentTarget.value}))
  };
  
  return {
    opened, open, close,
    handleMonths,
    handleNoOfEmp,
    handlePayeDeducted,
    handlePayePaid,
    handleMonthPaid,
    handleStatusOfReturns,
    handleCreatePaye
  }
}