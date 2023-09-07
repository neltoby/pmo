import { Button, Flex, Modal, Space } from '@mantine/core'
import { FC, ReactNode } from 'react'

export type ModalWrapperType = {
  children: ReactNode
  opened: boolean,
  close: () => void,
  handleClick: () => void,
  modalTitle: string,
  buttonText: string
}

const ModalWrapper: FC<ModalWrapperType> = ({children, opened, close, handleClick, modalTitle, buttonText}) => {
  return (
    <Modal centered opened={opened} onClose={close} closeOnClickOutside={false} closeOnEscape title={modalTitle}>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-start"
          direction="row"
          wrap="wrap"
        >
          {children}
          <Space h="xl" />
          <Flex
            justify="center"
            direction="row"
            gap="md"
            style={{ width: "100%"}}
          >
            <Button
              onClick={handleClick}
              color='#fff'
              style={{ backgroundColor: '#00acee' }}
            >
              {buttonText}
            </Button>
          </Flex>
        </Flex>
      </Modal>
  )
}

export default ModalWrapper