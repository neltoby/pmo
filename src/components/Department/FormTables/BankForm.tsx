import { useRecoilValue } from 'recoil'
import { bankFormTableData } from '../state/bankform.atom'
import { FormInputsType } from '../model'
import BankFormModal from '../FormsModal/BankFormModal'
import TablesForm from './TablesForm'

export const removeDashAndCapitalize = (str: string) => {
  let val = str.replaceAll('_', ' ');
  const firstLetter = val.charAt(0)
  return val.replace(firstLetter, firstLetter.toUpperCase())
}
const BankForm = () => {
  const data = useRecoilValue<FormInputsType[]>(bankFormTableData)
  return (
    <TablesForm label='Bank Account Form Table' data={data} render={({ opened, close }) => (<BankFormModal opened={opened} close={close} />)} />
  )
}

export default BankForm