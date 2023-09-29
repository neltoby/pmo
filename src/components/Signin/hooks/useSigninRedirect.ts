import { redirect } from "next/navigation"
import { Role } from "../model"
import { pmoAuthAtom } from "@/auth/state/atoms"
import { useRecoilValue } from "recoil"

export const useSigninRedirect = (parastatal: string) => {
  const authToken = useRecoilValue(pmoAuthAtom)

  const signinRedirect = (role: Role | null) => {
    role &&
      redirect(role === Role.Admin ? '/dashboard' : role === Role.ParastatalsHeads ? `/dashboard/parastatals/${parastatal}` : role === Role.DepartmentHeads ? `parastatals/${parastatal}/department` : `parastatals/${parastatal}/department`)
  }

  return { signinRedirect }
}