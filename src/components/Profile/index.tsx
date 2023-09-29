'use client'

import { ChangeEvent, FC, FormEvent, ReactNode, useRef, useState } from "react";
import { Avatar, Box, Button, FileButton, Flex, Input, MediaQuery, Paper, Title, rem } from "@mantine/core"
import Image from "next/image"
import { IconTrash, IconUpload } from "@tabler/icons-react";
import EditInput from "./components/Input";
import { useRecoilState, useRecoilValue } from "recoil";
import { UserDetailsType } from "./model";
import { userDetailsState, userEditDetailsState } from "./state";
import ParastatalsSelect from "./components/Parastatals";
import DepartmentSelect from "./components/Department";
import DateOfBirth from "./components/DateOfBirth";
import { MediaBoxType } from "./components/Input/model";
import { useEditProfile } from "./hook/useEditProfile";
import axios from "axios";
import { pmoAuthAtom } from "@/auth/state/atoms";



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
  const [srcStr, setSrc] = useState('')
  const [isLoadingProfile, setIsLoadingProfile] = useState(false)
  const [user, setUser] = useRecoilState<UserDetailsType>(userDetailsState)
  const [editUser, setEditUser] = useRecoilState<UserDetailsType>(userEditDetailsState)
  const { token, pmoUrl } = useRecoilValue(pmoAuthAtom)
  const uploadRef = useRef<HTMLInputElement>(null)
  const { mutate } = useEditProfile(editUser)

  const handleFileUpload = async (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      const config = {     
        headers: {
          'content-type': 'multipart/form-data',
          'authorization': `Bearer ${token}`
        }
      }
      setIsLoadingProfile(true)
      let res: any
      try {
        res = await axios.post(`${pmoUrl}/api/users/upload`, formData, config)
      } catch (e) {
        
      }
      handleFileDelete()
      setIsLoadingProfile(false)
      if (res?.data) {
        setUser(val => ({...val, profileImage: res.data.profile_image }))
      }
      console.log(res.data);
    }
    return
  }
  const handleFileDelete = () => { 
    URL.revokeObjectURL(srcStr)
    setFile(null)
    setSrc('')
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setEditUser(val => ({...val, [e.target.name]: e.target.value}))
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = (e.currentTarget.files as FileList)[0]
    setFile(file)
    setSrc(URL.createObjectURL(file))
  }
  const onSubit = () => { 
    mutate()
  }
  const clickInput = () => {
    uploadRef.current?.click()
  }

  const src = file ? srcStr : user.profileImage ? user.profileImage : '/avatar.webp';
  const fullname = `${user.firstname} ${user.middlename && user.middlename} ${user.lastname}`

  return (
    <>
      <Title order={1}>{fullname}</Title><br/>
      <Flex>
        <form encType="multipart/form-data" onSubmit={handleFileUpload}>
        <Image className="" src={src} alt={fullname} width={200} height={200} />
          <Flex
            direction='column'
            justify='center'
            sx={(theme) => ({ paddingLeft: '2rem' })}
          >
            { !isLoadingProfile && 
              <>
                <label onClick={clickInput} htmlFor="file_upload">
                  <Button
                    color='#fff'
                    sx={(theme) => ({
                      width: '100%', color: theme.colors.cyan, backgroundColor: '#fff', marginTop: '1rem', border: `1px ${theme.colors.cyan} solid !important`, "&:hover": {
                        color: 'red',
                        border: 'none',
                    } })}
                    leftIcon={<IconUpload size={rem(18)} />}
                  >
                    Change profile
                  </Button>
                </label>
                <input
                  id='file_upload'
                  name='file'
                  type='file'
                  accept="image/png,image/jpeg"
                  hidden
                  onChange={handleOnChange}
                  ref={uploadRef}
                />
                
                {/* <FileButton name='file' onChange={setFile} accept="image/png,image/jpeg">
                  {(props) => <Button {...props} variant="outline" sx={(theme) => ({ width: '100%', border: `1px solid ${theme.colors.cyan}`, marginTop: '1rem' })}>Change photo</Button>}
                </FileButton> */}
                <Flex>
                  {!file &&
                    <Button
                      color='#fff'
                      sx={(theme) => ({
                        width: '100%', color: theme.colors.cyan, backgroundColor: '#fff', marginTop: '1rem', border: `1px ${theme.colors.cyan} solid !important`, "&:hover": {
                          color: 'red',
                          border: 'none',
                      } })}
                      onClick={handleFileDelete}
                      leftIcon={<IconTrash size={rem(18)} />}
                    >
                      Delete photo
                    </Button>
                  }
                  {file && 
                    <Button
                      type='submit'
                      color='#fff'
                      sx={(theme) => ({
                        width: '100%', color: theme.colors.cyan, backgroundColor: '#fff', marginTop: '1rem', border: `1px ${theme.colors.cyan} solid !important`, "&:hover": {
                          color: 'red',
                          border: 'none',
                      } })}
                      leftIcon={<IconUpload size={rem(18)} />}
                    >
                      Upload photo
                    </Button>
                  }
                </Flex>    
                {file && 
                  <div className='text-sm font-semibold'>
                    File selected {file.name}
                  </div>
                  }
              </>
            }
            {isLoadingProfile && 
              <div className='text-sm font-semibold'>
                Uploading...
              </div>
            }
          </Flex>
        </form>
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
            editValue={editUser.firstname}
            value={user.firstname}
            onChange={onChange}
            onSubmit={onSubit}
            id='firstname'
            label='First Name'
            placeholder='Enter first name'
          />
          <EditInput
            editValue={editUser.middlename}
            value={user.middlename}
            onChange={onChange}
            onSubmit={onSubit}
            id='middlename'
            label='Middle Name'
            placeholder='Enter middle name'
          />
          <EditInput
            editValue={editUser.lastname}
            value={user.lastname}
            onChange={onChange}
            onSubmit={onSubit}
            id='lastname'
            label='Last Name'
            placeholder='Enter last name'
          />
          <EditInput
            editValue={editUser.email}
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
          <ParastatalsSelect onSubmit={onSubit} />
          <DepartmentSelect onSubmit={onSubit} />
          <DateOfBirth />
        </Flex>
      </Flex>
    </>
  )
}

export default Profile