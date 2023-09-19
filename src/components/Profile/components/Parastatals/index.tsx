import { useState } from 'react'
import { Box, Button, Flex, Select, Title } from '@mantine/core'
import { ToggleType } from '../Input/model'
import { useRecoilState } from 'recoil'
import { userDetailsState } from '../../state'
import { UserDetailsType } from '../../model'

const ParastatalsSelect = () => {
  const [parastatals, setParastatals] = useRecoilState<UserDetailsType>(userDetailsState)
  const [toggle, setToggle] = useState<ToggleType>(ToggleType.CLOSED)
  const [searchValue, setSearchChange] = useState<string>('')
  const onClick = () => {
    setToggle(ToggleType.OPEN)
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
            clearable
            onSearchChange={setSearchChange}
            searchValue={searchValue || parastatals.parastatals}
            data={[
              { value: 'react', label: 'React' },
              { value: 'ng', label: 'Angular' },
              { value: 'svelte', label: 'Svelte' },
              { value: 'vue', label: 'Vue' },
            ]}
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
              {parastatals.parastatals}
            </Box>
            <Button
              onClick={onClick}
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