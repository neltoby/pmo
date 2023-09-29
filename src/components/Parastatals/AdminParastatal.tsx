'use client'
import { useRecoilValue } from 'recoil'
import { Role } from '../AdminSignin/model'
import { signInRole } from '../AdminSignin/state'
import Parastatals from './Parastatals'
import NotPermitted from '../NotPermitted/NotPermitted'

const AdminParastatal = () => {
  const role = useRecoilValue(signInRole)
  return role === Role.Admin || role === Role.SuperAdmin ? (
    <Parastatals />
  ) : <NotPermitted />
}

export default AdminParastatal