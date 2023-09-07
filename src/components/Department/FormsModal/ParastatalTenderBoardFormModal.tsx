import React, { FC } from 'react'
import ModalWrapper from '../ModalWrapper'
import { useParastatalTenderBoardHandler } from '../hook/useParastatalTenderBoardHandler'
import { FormModalType } from '../model'
import ParastatalTenderBoardForm from '../Forms/ParastatalTenderBoardForm'

const ParastatalTenderBoardFormModal:FC<FormModalType> = ({ opened, close }) => {
  const {handleCreatePTB} = useParastatalTenderBoardHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreatePTB}
      modalTitle='Create PTB'
      buttonText='Create PTB'
    >
      <ParastatalTenderBoardForm />
    </ModalWrapper>
  )
}

export default ParastatalTenderBoardFormModal