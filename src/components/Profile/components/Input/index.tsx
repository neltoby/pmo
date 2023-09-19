
import { FC, useState } from "react"
import { Input, MediaQuery, InputProps, Title, Box, Flex, Button } from "@mantine/core"
import { EditInputType, MediaBoxType, ToggleType } from "./model"

const MediaBox: FC<MediaBoxType> = ({children}) => {
  return (
    <MediaQuery largerThan='md' styles={(theme) => ({
      width: '45%',
      marginTop: '3rem',
    })}>
      {children}
    </MediaQuery>
  )
}

const EditInput: FC<EditInputType> = ({ id, label, placeholder, value, onChange, onSubmit, error = '' }) => {
  const [toggle, setToggle] = useState<ToggleType>(ToggleType.CLOSED)
  const onClick = () => {
    setToggle(ToggleType.OPEN)
  }
  const handleOnSubmit = () => { 
    setToggle(ToggleType.CLOSED)
  }
  const handleUndo = () => setToggle(ToggleType.CLOSED)
  return (
    <>
      {toggle === ToggleType.CLOSED ?
        <Box
          // sx={(theme) => ({ marginTop: '2rem' })}
          sx={() => ({
              marginTop: '2rem',
            })}
        >
          <Title order={5} >
            {label}
          </Title>
          <Flex justify='space-between'>
            <Box>
              {value}
            </Box>
            <Button
              onClick={onClick}
              sx={(theme) => ({ width: '10rem', backgroundColor: theme.colors.cyan })}
            >
              Edit {id}
            </Button>
          </Flex>
        </Box> :
        <Flex
          sx={() => ({ marginTop: '2rem' })}
          justify='space-between'
          align='flex-end'
        >
          <Input.Wrapper
            id={id}
            label={label}
            error={error}
            sx={() => ({
              width: '70%',
              '@media (max-width: 62em)': {
                width: '55%',
              }
            })}
          >
            <Input sx={() => ({
              width: '100%',
            })} name={id} value={value} onChange={onChange} size="lg" id={id} placeholder={placeholder} />
          </Input.Wrapper>
          <Button
            onClick={handleOnSubmit}
            sx={(theme) => ({ backgroundColor: theme.colors.cyan })}>Submit</Button>
          <Button
            onClick={handleUndo}
            sx={(theme) => ({
              color: theme.colors.cyan, backgroundColor: '#fff', border: `1px ${theme.colors.cyan} solid !important`, "&:hover": {
                color: '#fff',
                border: 'none',
            } })}>Undo</Button>
        </Flex>
      }
    </>
  )
}

export default EditInput