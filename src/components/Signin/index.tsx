'use client'
import { ChangeEvent, FC, FormEvent, memo, useCallback } from 'react'

import Input from '@/shared/Input'
import Link from 'next/link'
import { useSigninUser } from './hooks/useSigninUser'
import { userSigninDataAtom } from './state'
import { UserSignInType } from './model'
import { useRecoilState } from 'recoil'
import { LoadingOverlay, Notification } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'


const Signin = () => {
  const { mutate, visible, toggle, isErrorNotif, setIsErrorNotif, error, } = useSigninUser()
  const [userCred, setUserCred] = useRecoilState<UserSignInType>(userSigninDataAtom)
  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => { 
    setUserCred(val => ({...val, [e.target.name]: e.target.value}))
  }, []);
  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggle()
    mutate()
  }, [])

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <LoadingOverlay visible={visible} overlayBlur={2} />
      <form className="space-y-6" onSubmit={handleOnSubmit}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Username
          </label>
          <div className="mt-2">
            <Input
              onChange={handleOnChange}
              value={userCred.email}
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              placeholder='Enter email'
              required
              className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <Link
                href="/forgot-password"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <Input
              id="password"
              onChange={handleOnChange}
              value={userCred.password}
              name="password"
              type="password"
              autoComplete="password"
              required
              placeholder='Enter password'
              className="block w-full rounded-md border-0 py-1.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>
      {isErrorNotif && (
        <Notification
          onClose={() => setIsErrorNotif(false)}
          icon={<IconX size="1.1rem" />}
          color="red"
          title="Failed!"
        >
          {(error as any)?.response?.data?.error}
      </Notification>
      ) }
    </div>
  )
}
const SigninComponent = (memo(Signin))
export default SigninComponent 