import { atom } from "recoil";
import { MonitoringProjectDataType } from "../model";

export const monitoringProjectFormDataAtom = atom<MonitoringProjectDataType>({
  key: 'monitoringProjectFormDataAtom',
  default: {
    description: '',
    location: '',
    contract_sum: 0,
    duration_of_project: '',
    project_start_date: new Date(),
    project_end_date: new Date(),
    amount_paid_during_year: 0,
    amount_paid_to_date: 0,
    outstanding_balance: 0,
    percentage_completion: 0,
    remarks: '',
  },
})

export const monitoringProjectTableData = atom<MonitoringProjectDataType[]>({
  key: 'monitoringProjectTableData',
  default: []
})