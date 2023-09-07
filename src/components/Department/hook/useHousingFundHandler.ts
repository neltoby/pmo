import { ChangeEvent } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DeptTableEnum, HousingFundDataType, Months } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { housingFundDataAtom, housingFundTableData } from "../state/housingfund.atom";
import { deptTableAtom } from "../state";


export const useHousingFundHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [inputs, setValues] = useRecoilState<HousingFundDataType>(housingFundDataAtom)
  const resetInput = useResetRecoilState(housingFundDataAtom);
  const setTableRow = useSetRecoilState(housingFundTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)
  
  const handleCreateHousingFund = () => {
    setTableRow(val => [...val, inputs])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.Housing) 
  }

  const handleMonths = (value: Months) => {
    setValues(val => ({ ...val, month: value}))
  };
  const handleNoOfEmp = (e: ChangeEvent<HTMLInputElement>) => { 
    setValues(val => ({...val, no_of_emp: +e.target.value || null})) 
  };
  const handleNhfDeducted = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({...val, nhf_deducted: +e.target.value || null})) 
  };
  const handleNhfPaid = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({...val, nhf_paid: +e.target.value || null})) 
  };
  const handleMonthPaid = (value: Months) => {
    setValues(val => ({ ...val, month_paid: value}))
  };
  const handleStatusOfReturns = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues(val => ({...val, status_of_filling_returns: e.currentTarget.value}))
  };
  
  return {
    opened, open, close,
    handleMonths,
    handleNoOfEmp,
    handleNhfDeducted,
    handleNhfPaid,
    handleMonthPaid,
    handleStatusOfReturns,
    handleCreateHousingFund
  }
}