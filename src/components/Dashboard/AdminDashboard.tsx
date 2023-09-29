'use client'
import { useRecoilValue } from "recoil"
import { signInRole } from "../AdminSignin/state"
import DashboardContent from "./DashboardContent"
import { Role } from "../AdminSignin/model"
import NotPermitted from "../NotPermitted/NotPermitted"

const AdminDashboard = () => {
  const role = useRecoilValue(signInRole)
  return role === Role.Admin || role === Role.SuperAdmin ? (
    <DashboardContent />
  ) : <NotPermitted/>;
}

export default AdminDashboard