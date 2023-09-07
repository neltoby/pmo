import React from 'react'
import { useRecoilValue } from 'recoil'
import { MonitoringProjectDataType } from '../model'
import { monitoringProjectTableData } from '../state/monitoringprojectform.atom'
import TablesForm from './TablesForm'
import MonitoringProjectFormModal from '../FormsModal/MonitoringProjectFormModal'

const MonitoringForm = () => {
  const data = useRecoilValue<MonitoringProjectDataType[]>(monitoringProjectTableData)
  return (
    <TablesForm label='Monitoring Form Table' data={data} render={({ opened, close }) => (<MonitoringProjectFormModal opened={opened} close={close} />)} />
  )
}

export default MonitoringForm