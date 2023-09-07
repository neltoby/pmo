import PaperChild from '../Paper'
import { usePayeHandler } from '../hook/usePayeHandler'
import PayeFormModal from '../FormsModal/PayeFormModal'

const Paye = () => {
 const { opened, open, close } = usePayeHandler()
  return (
    <PaperChild 
      title='Payee Schedule'
      buttonLabel='Create schedule'
      onClick={open}
    >
      <PayeFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default Paye