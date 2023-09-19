import { ChangeEvent, FC, FormEvent } from 'react'
import { Button, Flex, Group, Input, LoadingOverlay, Radio, Select, TextInput } from '@mantine/core'
import { useRecoilState, useRecoilValue, } from 'recoil'
import { noticeBoardForm, noticeBoardSendBy, showEmailFieldSelector } from '../../state'
import { NoticeDataType, NoticeMessageBy, NoticeMessageTo } from '../../model'
import SelectParastal from './SelectParastal'
import { useCreateNotice } from '../../hooks/useCreateNotice'

const toValues = [
  { value: NoticeMessageTo.HEADS, label: 'Heads of Parastatal' },
  { value: NoticeMessageTo.INDIVIDUAL, label: 'An individual' },
  { value: NoticeMessageTo.PARASTATAL, label: 'Parastatal' },
  { value: NoticeMessageTo.PMO_STAFF, label: 'PMO Staffs' },
]

type FormType = {
  close: Function
}

const Form: FC<FormType> = ({close}) => {
  const [values, setValues] = useRecoilState<NoticeDataType>(noticeBoardForm)
  const isShowEmailField = useRecoilValue(showEmailFieldSelector);
  const sendByEmail = useRecoilValue(noticeBoardSendBy)
  const { mutate, visible, toggle } = useCreateNotice()
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setValues(val => ({ ...val, [e.target.name]: e.target.value }))
  }

  const onChangeBy = (by: NoticeMessageBy) => {
    setValues(val => ({ ...val, by }))
  }

  const handleSelectTo = (str: NoticeMessageTo) => { 
    if (str === NoticeMessageTo.PARASTATAL || str === NoticeMessageTo.PMO_STAFF) {
      if (values.by === NoticeMessageBy.EMAIL) {
        setValues(val => ({ ...val, to: str, by: NoticeMessageBy.PLATFORM }))
      } else {
        setValues(val => ({ ...val, to: str }))
      }
    } else {
      setValues(val => ({ ...val, to: str }))
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
    if (values.to === NoticeMessageTo.HEADS || values.to === NoticeMessageTo.PARASTATAL) {
      if (values.to_parastatal.length === 0) 
        return
    }
    mutate()
    toggle()
    close()
  }
  return (
    <form onSubmit={onSubmit} style={{ position: 'relative' }}>
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <Flex direction='column'>
        <Input.Wrapper
          id="title"
          withAsterisk
          label="Title"
          description="Title of the message."
          error=""
        >
          <Input value={values.title} name='title' onChange={handleOnChange} required id="title" placeholder="Title" />
        </Input.Wrapper>
        <br/>
        <TextInput
          placeholder="Enter a message..."
          label="Message"
          value={values.message}
          withAsterisk
          required
          name='message'
          size='sm'
          style={{ width: '100%'}}
          onChange={handleOnChange}
        />
        <br />
        <Select
          label="Select who you want to send to..."
          placeholder="To"
          value={values.to}
          onChange={handleSelectTo}
          data={toValues}
        />
        <br />
        <SelectParastal />
        <Radio.Group
          name="by"
          value={values.by}
          onChange={onChangeBy}
          label="Notify by"
          description="How will you want to notify your target?"
          withAsterisk
        >
          <Group mt="xs">
            <Radio required value={NoticeMessageBy.PLATFORM} label="In Platform" />
            { sendByEmail && <Radio required value={NoticeMessageBy.EMAIL} label="Email" /> }
          </Group>
        </Radio.Group>
        {isShowEmailField && 
          <>
            <br/>
            <Input.Wrapper
              id="email"
              withAsterisk
              label="Email"
              description="Email address of receiver"
              error=""
            >
              <Input type='email' required value={values.to_user} name='to_user' onChange={handleOnChange} id="to_user" placeholder="Email address of receiver" />
            </Input.Wrapper>
          </>
        }
        <br />
        <Button
          color='#fff'
          style={{ backgroundColor: '#00acee' }}
          type='submit'
        >
          Notify
        </Button>
      </Flex>
    </form>
  )
}

export default Form