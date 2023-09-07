import PaperChild from '../Paper'
import { usePayrollHandler } from '../hook/usePayrollHandler'
import PayrollFormModal from '../FormsModal/PayrollFormModal'

const Payroll = () => {
 const { opened, open, close } = usePayrollHandler()
  return (
    <PaperChild 
    title='Payroll Schedule'
    buttonLabel='Create payroll'
    onClick={open}
    >
    <PayrollFormModal opened={opened} close={close}/>
    </PaperChild>
  )
}

export default Payroll