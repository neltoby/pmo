'use client'

import { ChangeEvent, FC, ReactNode, useState } from "react";
import { Avatar, Box, Button, FileButton, Flex, Input, MediaQuery, Paper, Title, rem } from "@mantine/core"
import Image from "next/image"
import { IconTrash } from "@tabler/icons-react";
import EditInput from "./components/Input";
import { useRecoilState } from "recoil";
import { UserDetailsType } from "./model";
import { userDetailsState } from "./state";
import ParastatalsSelect from "./components/Parastatals";
import DepartmentSelect from "./components/Department";
import DateOfBirth from "./components/DateOfBirth";
import { MediaBoxType } from "./components/Input/model";



const MediaBox: FC<MediaBoxType> = ({children}) => {
  return (
    <MediaQuery
      smallerThan='md'
      styles={() => ({
        // width: '46%',
        flexDirection: 'column',
        marginTop: '2rem',
      })}
    >
      {children}
    </MediaQuery>
  )
}

const Profile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [user, setUser] = useRecoilState<UserDetailsType>(userDetailsState)
  const handleFileUpload = () => { }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setUser(val => ({...val, [e.target.name]: e.target.value}))
  }
  const onSubit = () => { }

  return (
    <>
      <Title order={1}>Femi Martins</Title><br/>
      <Flex>
        <Image className="" src='/avatar.webp' alt='femi martins' width={200} height={200} />
        <Flex
          direction='column'
          justify='center'
          sx={(theme) => ({ paddingLeft: '2rem' })}
        >
          <FileButton onChange={setFile} accept="image/png,image/jpeg">
            {(props) => <Button {...props} sx={(theme) => ({ width: '100%', backgroundColor: theme.colors.cyan, marginTop: '1rem' })}>Change photo</Button>}
          </FileButton>
          <Button
            color='#fff'
            sx={(theme) => ({
              width: '100%', color: theme.colors.cyan, backgroundColor: '#fff', marginTop: '1rem', border: `1px ${theme.colors.cyan} solid !important`, "&:hover": {
                color: 'red',
                border: 'none',
            } })}
            onClick={handleFileUpload}
            leftIcon={<IconTrash size={rem(18)} />}
          >
            Delete photo
          </Button>
        </Flex>
      </Flex>
      <Flex
        wrap='wrap'
        justify='space-between'
        sx={() => ({
          marginTop: '2rem',
          '@media (max-width: 62em)': {
            flexDirection: 'column',
          }
        })}
      >
        <Flex
          direction='column'
          sx={() => ({
          width: '47%',
          '@media (max-width: 62em)': {
            flexDirection: 'column',
            width: '100%',
          }
        })}
        >
          <Title order={4}>Personal Profile</Title>
          <EditInput
            value={user.firstname}
            onChange={onChange}
            onSubmit={onSubit}
            id='firstname'
            label='First Name'
            placeholder='Enter first name'
          />
          <EditInput
            value={user.middlename}
            onChange={onChange}
            onSubmit={onSubit}
            id='middlename'
            label='Middle Name'
            placeholder='Enter middle name'
          />
          <EditInput
            value={user.lastname}
            onChange={onChange}
            onSubmit={onSubit}
            id='lastname'
            label='Last Name'
            placeholder='Enter last name'
          />
          <EditInput
            value={user.email}
            onChange={onChange}
            onSubmit={onSubit}
            id='email'
            label='Email'
            placeholder='Enter email address'
          />
        </Flex>
        <Flex
          direction='column'
          sx={() => ({
            width: '47%',
            '@media (max-width: 62em)': {
              marginTop: '3rem',
              flexDirection: 'column',
              width: '100%',
            }
          })}
        >
          <ParastatalsSelect />
          <DepartmentSelect />
          <DateOfBirth />
        </Flex>
      </Flex>
    </>
  )
}

export default Profile