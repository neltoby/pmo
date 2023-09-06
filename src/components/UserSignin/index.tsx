'use client'
import Image from "next/image"

import SigninComponent from "@/components/Signin"
import { ChangeEvent, FormEvent, use, useCallback, useState } from "react"
import { useSigninUser } from "./hooks"

const UserSignin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { mutate } = useSigninUser({ email, password})
  const handleOnChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => { 
    setEmail(e.target.value)
  }, []);
  const handleOnChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => { 
    setPassword(e.target.value)
  }, [])
  const handleOnSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate()
  }, [])

  return(
<div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <Image className="mx-auto h-10 w-auto" width={3} height={3} src="/logo.png" alt="Your Company" unoptimized/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
  </div>
      <SigninComponent handleOnChangeEmail={handleOnChangeEmail} handleOnChangePassword={handleOnChangePassword} handleOnSubmit={ handleOnSubmit} email={email} password={password} />
</div>
)}
const UserSigninComponent = UserSignin
export default UserSigninComponent