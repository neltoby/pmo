import PaperChild from '../Paper'
import { useParastatalTenderBoardHandler } from '../hook/useParastatalTenderBoardHandler'
import ParastatalTenderBoardFormModal from '../FormsModal/ParastatalTenderBoardFormModal'

const ParastatalTenderBoard = () => {
 const { opened, open, close } = useParastatalTenderBoardHandler()
  return (
    <PaperChild 
      title='Parastatal Tender Board'
      buttonLabel='Create PTB'
      onClick={open}
    >
    <ParastatalTenderBoardFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default ParastatalTenderBoard