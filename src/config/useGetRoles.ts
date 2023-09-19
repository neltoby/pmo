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
    if (!role) {
      refetch()
    }
  }, [])

  useEffect(() => { 
    if (data) {
      setRole(role)
    }
  }, [])
  
  return role === Role.SuperAdmin ? navLinksSuperAdmin() : role === Role.Admin ? navLinksAdmin() : role === Role.ParastatalsHeads ? navLinksParastatalsHeads(data?.parastatal) : role === Role.DepartmentHeads ? navLinksDepartmentsHeads({pid: data?.parastatal, did: data?.department}) : navLinks(data?.parastatal)
}