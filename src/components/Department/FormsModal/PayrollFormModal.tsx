import { FC } from 'react'
import ModalWrapper from '../ModalWrapper'
import { usePayrollHandler } from '../hook/usePayrollHandler'
import PayrollForm from '../Forms/PayrollForm'
import { FormModalType } from '../model'

const PayrollFormModal: FC<FormModalType> = ({opened, close}) => {
  const {handleCreatePayroll} = usePayrollHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreatePayroll}
      modalTitle='Create Payrol Schecule'
      buttonText='Create Payroll'
    >
      <PayrollForm />
    </ModalWrapper>
  )
}

export default PayrollFormModal