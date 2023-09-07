import React from 'react'
import { PayrollDataType } from '../model'
import { payrollFormTableData } from '../state/payrollform.atom'
import PayrollFormModal from '../FormsModal/PayrollFormModal'
import { useRecoilValue } from 'recoil'
import TablesForm from './TablesForm'

const PayrollForm = () => {
  const data = useRecoilValue<PayrollDataType[]>(payrollFormTableData)
  return (
    <TablesForm label='Payroll Schedule Form Table' data={data} render={({ opened, close }) => (<PayrollFormModal opened={opened} close={close} />)} />
  )
}

export default PayrollForm