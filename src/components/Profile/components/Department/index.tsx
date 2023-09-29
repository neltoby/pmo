import { FC, useState } from 'react'
import { Box, Button, Flex, Select, Title } from '@mantine/core'
import { ToggleType } from '../Input/model'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userDetailsState, userEditDetailsState } from '../../state'
import { UserDetailsType } from '../../model'
import { departmentListAtom } from '@/components/Department/ListDepartments/state'
import { DepartmentName } from '@/components/Department/ListDepartments/model'
import { ParastatalSelectType } from '../Parastatals'

const DepartmentSelect: FC<ParastatalSelectType> = ({ onSubmit }) => {
  const user = useRecoilValue<UserDetailsType>(userDetailsState)
  const setEditUser = useSetRecoilState<UserDetailsType>(userEditDetailsState)
  const depts = useRecoilValue(departmentListAtom)
  const [toggle, setToggle] = useState<ToggleType>(ToggleType.CLOSED)
  const [searchValue, setSearchChange] = useState<string>('')
  const onClick = () => {
    onSubmit()
    setToggle(ToggleType.CLOSED)
  }

  const handleOpen = () => {
    setToggle(ToggleType.OPEN)
  }

  const onChange = (value: string) => { 
    setEditUser(val => ({ ...val, department: value }))
  }
  const handleUndo = () => { 
    setToggle(ToggleType.CLOSED)
  }
  return (
    <Box
      sx={() => ({ marginTop: '3rem' })}
    >
      <Title order={4}>Department</Title>
      {toggle === ToggleType.OPEN ?
        <Flex justify='space-between' align='flex-end'>
          <Select
            sx={() => ({
              width: '70%',
              '@media (max-width: 62em)': {
                width: '55%',
              }
            })}
            size='lg'
            placeholder="Select department"
            searchable
            clearable
            onSearchChange={setSearchChange}
            searchValue={searchValue}
            onChange={onChange}
            data={(depts?.department || []).map((dept: DepartmentName, i: number) => ({ label: dept.name, value: dept.name }))}
          />
          <Button
            onClick={onClick}
            sx={(theme) => ({ backgroundColor: theme.colors.cyan })}
          >
            Save
          </Button>
          <Button
            onClick={handleUndo}
            sx={(theme) => ({ backgroundColor: theme.colors.cyan })}
          >
            Undo
          </Button>
        </Flex>
        : 
        <Box
          sx={() => ({ marginTop: '2rem' })}
        >
          <Flex justify='space-between'>
            <Box>
              {user.department || 'Not department selected' }
            </Box>
            <Button
              onClick={handleOpen}
              sx={(theme) => ({ backgroundColor: theme.colors.cyan })}
            >
              Edit department
            </Button>
          </Flex>
        </Box>
      }
    </Box>
  )
}

export default DepartmentSelect