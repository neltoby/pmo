import React from 'react'
import { PaymentCerticate } from '../model'
import PaymentCertificateFormModal from '../FormsModal/PaymentCertificateFormModal'
import { useRecoilValue } from 'recoil'
import { paymentCertificateTableData } from '../state/paymentcertificateform.atom'
import TablesForm from './TablesForm'

const PaymentForm = () => {
  const data = useRecoilValue<PaymentCerticate[]>(paymentCertificateTableData)
  return (
    <TablesForm label='Payment Certificate Form Table' data={data} render={({ opened, close }) => (<PaymentCertificateFormModal opened={opened} close={close} />)} />
  )
}

export default PaymentForm