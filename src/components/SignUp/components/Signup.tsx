'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { Flex, Input, Select, Radio, Group, Tooltip, Notification, LoadingOverlay } from '@mantine/core'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { userSignUpDataAtom } from '../state'
import { IsHodEnum, StagesEnum, UserSignUpDataType } from '../model'
import { useGetParastatalsList } from '@/components/Parastatals/hooks/useGetParastatalsList'
import { ParastatalsThemesListType } from '@/components/Parastatals/model'
import { IconCheck, IconEye, IconEyeOff, IconX } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { useCreateUser } from '../hooks/useCreateUser'
// import { useGetParastatalsList } from '../hooks/useGetParastatals'

export const formData = (data: ParastatalsThemesListType[]) => {
  let newArr: {value: string, label: string, group: string }[] = [];
  data.forEach(theme => {
    const parasatals = theme.parastatals.map((item, i) => ({ value: item.Id, label: item.name, group: theme.name }))
    newArr = [...newArr, ...parasatals]
  })
  return newArr
}

const SignUp = () => {
  const { data } = useGetParastatalsList()
  const {
    mutate,
    toggle,
    setIsErrorNotif,
    setVisible,
    setStages,
    stages,
    visible,
    isErrorNotif,
    isvisible,
    isSuccess,
    error
  } = useCreateUser()
  const [userData, setUserData] = useRecoilState<UserSignUpDataType>(userSignUpDataAtom)
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData(val => ({...val, [e.target.name]: e.target.value}))
  }


  const setParastatal = (value: string) => {
    setUserData(val => ({ ...val, parastatal: value}))
  }

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault();
    if (stages === StagesEnum.One) {
      setStages(StagesEnum.Two)
    } else {
      toggle();
      mutate();
    }
  }

  const setIsHod = (val: string) => {
    setUserData(val => ({ ...val, isHod: Boolean(val)}))
  }
  
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoadingOverlay visible={visible} overlayBlur={2} />
      {stages === StagesEnum.One &&
        <form  className="space-y-6" onSubmit={handleOnSubmit}>
          <Flex direction='column'>
            <Input.Wrapper
              id="firstname"
              withAsterisk
              label="First Name"
              description="Please enter your first name "
              error=""
            >
              <Input
                id="firstname"
                name='firstname'
                placeholder="First Name"
                value={userData.firstname}
                onChange={handleOnChange}
                required
              />
            </Input.Wrapper>
          </Flex>
          <Flex direction='column'>
            <Input.Wrapper
              id="middlename"
              withAsterisk
              label="Middle Name"
              description="Please enter your middle name "
              error=""
            >
              <Input
                id="middlename"
                placeholder="Middle Name"
                name='middlename'
                value={userData.middlename}
                onChange={handleOnChange}
                required
              />
            </Input.Wrapper>
          </Flex>
          <Flex direction='column'>
            <Input.Wrapper
              id="lastname"
              withAsterisk
              label="Last Name"
              description="Please enter your last name "
              error=""
            >
              <Input
                id="lastname"
                placeholder="Last Name"
                name='lastname'
                value={userData.lastname}
                onChange={handleOnChange}
                required
              />
            </Input.Wrapper>
            <br />
            <Select
              label="Select parastatal"
              placeholder="Select parastatal"
              data={formData(data)}
              searchable
              nothingFound="No options"
              clearable
              required
              value={userData.parastatal}
              onChange={setParastatal}
            />
            <br />
            <Radio.Group
              name="isHod"
              label="Are you a head of a parastatal?"
              withAsterisk
              value={userData.isHod.toString()}
              onChange={setIsHod}
            >
              <Group mt="xs">
                <Radio required value='true' label={IsHodEnum.YES} />
                <Radio required value="false" label={IsHodEnum.NO} />
              </Group>
            </Radio.Group>
            <br />
            <Flex justify='center'>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Next
              </button>
            </Flex>
          </Flex>
        </form>
      }
      {stages === StagesEnum.Two && 
        <form className="space-y-6" onSubmit={handleOnSubmit}>
        <Flex direction='column'>
          <Input.Wrapper
            id="email"
            withAsterisk
            label="Email"
            description="Please enter your email "
            error=""
          >
            <Input
              id="email"
              placeholder="Email"
              name='email'
              value={userData.email}
              onChange={handleOnChange}
              required
            />
          </Input.Wrapper>
        </Flex>
        <Flex direction='column'>
          <Input.Wrapper
            id="password"
            withAsterisk
            label="Password"
            description="Please enter your password"
            error=""
          >
            <Input
              id="password"
              placeholder="Password"
              name='password'
              value={userData.password}
              onChange={handleOnChange}
              required
              type={isvisible ? 'text' : 'password'}
              rightSection={
                <Tooltip label={isvisible ? 'Hide' : 'Show'} position="top-end" withArrow>
                  <div onClick={() => setVisible(val => !val)}>
                    {isvisible ?
                      <IconEyeOff size="1rem" style={{ display: 'block', opacity: 0.5 }} /> : 
                      <IconEye size="1rem" style={{ display: 'block', opacity: 0.5 }} />
                    }
                  </div>
                </Tooltip>
              }
            />
          </Input.Wrapper>
        </Flex>
        <br/>
          <Flex justify='space-between'>
            <button
              onClick={() => setStages(StagesEnum.One)}
              type="button"
              className="flex w-2/5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back
            </button>
            <button
              type="submit"
              className="flex w-2/5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Account
            </button>
        </Flex>
      </form>
      }
      {isErrorNotif && (
        <Notification onClose={() => setIsErrorNotif(false)} icon={<IconX size="1.1rem" />} color="red">
          {(error as any)?.response?.data?.error}
      </Notification>
      ) }
      {isSuccess && (
        <Notification icon={<IconCheck size="1.1rem" />} color="teal" title="Success!">
          User profile successfully created. Admin has to verify you before you can use this platform.
        </Notification>
      )}
    </div>
  )
}

export default SignUp