import React from 'react'
import ProjectCapitalExpenditureFormModal from '../FormsModal/ProjectCapitalExpenditureFormModal'
import { ProjectCapitalExpenditureDataType } from '../model'
import { projectFormTableData } from '../state/projectform.atom'
import { useRecoilValue } from 'recoil'
import TablesForm from './TablesForm'

const ProjectCapitalExpenditure = () => {
  const data = useRecoilValue<ProjectCapitalExpenditureDataType[]>(projectFormTableData)
  return (
    <TablesForm label='Project/Capital Expenditure Form Table' data={data} render={({ opened, close }) => (<ProjectCapitalExpenditureFormModal opened={opened} close={close} />)} />
  )
}

export default ProjectCapitalExpenditure