'use client'
import Image from "next/image"

import SigninComponent from "@/components/Signin"
import { ChangeEvent, FormEvent, memo, useCallback, useState } from "react"
// import { QueryClient, QueryClientProvider } from "react-query"
// import { RecoilRoot } from "recoil"
import { useSigninAdmin } from "./hooks"
// import { RootDependency } from "../RootDependency"

const AdminSignin = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { mutate} = useSigninAdmin({username: email, password})
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
    <Image className="mx-auto h-10 w-auto" width={500} height={500} src='/logo.png' alt="pmo-logo"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Admin sign in</h2>
  </div>
      <SigninComponent handleOnChangeEmail={handleOnChangeEmail} handleOnChangePassword={handleOnChangePassword} handleOnSubmit={ handleOnSubmit} email={email} password={password} />
  
</div>
  )
}
const AdminSigninComponent = memo(AdminSignin)
export default AdminSigninComponent