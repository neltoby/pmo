import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { AcctStatus, DeptTableEnum, FormInputsType } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { bankFormDataAtom, bankFormTableData } from "../state/bankform.atom";
import { deptTableAtom } from "../state";

export const useHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [inputs, setInput] = useRecoilState<FormInputsType>(bankFormDataAtom)
  const resetInput = useResetRecoilState(bankFormDataAtom);
  const setTableRow = useSetRecoilState(bankFormTableData)
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreateReport = () => {
    setTableRow(val => [...val, inputs])
    setDeptTable(DeptTableEnum.BankForm)
    resetInput()
    close()
  }

  const handleNameOfBank = (e: ChangeEvent<HTMLInputElement>) => { 
    setInput(val => ({ ...val,  name_of_bank: e.target.value }))
  }
  const handleAcctNo = (e: ChangeEvent<HTMLInputElement>) => { 
    setInput(val => ({ ...val, account_no: e.target.value }))
  }
  const handlePurposeOfAcct = (e: ChangeEvent<HTMLInputElement>) => { 
    setInput(val => ({ ...val, purpose_of_acct: e.target.value }))
  }
  const handleBalForDay = (e: ChangeEvent<HTMLInputElement>) => { 
     setInput(val => ({ ...val, balance_for_the_day: +e.target.value }))
  }
  const handleCashBookBal = (e: ChangeEvent<HTMLInputElement>) => { 
    setInput(val => ({ ...val, cashbook_balance: +e.target.value }))
  }
  const handleStatusOfAcct = (value: AcctStatus) => { 
    setInput(val => ({ ...val, status_of_bank_account: value }))
  }
  return {
    opened, open, close,
    handleCreateReport, handleNameOfBank, handleAcctNo, handlePurposeOfAcct, handleBalForDay, handleCashBookBal, handleStatusOfAcct
  }
}