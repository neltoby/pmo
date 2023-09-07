import PaperChild from '../Paper'
import { useInsuranceHandler } from '../hook/useInsuranceHandler'
import InsuranceFormModal from '../FormsModal/InsuranceFormModal'

const Insurance = () => {
  const { opened, open, close } = useInsuranceHandler()
  return (
    <PaperChild 
      title='Non Current Assets-Insurance Coverage'
      buttonLabel='Create insurance'
      onClick={open}
    >
      <InsuranceFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default Insurance