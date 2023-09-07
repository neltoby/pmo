import { ChangeEvent } from "react";
import { useDisclosure } from "@mantine/hooks";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { DeptTableEnum, MonitoringProjectDataType } from "../model";
import { monitoringProjectFormDataAtom, monitoringProjectTableData } from "../state/monitoringprojectform.atom";
import { deptTableAtom } from "../state";

export const useMonitoringProjectHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const[value, setValues] = useRecoilState<MonitoringProjectDataType>(monitoringProjectFormDataAtom)
  const resetInput = useResetRecoilState(monitoringProjectFormDataAtom);
  const setTableRow = useSetRecoilState(monitoringProjectTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreateMonitoringProject = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.MonitoringProject)
  }

  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues(val => ({ ...val, description: e.currentTarget.value}))
  };
  const handleLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, location: e.target.value}))
  };
  const handleContractSum = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, contract_sum: +e.target.value || null}))
  };
  const handleDurartionOfProject = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, duration_of_project: e.target.value}))
  };
  const handleProjectStartDate = (value: Date) => {
    setValues(val => ({ ...val, project_start_date: value}))
  };
  const handleProjectEndDate = (value: Date) => {
    setValues(val => ({ ...val, project_end_date: value}))
  };
  const handleAmountPaidDuringYear = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, amount_paid_during_year: +e.target.value || null}))
  };
  const handleAmountPaidToDate = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, amount_paid_to_date: +e.target.value || null}))
  };
  const handleOutstandingBalance= (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, outstanding_balance: +e.target.value || null}))
  };
  const handlePercentageCompletion = (e: ChangeEvent<HTMLInputElement>) => {
    setValues(val => ({ ...val, percentage_completion: +e.target.value || null}))
  };
  const handleRemarks = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValues(val => ({ ...val, remarks: e.currentTarget.value}))
  };
  
  return {
    opened, open, close,
    handleDescription,
    handleLocation,
    handleContractSum,
    handleDurartionOfProject,
    handleProjectStartDate,
    handleProjectEndDate,
    handleAmountPaidDuringYear,
    handleAmountPaidToDate,
    handleOutstandingBalance,
    handlePercentageCompletion,
    handleRemarks,
    handleCreateMonitoringProject
  }
}