import React from 'react'
import { useHandler } from '../hook/useHandler'
import { Button, Flex, Modal, Space } from '@mantine/core'
import Form from './Form'
import PaperChild from '../Paper'
import BankFormModal from '../FormsModal/BankFormModal'
import { useDisclosure } from '@mantine/hooks'

const BankForm = () => {
  const {opened, open, close } = useHandler();
  return (
    <PaperChild 
      title='Add Bank Account Info'
      buttonLabel='Add Bank Account'
      onClick={open}
    >
      <BankFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default BankForm