import React, { FC } from 'react'
import { usePensionHandler } from '../hook/usePensionHandlers'
import ModalWrapper from '../ModalWrapper'
import PensionForm from '../Forms/PensionForm'
import { FormModalType } from '../model'

const PensionFormModal: FC<FormModalType> = ({opened, close}) => {
  const {handleCreatePension} = usePensionHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreatePension}
      modalTitle='Create Pension Schedule'
      buttonText='Create pension schedule'
    >
      <PensionForm />
    </ModalWrapper>
  )
}

export default PensionFormModal