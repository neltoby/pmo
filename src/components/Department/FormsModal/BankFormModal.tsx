import { Button, Flex, Modal, Space } from '@mantine/core'
import { useHandler } from '../hook/useHandler'
import Form from '../Forms/Form'
import { FC } from 'react';
import { FormModalType } from '../model';
import ModalWrapper from '../ModalWrapper';


const BankFormModal: FC<FormModalType> = ({ opened, close }) => {
  const {handleCreateReport} = useHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreateReport}
      modalTitle='Add Bank Account'
      buttonText='Add account'
    >
      <Form />
    </ModalWrapper>
  )
}

export default BankFormModal