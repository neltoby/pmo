import React, { FC } from 'react'
import ModalWrapper from '../ModalWrapper'
import { FormModalType } from '../model'
import { useMonitoringProjectHandler } from '../hook/useMonitoringProjectHandler'
import MonitoringProjectForm from '../Forms/MonitoringProjectForm'

const MonitoringProjectFormModal:FC<FormModalType> = ({ opened, close }) => {
  const {handleCreateMonitoringProject} = useMonitoringProjectHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreateMonitoringProject}
      modalTitle='Create Project/Capital Expenditure'
      buttonText='Create expenditure'
    >
      <MonitoringProjectForm />
    </ModalWrapper>
  )
}

export default MonitoringProjectFormModal