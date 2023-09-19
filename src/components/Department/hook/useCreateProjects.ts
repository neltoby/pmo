import { useEffect } from "react";
import useApiMutation from "@/hooks/useApiMutation";
import { CREATE_PROJECTS } from "../constants";
import { useDisclosure } from "@mantine/hooks";
import { createProjectApi } from "../services";
import { useHandler } from "./useHandler";
import { useRecoilValue } from "recoil";
import { bankFormDataAtom } from "../state/bankform.atom";

export const useCreateProjects = (val: string) => {
  const [opened, { open, close }] = useDisclosure(false);
  const createObj = useRecoilValue(bankFormDataAtom)
  // const {bank, acct, purpOfAcct, acctStatus, balForDay, cashBookBal} = useHandler()
  // const createObj = {
  //   status_of_bank_account: acctStatus,
  //   cashbook_balance: cashBookBal,
  //   balance_for_the_day: balForDay,
  //   purpose_of_acct: purpOfAcct,
  //   account_no: acct,
  //   name_of_bank: bank,
  //   department: val
  // }
  const { mutate, isSuccess } = useApiMutation(CREATE_PROJECTS, createProjectApi(createObj))

  useEffect(() => {
    if (isSuccess) {
      close()
    }
  }, [isSuccess])

  return { mutate, isSuccess, opened, open, close }
  
}