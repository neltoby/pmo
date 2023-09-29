import { useState, FC } from 'react'
import { Box, Button, Flex, Select, Title } from '@mantine/core'
import { ToggleType } from '../Input/model'
import { useRecoilState } from 'recoil'

import { useGetParastatalsList } from '@/components/Parastatals/hooks/useGetParastatalsList'
import { userDetailsState, userEditDetailsState } from '../../state'
import { UserDetailsType } from '../../model'
import { formData } from '@/components/SignUp/components/Signup'
import { useGetDepartments } from '@/components/Department/ListDepartments/hooks/useGetDepartments'

export type ParastatalSelectType = {
  onSubmit: Function; 
}

const ParastatalsSelect: FC<ParastatalSelectType> = ({ onSubmit }) => {
  const { data } = useGetParastatalsList()
  const [user, setUser] = useRecoilState<UserDetailsType>(userDetailsState)
  const [editUser, setEditUser] = useRecoilState<UserDetailsType>(userEditDetailsState)
  const { data: paraData, isLoading, error } = useGetDepartments(user.parastatal)
  const [toggle, setToggle] = useState<ToggleType>(ToggleType.CLOSED)
  const [searchValue, setSearchChange] = useState<string>('')

  const onChange = (value: string) => { 
    setEditUser(val => ({ ...val, parastatal: value, department: '' }))
  }

  const handleOpen = () => {
    setToggle(ToggleType.OPEN)
  }
  const onClick = () => {
    onSubmit()
    setToggle(ToggleType.CLOSED)
  }
  const handleUndo = () => { 
    setToggle(ToggleType.CLOSED)
  }
  return (
    <>
      <Title order={4}>Parastatals</Title>
      {toggle === ToggleType.OPEN ?
        <Flex justify='space-between' align='flex-end'>
          <Select
            size='lg'
            sx={() => ({
              width: '70%',
              '@media (max-width: 62em)': {
                width: '55%',
              }
            })}
            placeholder="Select parastatals"
            searchable
            nothingFound="No options"
            clearable
            searchValue={searchValue}
            onSearchChange={setSearchChange}
            onChange={onChange}
            data={formData(data)}
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
              {paraData?.name}
            </Box>
            <Button
              onClick={handleOpen}
              sx={(theme) => ({ backgroundColor: theme.colors.cyan })}
            >
              Edit parastatals
            </Button>
          </Flex>
        </Box>
      }
    </>
  )
}

export default ParastatalsSelect