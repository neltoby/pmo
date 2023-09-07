import React from 'react'
import { StaffLoanDataType } from '../model'
import { staffLoanFormTableData } from '../state/staffloanform.atom'
import StaffLoanFormModal from '../FormsModal/StaffLoanFormModal'
import { useRecoilValue } from 'recoil'
import TablesForm from './TablesForm'

const StaffLoan = () => {
  const data = useRecoilValue<StaffLoanDataType[]>(staffLoanFormTableData)
  return (
    <TablesForm label='Staff Loan Form Table' data={data} render={({ opened, close }) => (<StaffLoanFormModal opened={opened} close={close} />)} />
  )
}

export default StaffLoan