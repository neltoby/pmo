import React, { FC } from 'react'
import StaffLoanForm from '../Forms/StaffLoanForm'
import ModalWrapper from '../ModalWrapper'
import { useStaffLoanHandler } from '../hook/useStaffLoanHandler'
import { FormModalType } from '../model'

const StaffLoanFormModal: FC<FormModalType> = ({opened, close}) => {
  const {handleCreateStaffLoan} = useStaffLoanHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreateStaffLoan}
      modalTitle='Create Staff Loan'
      buttonText='Create loan'
    >
      <StaffLoanForm />
    </ModalWrapper>
  )
}

export default StaffLoanFormModal