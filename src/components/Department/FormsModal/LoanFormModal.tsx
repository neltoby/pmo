import React, { FC } from 'react'
import LoanForm from '../Forms/LoanForm'
import { Modal, Flex, Space, Button } from '@mantine/core'
import { FormModalType } from '../model'
import { useLoanHandler } from '../hook/useLoanHandler'

const LoanFormModal: FC<FormModalType> = ({ opened, close }) => {
  const { handleCreateLoan } = useLoanHandler()
  return (
    <Modal centered opened={opened} onClose={close} closeOnClickOutside={false} closeOnEscape title="Create Loan">
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <LoanForm />
          <Space h="xl" />
          <Flex
            justify="center"
            direction="row"
            gap="md"
            style={{ width: "100%"}}
          >
            <Button
              onClick={handleCreateLoan}
              color='#fff'
              style={{ backgroundColor: '#00acee' }}
            >
              Create Loan
            </Button>
          </Flex>
        </Flex>
      </Modal>
  )
}

export default LoanFormModal