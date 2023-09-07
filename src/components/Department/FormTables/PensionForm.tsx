import React from 'react'
import { PensionDataType } from '../model'
import { pensionFormDataAtom, pensionFormTableData } from '../state/pensionform.atom'
import PensionFormModal from '../FormsModal/PensionFormModal'
import TablesForm from './TablesForm'
import { useRecoilValue } from 'recoil'

const PensionForm = () => {
  const data = useRecoilValue<PensionDataType[]>(pensionFormTableData)
  return (
    <TablesForm label='Pension Schedule Form Table' data={data} render={({ opened, close }) => (<PensionFormModal opened={opened} close={close} />)} />
  )
}

export default PensionForm