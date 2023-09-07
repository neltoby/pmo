import PaperChild from '../Paper'
import { useLoanHandler } from '../hook/useLoanHandler'
import LoanFormModal from '../FormsModal/LoanFormModal'

const Loan = () => {
 const { opened, open, close} = useLoanHandler()
  return (
    <PaperChild 
      title='Loan/Debt/Liability'
      buttonLabel='Create schedule'
      onClick={open}
    >
      <LoanFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default Loan