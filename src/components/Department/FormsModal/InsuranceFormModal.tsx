import { Modal, Flex, Space, Button } from '@mantine/core'
import { FC } from 'react'
import InsuranceForm from '../Forms/InsuranceForm'
import { useInsuranceHandler } from '../hook/useInsuranceHandler'
import { FormModalType } from '../model'

const InsuranceFormModal: FC<FormModalType> = ({ opened, close}) => {
const { handleCreateInsurance } = useInsuranceHandler()
  return (
    <Modal centered opened={opened} onClose={close} closeOnClickOutside={false} closeOnEscape title="Create Insurance Coverage">
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <InsuranceForm />
          <Space h="xl" />
          <Flex
            justify="center"
            direction="row"
            gap="md"
            style={{ width: "100%"}}
          >
            <Button
              onClick={handleCreateInsurance}
              color='#fff'
              style={{ backgroundColor: '#00acee' }}
            >
              Create Insurance coverage
            </Button>
          </Flex>
        </Flex>
      </Modal>
  )
}

export default InsuranceFormModal