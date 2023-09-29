'use client'

import Department from './Department'
import { Role } from '../AdminSignin/model'
import { useRecoilValue } from 'recoil'
import { signInRole } from '../AdminSignin/state'
import NotPermitted from '../NotPermitted/NotPermitted'

const AdminDepartment = () => {
  const role = useRecoilValue(signInRole)
  return role === Role.Admin || role === Role.SuperAdmin ? (
    <Department />
  ) : <NotPermitted />;
}

export default AdminDepartment