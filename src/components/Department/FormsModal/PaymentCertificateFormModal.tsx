import React, { FC } from 'react'
import PaymentCertificateForm from '../Forms/PaymentCertificateForm'
import ModalWrapper from '../ModalWrapper'
import { usePaymentCertificateHandler } from '../hook/usePaymentCertificateHandler'
import { FormModalType } from '../model'

const PaymentCertificateFormModal: FC<FormModalType> = ({opened, close}) => {
  const {handleCreatePaymentCertificate} = usePaymentCertificateHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreatePaymentCertificate}
      modalTitle='Create Payment Certificate'
      buttonText='Create certificate'
    >
      <PaymentCertificateForm />
    </ModalWrapper>
  )
}

export default PaymentCertificateFormModal