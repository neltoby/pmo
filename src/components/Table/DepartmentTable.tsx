'use client'

import { useParams } from 'next/navigation';
import { Button, Flex, Modal, Paper, Space, TextInput, Title } from '@mantine/core'
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table'
import { useState, useMemo } from 'react'
import { ParastatalsType } from './SimpleTable'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'


const DepartmentTable = () => {
  const params = useParams();
  const [departments, setDepartment] = useState<string[]>([])
  const [opened, { open, close }] = useDisclosure(false);
  const [value, setValue] = useState<string>('')
  const { parastatalId } = params
  console.log(parastatalId, params, 'line 18')

  const handleCreateDepartment = () => {
    if (value) {
      setDepartment([...departments, value])
      close()
    }
  }

  const columnsWithoutData = useMemo<MRT_ColumnDef<ParastatalsType>[]>(
		() => [
  {
    accessorKey: 'label', //access nested data with dot notation
    header: 'Name',
  },
  {
    accessorKey: 'label', //access nested data with dot notation
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
  
  const columnsWithData = useMemo<MRT_ColumnDef<ParastatalsType>[]>(
		() => [
  {
    accessorKey: 'label', //access nested data with dot notation
    header: 'Name',
  },
  {
    accessorKey: 'label', //access nested data with dot notation
    header: '',
    Cell: ({ cell }) => (
      <Link href={`/departments`}>
        <Button
          color='#fff'
          style={{ backgroundColor: '#00acee' }}
        >
          Department
        </Button>
      </Link>
    ),
  },

    ], []);
  
  return (
    <>
    <Paper withBorder radius="md" p="md">
			<Title order={5}>List of all Parastatals</Title>
      <Space h="md" />
      <MantineReactTable
				columns={departments.length > 0 ? columnsWithData : columnsWithoutData}
          data={departments.length > 0 ? departments.map((item, i) => ({label: item, value: item})) : [{ label: 'There are no departmemnt Found', value: 'There are no departmemnt Found'}] }
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
  )
}

export default DepartmentTable