import PaperChild from '../Paper'
import { usePensionHandler } from '../hook/usePensionHandlers'
import PensionFormModal from '../FormsModal/PensionFormModal'

const Pension = () => {
 const { opened, open, close } = usePensionHandler()
  return (
    <PaperChild 
      title='Pension Schedule'
      buttonLabel='Create schedule'
      onClick={open}
    >
      <PensionFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default Pension