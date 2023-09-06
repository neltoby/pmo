import { Role, UserTypeRole } from "@/components/AdminSignin/model"
import { signInRole } from "@/components/AdminSignin/state"
import { useRecoilState,  } from "recoil"
import { navLinks, navLinksAdmin, navLinksDepartmentsHeads, navLinksParastatalsHeads, navLinksSuperAdmin } from "."
import { useEffect } from "react"
import { useAuthHandler } from "@/auth/hooks/useAuthHandler"
import { UserDetails } from "@/auth/models/auth"

export const useGetRolesLinks = () => {
  const [ role, setRole ] = useRecoilState<UserTypeRole>(signInRole)
  const {refetch, data }: {refetch: Function, data: UserDetails} = useAuthHandler()

  useEffect(() => { 
    if (!role?.role) {
      refetch()
    }
  }, [])

  useEffect(() => { 
    if (data) {
      setRole({role: data?.role?.role})
    }
  }, [])
  
  console.log(role?.role)
  return role?.role === Role.SuperAdmin ? navLinksSuperAdmin() : role?.role === Role.Admin ? navLinksAdmin() : role?.role === Role.ParastatalsHeads ? navLinksParastatalsHeads(data?.parastatals) : role?.role === Role.DepartmentHeads ? navLinksDepartmentsHeads : navLinks()
  // return navLinksAdmin
}