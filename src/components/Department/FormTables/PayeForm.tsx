import React from 'react'
import { PayeDataType } from '../model'
import { useRecoilValue } from 'recoil'
import { payeFormTableData } from '../state/payeform.atom'
import PayeFormModal from '../FormsModal/PayeFormModal'
import TablesForm from './TablesForm'

const PayeForm = () => {
  const data = useRecoilValue<PayeDataType[]>(payeFormTableData)
  return (
    <TablesForm label='Paye Schedule Form Table' data={data} render={({ opened, close }) => (<PayeFormModal opened={opened} close={close} />)} />
  )
}

export default PayeForm