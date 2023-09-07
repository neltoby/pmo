import React from 'react'
import { useMonitoringProjectHandler } from '../hook/useMonitoringProjectHandler'
import MonitoringProjectFormModal from '../FormsModal/MonitoringProjectFormModal'
import PaperChild from '../Paper'

const MonitoringProject = () => {
  const { opened, open, close} = useMonitoringProjectHandler()
  return (
    <PaperChild 
      title='Monitoring Projects'
      buttonLabel='Create project'
      onClick={open}
    >
      <MonitoringProjectFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default MonitoringProject