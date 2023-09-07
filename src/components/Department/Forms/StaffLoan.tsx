import React from 'react'
import { Button, Flex, Modal, Space } from '@mantine/core'
import PaperChild from '../Paper'
import { useStaffLoanHandler } from '../hook/useStaffLoanHandler'
import StaffLoanForm from './StaffLoanForm'
import StaffLoanFormModal from '../FormsModal/StaffLoanFormModal'

const StaffLoan = () => {
 const { opened, open, close } = useStaffLoanHandler()
  return (
    <PaperChild 
      title='Staff Loan'
      buttonLabel='Create staff loan'
      onClick={open}
    >
      <StaffLoanFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default StaffLoan