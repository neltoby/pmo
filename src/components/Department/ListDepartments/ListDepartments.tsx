'use client'


import { Button, Flex, Modal, Paper, Space, TextInput, Title } from '@mantine/core'
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table'
import { useState, useMemo } from 'react'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { DepartmentListReturnDataType, DepartmentName, ListDepartmentType } from './model';
import { useGetDepartments } from './hooks/useGetDepartments'
import { useRecoilState, useRecoilValue } from 'recoil'
import { departmentListAtom } from './state'
import { useAddDepartment } from './hooks/useAddDepartment'


const ListDepartments = () => {
  const { isLoading, error } = useGetDepartments()
  const data = useRecoilValue<DepartmentListReturnDataType | null>(departmentListAtom)

  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string>('')
  const { mutate } = useAddDepartment(value)

  const handleCreateDepartment = () => {
    if (value) {
      close()
      mutate()
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
  
  return  (
    <>
      {isLoading && <Paper withBorder radius="md" p="md">Loading...</Paper>}
      {error && <Paper withBorder radius="md" p="md">Something went wrong.</Paper>}
      {data &&
        <>
          <Paper withBorder radius="md" p="md">
          <Title order={5}>All Department in {data?.name}</Title>
        <Space h="md" />
        <MantineReactTable
          columns={data?.department.length > 0 ? columnsWithData : columnsWithoutData}
            data={data.department.length > 0 ? data.department : [{ name: 'There are no departmemnt Found'}] }
          mantinePaperProps={{ shadow: '0', withBorder: false }}
          />
          {
            data.department.length > 0 && <Flex justify='flex-start'>
              <Button
                onClick={open}
                  color='#fff'
                  style={{ backgroundColor: '#00acee' }}
                >
                  Create Department 
                </Button>
            </Flex>
          }
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
              style={{ width: '100%'}}
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

export default ListDepartments