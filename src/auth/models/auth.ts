import { Role } from '@/components/AdminSignin/model'
import camelize from 'camelize'

export type KiaGoAuthResponse = {
  kia_go_url: string
  token: string
}

export type KiaGoAuth = {
  kiaGoUrl: string
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
  parastatals: string;
  department: DepartmentType;
  date: Date;
}

export const toKiaGoAuth = (response: KiaGoAuthResponse) => camelize(response)
