import { ChangeEvent, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { DeptTableEnum, ProjectCapitalExpenditureDataType, ProjectStatus } from "../model";
import { useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { projectFormDataAtom, projectFormTableData } from "../state/projectform.atom";
import { deptTableAtom } from "../state";

export const useProjectCapitalExpenditureHandler = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useRecoilState<ProjectCapitalExpenditureDataType>(projectFormDataAtom)
  const resetInput = useResetRecoilState(projectFormDataAtom);
  const setTableRow = useSetRecoilState(projectFormTableData);
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)

  const handleCreateProjectCapitalExpenditure = () => {
    setTableRow(val => [...val, value])
    resetInput()
    close()
    setDeptTable(DeptTableEnum.Project)
  }

  const handlePoNo = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, pv_no: e.target.value}))
  };
  const handleDescription = (e: ChangeEvent<HTMLTextAreaElement>) => { 
    setValue(val => ({...val, description: e.currentTarget.value}))
  };
  const handleValueOfProject = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, value_of_project: +e.target.value || null}))
  };
  const handleLocation = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, location: e.target.value}))
  };
  const handlePercentageOfCompletion = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, percentage_of_completion: +e.target.value || null}))
  };
  const handlePaymentTillDate = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(val => ({...val, payment_till_date: +e.target.value || null}))
  };
  const handleTargetedTimeline = (value: Date) => {
    setValue(val => ({...val, targeted_timeline: value}))
  };
  const handleStatusOfCompletion = (value: ProjectStatus) => {
    setValue(val => ({...val, status_of_completion: value}))
  };
  const handlePrePaymentCertificate = (value: File) => {
    setValue(val => ({...val, pre_payment_certificate: value}))
  };
  
  return {
    opened, open, close,
    handlePoNo,
    handleDescription,
    handleValueOfProject,
    handleLocation,
    handlePercentageOfCompletion,
    handlePaymentTillDate,
    handleTargetedTimeline,
    handleStatusOfCompletion,
    handlePrePaymentCertificate,
    handleCreateProjectCapitalExpenditure
  }
}