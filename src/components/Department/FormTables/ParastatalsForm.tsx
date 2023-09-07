import React from 'react'
import { useRecoilValue } from 'recoil'
import PayeFormModal from '../FormsModal/PayeFormModal'
import TablesForm from './TablesForm'
import { ParastatalTenderBoardDataType } from '../model'
import { ptbFormTableData } from '../state/ptbform.atom'
import ParastatalTenderBoardFormModal from '../FormsModal/ParastatalTenderBoardFormModal'

const ParastatalsForm = () => {
  const data = useRecoilValue<ParastatalTenderBoardDataType[]>(ptbFormTableData)
  return (
    <TablesForm label='Parastatal Tender Board Form Table' data={data} render={({ opened, close }) => (<ParastatalTenderBoardFormModal opened={opened} close={close} />)} />
  )
}

export default ParastatalsForm