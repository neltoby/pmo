import PaperChild from '../Paper'
import { useProjectCapitalExpenditureHandler } from '../hook/useProjectCapitalExpenditureHandler'
import ProjectCapitalExpenditureFormModal from '../FormsModal/ProjectCapitalExpenditureFormModal'

const ProjectCapitalExpenditure = () => {
 const { opened, open, close } = useProjectCapitalExpenditureHandler()
  return (
    <PaperChild 
      title='Project/Capital Expenditure'
      buttonLabel='Create Project/Capital Expenditure'
      onClick={open}
    >
      <ProjectCapitalExpenditureFormModal opened={opened} close={close} />
    </PaperChild>
  )
}

export default ProjectCapitalExpenditure