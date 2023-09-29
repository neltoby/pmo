import { useQueryClient } from "react-query"
import { USER_DETAILS } from "../constants"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { useRecoilState, useRecoilValue } from "recoil"
import { pmoAuthAtom } from "../state/atoms"
import { useSigninRedirect } from "@/components/Signin/hooks/useSigninRedirect"
import { UserDetails } from "../models/auth"
import { signInRole } from "@/components/AdminSignin/state"
import { defaultParastatals } from "@/components/Department/state/department.atom"

export const useCheckLogin = () => {
  const currentPage = usePathname()
  const auth = useRecoilValue(pmoAuthAtom)
  const role = useRecoilValue(signInRole)
  const [pid, setPid] = useRecoilState(defaultParastatals)
  const { signinRedirect } = useSigninRedirect(pid)

  const checkLogin = () => {
    if (auth.token)
      if (currentPage === '/' || currentPage === '/signup')
        if (pid)
          signinRedirect(role)
  }

  return { checkLogin }
  
}