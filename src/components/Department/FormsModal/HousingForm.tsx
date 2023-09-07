import { FC } from 'react'
import { Modal, Flex, Space, Button } from '@mantine/core'
import HousingFundForm from '../Forms/HousingFundForm'
import { FormModalType } from '../model'
import { useHousingFundHandler } from '../hook/useHousingFundHandler'

const HousingFundFormModal: FC<FormModalType> = ({ opened, close }) => {
  const { handleCreateHousingFund } = useHousingFundHandler()
  return (
    <Modal centered opened={opened} onClose={close} closeOnClickOutside={false} closeOnEscape title="National Housing Fund">
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          <HousingFundForm />
          <Space h="xl" />
          <Flex
            justify="center"
            direction="row"
            gap="md"
            style={{ width: "100%"}}
          >
            <Button
              onClick={handleCreateHousingFund}
              color='#fff'
              style={{ backgroundColor: '#00acee' }}
            >
              Create Housing Fund
            </Button>
          </Flex>
        </Flex>
      </Modal>
  )
}

export default HousingFundFormModal