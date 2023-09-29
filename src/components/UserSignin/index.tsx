'use client'
import Image from "next/image"

import SigninComponent from "@/components/Signin"
import { Paper } from "@mantine/core"
import Link from "next/link"
import { useAuthHandler } from "@/auth/hooks/useAuthHandler"
import { useCheckLogin } from "@/auth/hooks/useCheckLogin"


const UserSignin = () => {
  const { checkLogin } = useCheckLogin()
  checkLogin()
  
  return(
    <div className="flex min-h-screen flex-col justify-center items-center px-6 py-12 lg:px-8">
      <Paper sx={() => ({
        width: '30%',
        padding: '2rem',
        position: 'relative',
        '@media (max-width: 62em)': {
          width: '100%',
        }
      })}>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image className="mx-auto h-20 w-auto" width={3} height={3} src="/logo.png" alt="Lagos state logo" unoptimized/>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in</h2>
        </div>
        <SigninComponent />
        <br/>
        <div className='flex justify-center text-indigo-600'>
          Do not have an account?
          <Link
            href="/signup"
            className="font-semibold px-2 text-indigo-600 hover:text-indigo-500"
          >
            Signup
          </Link>
        </div>
      </Paper>
    </div>
)}
export default UserSignin