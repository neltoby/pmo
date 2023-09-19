import { Role } from '@/components/AdminSignin/model'
import camelize from 'camelize'

export type PmoAuthResponse = {
  pmo_url: string
  token: string
}

export type PmoAuth = {
  pmoUrl: string
  token: string
}

export type CreateRoles = {
  _id: string;
  adminassigner?: string;
  superadminassigner?: string;
  role: Role;
  date: Date;
};


export type DepartmentType = {
  _id: string;
  name: string;
  date: Date;
};
export type UserDetails = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: CreateRoles;
  parastatal: string;
  department: string;
  date: Date;
}

export const toPmoAuth = (response: PmoAuthResponse) => camelize(response)
