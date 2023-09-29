'use client'

import { Button, Flex, Modal, Paper, Space, TextInput, Title } from '@mantine/core'
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table'
import { useState, useMemo } from 'react'
import { ParastatalsType } from '@/components/Table/SimpleTable'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { DepartmentListReturnDataType, DepartmentName } from './ListDepartments/model'
import { departmentListAtom } from './ListDepartments/state'
import { useRecoilValue } from 'recoil'
import { useGetDefaultParastatals } from './hook/useGetDefaultParastatals'

const Department = () => {
  const { isLoading, error } = useGetDefaultParastatals()
  const data = useRecoilValue<DepartmentListReturnDataType | null>(departmentListAtom)
  // const [departments, setDepartment] = useState<string[]>(['Inspectorate', 'Monitoring', 'Research'])
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string>('')

  const handleCreateDepartment = () => {
    if (value) {
      // setDepartment([...departments, value])
      close()
    }
  }

  const columnsWithoutData = useMemo<MRT_ColumnDef<DepartmentName>[]>(
		() => [
  {
    accessorKey: 'name', //access nested data with dot notation
    header: 'Name',
  },
  {
    accessorKey: 'name', //access nested data with dot notation
    header: '',
    Cell: ({ cell }) => (
      <Button
        onClick={open}
          color='#fff'
          style={{ backgroundColor: '#00acee' }}
        >
          Create Department
        </Button>
    ),
  },
    ], [])
  
  const columnsWithData = useMemo<MRT_ColumnDef<DepartmentName>[]>(
		() => [
  {
    accessorKey: 'name', //access nested data with dot notation
    header: 'Name',
  },
  {
    accessorKey: 'name', //access nested data with dot notation
    header: '',
    Cell: ({ cell }) => (
      <Link href={`/department/${cell.getValue<string>()}`}>
        <Button
          color='#fff'
          style={{ backgroundColor: '#00acee' }}
        >
          Create Report
        </Button>
      </Link>
    ),
  },

    ], []);
  return (
  <>
    {isLoading && <Paper withBorder radius="md" p="md">Loading...</Paper>}
      {error && <Paper withBorder radius="md" p="md">Something went wrong.</Paper>}
      {data &&
        <>
          <Paper withBorder radius="md" p="md">
            <Title order={5}>List of all Department</Title>
            <Space h="md" />
            <MantineReactTable
              columns={data.department.length ? columnsWithData : columnsWithoutData}
              data={data.department.length ? data.department : [{ name: 'There are no departmemnt Found' }]}
              mantinePaperProps={{ shadow: '0', withBorder: false }}
            />
          </Paper>
          <Modal centered opened={opened} onClose={close} closeOnClickOutside closeOnEscape title="Create Department">
            <Flex
              mih={50}
              gap="md"
              justify="flex-start"
              align="flex-start"
              direction="row"
              wrap="wrap"
            >
              <TextInput
                placeholder="Name of department"
                label="Name of departnment"
                value={value}
                withAsterisk
                size='lg'
                style={{ width: '100%' }}
                onChange={(event) => setValue(event.currentTarget.value)}
              />
              <Space h="md" />
              <Button
                onClick={handleCreateDepartment}
                color='#fff'
                style={{ backgroundColor: '#00acee' }}
              >
                Create
              </Button>
            </Flex>
          </Modal>
        </>
      }
      </>
  )
}

export default Department