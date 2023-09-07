import React, { FC } from 'react'
import { usePayeHandler } from '../hook/usePayeHandler'
import PayeForm from '../Forms/PayeForm'
import ModalWrapper from '../ModalWrapper'
import { FormModalType } from '../model'

const PayeFormModal: FC<FormModalType> = ({opened, close}) => {
  const {handleCreatePaye} = usePayeHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreatePaye}
      modalTitle='Create Paye Schedule'
      buttonText='Create pension schedule'
    >
      <PayeForm />
    </ModalWrapper>
  )
}

export default PayeFormModal