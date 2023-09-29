import { useState } from 'react'
import { Box, Button, Flex, Select, Title } from '@mantine/core'
import { ToggleType } from '../Input/model'
import { useRecoilState } from 'recoil'
import { userDetailsState } from '../../state'
import { UserDetailsType } from '../../model'
import { DatePickerInput } from '@mantine/dates'

const DateOfBirth = () => {
  const [parastatals, setParastatals] = useRecoilState<UserDetailsType>(userDetailsState)
  const [toggle, setToggle] = useState<ToggleType>(ToggleType.CLOSED)
  const [dateValue, setDateValue] = useState<Date | null>(null)
  const onClick = () => {
    setToggle(ToggleType.OPEN)
  }
  const handleUndo = () => { 
    setToggle(ToggleType.CLOSED)
  }
  return (
    <Box
      sx={() => ({ marginTop: '3rem' })}
    >
      <Title order={4}>Date of birth</Title>
      {toggle === ToggleType.OPEN ?
        <Flex justify='space-between' align='flex-end'>
          <DatePickerInput
            size='lg'
            sx={() => ({
              width: '70%',
              '@media (max-width: 62em)': {
                width: '55%',
              }
            })}
            label="Assets date"
            placeholder="Date"
            value={dateValue || parastatals.birthdate }
            onChange={setDateValue}
          />
          <Button
            variant='outline'
            onClick={onClick}
            sx={(theme) => ({ backgroundColor: theme.colors.cyan })}
          >
            Save
          </Button>
          <Button
            variant='outline'
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
              {parastatals.birthdate?.toString() as string}
            </Box>
            <Button
              variant='outline'
              onClick={onClick}
              sx={(theme) => ({ backgroundColor: theme.colors.cyan })}
            >
              Edit date
            </Button>
          </Flex>
        </Box>
      }
    </Box>
  )
}

export default DateOfBirth