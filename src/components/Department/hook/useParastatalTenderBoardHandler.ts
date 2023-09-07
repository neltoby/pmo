import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DeptTableEnum, Months, ParastatalTenderBoardDataType } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { ptbFormDataAtom, ptbFormTableData } from "../state/ptbform.atom";
import { deptTableAtom } from "../state";

export const useParastatalTenderBoardHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValues] = useRecoilState<ParastatalTenderBoardDataType>(ptbFormDataAtom)
  const resetInput = useResetRecoilState(ptbFormDataAtom);
  const setTableRow = useSetRecoilState(ptbFormTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreatePTB= () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.PTB)
  }

  const handleMonth = (value: Months) => {
    setValues(val => ({...val, month: value}))
  };
  const handleTotalValueOfProcurementApproved = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, total_value_of_procuremnet_approved: +e.target.value || null }));
  };
  const handleDescriptionOfProcurement = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues(val => ({...val, description_of_procurement: e.currentTarget.value}))
  };
  const handleDateOfPtb = (value: Date) => {
    setValues(val => ({ ...val, date_of_ptb: value }))
  };
  
  return {
    opened, open, close,
    handleMonth,
    handleTotalValueOfProcurementApproved,
    handleDescriptionOfProcurement,
    handleDateOfPtb,
    handleCreatePTB
  }
}