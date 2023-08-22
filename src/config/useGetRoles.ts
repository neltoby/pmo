import { Role, UserTypeRole } from "@/components/AdminSignin/model"
import { signInRole } from "@/components/AdminSignin/state"
import { useRecoilValue } from "recoil"
import { navLinks, navLinksAdmin, navLinksDepartmentsHeads, navLinksParastatalsHeads, navLinksSuperAdmin } from "."

export const useGetRolesLinks = () => {
  const {role}  = useRecoilValue<UserTypeRole>(signInRole)
  console.log(role,)
  // return role === Role.SuperAdmin ? navLinksSuperAdmin : role === Role.Admin ? navLinksAdmin : role === Role.ParastatalsHeads ? navLinksParastatalsHeads : role=== Role.DepartmentHeads ? navLinksDepartmentsHeads : navLinks
  return navLinksAdmin
}