import React, { FC, useMemo } from 'react'
import { DeptTableEnum, InsuranceDataType, TablesFormType } from '../model';
import { Paper, Space, Flex, Button, Title } from '@mantine/core';
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table';
import { useSetRecoilState } from 'recoil';
import { useHandler } from '../hook/useHandler';
import { deptTableAtom } from '../state';
import { removeDashAndCapitalize } from './BankForm';

const TablesForm: FC<TablesFormType> = ({ label, render , data }) => {
  const { opened, open, close } = useHandler();
  const setDeptTable = useSetRecoilState<DeptTableEnum>(deptTableAtom)
  const handleBack = () => {
    setDeptTable(DeptTableEnum.Nothing)
  }
  const transformedData = data.map((item, i) => {
    const obj = {...item}
      for (const prop in obj) {
        // @ts-ignore
        if (obj[prop]) {
          if (typeof obj[prop] === 'object') {
            // @ts-ignore
            obj[prop] = obj[prop].toString()
          }
        } else {
          obj[prop] = ''
        }
      }
    return obj
  })
  const itemKeys = Object.keys(transformedData[0])
  // @ts-ignore
  const columns = useMemo<MRT_ColumnDef<InsuranceDataType>[]>(() => {
      let res = itemKeys.map((item: any, i: number) => {
        if (i === itemKeys.length - 1) {
          return [
            {
            accessorKey: item,
            header: removeDashAndCapitalize(item),
            },
            {
            accessorKey: item,
            header: 'Status',
              Cell: () => (
                <Button
                  color='#fff'
                  style={{ backgroundColor: '#00acee' }}
                >
                  Not Approved
                </Button>
              )
            }
          ]
        }
        return {
          accessorKey: item,
          header: removeDashAndCapitalize(item),
        }
      })
      return res.flat(Infinity)
    }
  , [])
  return (
    <>
    <Paper withBorder radius="md" p="md">
			<Title order={5}>{label}</Title>
			<Space h="md" />
        <MantineReactTable
          // @ts-ignore
          columns={columns}
          // @ts-ignore
          data={transformedData}
          mantinePaperProps={{ shadow: '0', withBorder: false }}
        />
      <Flex justify='space-between'>
          <Button
            color='#fff'
            style={{ backgroundColor: '#00acee' }}
            onClick={open}
          >
            Create +
          </Button>
          <Button
            color='#fff'
            style={{ backgroundColor: '#00acee' }}
            onClick={handleBack}
          >
            Back
          </Button>
      </Flex>
      </Paper>
        {render({opened, close})}
      {/* <InsuranceFormModal opened={opened} close={close} /> */}
    </>
    )
}

export default TablesForm