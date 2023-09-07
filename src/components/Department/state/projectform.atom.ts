import { atom } from "recoil";
import { ProjectCapitalExpenditureDataType, ProjectStatus } from "../model";

export const projectFormDataAtom = atom<ProjectCapitalExpenditureDataType>({
  key: 'projectFormDataAtom',
  default: {
    pv_no: '',
    description: '',
    value_of_project: 0,
    location: '',
    percentage_of_completion: 0,
    payment_till_date: 0,
    targeted_timeline: new Date(),
    status_of_completion: ProjectStatus.Started,
    pre_payment_certificate: null,
  },
})

export const projectFormTableData = atom<ProjectCapitalExpenditureDataType[]>({
  key: 'projectFormTableData',
  default: []
})