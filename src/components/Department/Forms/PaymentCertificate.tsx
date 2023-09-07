import React from 'react'
import PaymentCertificateFormModal from '../FormsModal/PaymentCertificateFormModal'
import PaperChild from '../Paper'
import { usePaymentCertificateHandler } from '../hook/usePaymentCertificateHandler'

const PaymentCertificate = () => {
  const { opened, open, close } = usePaymentCertificateHandler()
  return (
    <PaperChild 
    title='Direct Labour/Procurement Certificate'
    buttonLabel='Create certificate'
    onClick={open}
    >
    <PaymentCertificateFormModal opened={opened} close={close}/>
    </PaperChild>
  )
}

export default PaymentCertificate