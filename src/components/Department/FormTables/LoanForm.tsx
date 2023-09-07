import { loanFormTableData } from '../state/loan.atom'
import { useRecoilValue } from 'recoil'
import { LoanDataType } from '../model'
import TablesForm from './TablesForm'
import LoanFormModal from '../FormsModal/LoanFormModal'

const LoanForm = () => {
  const data = useRecoilValue<LoanDataType[]>(loanFormTableData)
  return (
    <TablesForm label='Loan Form Table' data={data} render={({ opened, close }) => (<LoanFormModal opened={opened} close={close} />)} />
  )
}

export default LoanForm