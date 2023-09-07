import React from 'react'
import { Button, Flex, Modal, Space } from '@mantine/core'
import PaperChild from '../Paper'
import { useHousingFundHandler } from '../hook/useHousingFundHandler'
import HousingFundFormModal from '../FormsModal/HousingForm'

const HousingFund = () => {
 const { opened, open, close, } = useHousingFundHandler()
  return (
    <PaperChild 
      title='National Housing Fund'
      buttonLabel='Create housing fund'
      onClick={open}
    >
      <HousingFundFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default HousingFund