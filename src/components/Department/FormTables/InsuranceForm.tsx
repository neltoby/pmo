import React, { useMemo } from 'react'
import { DeptTableEnum, InsuranceDataType } from '../model';
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table';
import { Paper, Space, Flex, Button, Title } from '@mantine/core';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { insuranceTableData } from '../state/insurance.atom';
import InsuranceFormModal from '../FormsModal/InsuranceFormModal';
import TablesForm from './TablesForm';

const InsuranceForm = () => {
  const data = useRecoilValue<InsuranceDataType[]>(insuranceTableData)
  return (
    <TablesForm label='Insurance Form Table' data={data} render={({ opened, close }) => (<InsuranceFormModal opened={opened} close={close} />)} />
  )
}

export default InsuranceForm