import { FC } from 'react'
import ProjectCapitalExpenditureForm from '../Forms/ProjectCapitalExpenditureForm'
import ModalWrapper from '../ModalWrapper'
import { useProjectCapitalExpenditureHandler } from '../hook/useProjectCapitalExpenditureHandler'
import { FormModalType } from '../model'

const ProjectCapitalExpenditureFormModal: FC<FormModalType> = ({opened, close}) => {
  const {handleCreateProjectCapitalExpenditure} = useProjectCapitalExpenditureHandler()
  return (
    <ModalWrapper
      opened={opened}
      close={close}
      handleClick={handleCreateProjectCapitalExpenditure}
      modalTitle='Create Project/Capital Expenditure'
      buttonText='Create expenditure'
    >
      <ProjectCapitalExpenditureForm />
    </ModalWrapper>
  )
}

export default ProjectCapitalExpenditureFormModal