export type AdminSigninType = {
  username: string;
  password: string;
}

export enum Role {
  Staff = 'staff',
  Admin = 'admin',
  ParastatalsHeads = 'parastatals',
  DepartmentHeads = 'department',
  SuperAdmin = 'superadmin',
}

export type UserTypeRole = {
  role: Role | null;
}

export type ReturnValueType = {
   _id: string;
  username: string;
  email: string;
  password: string;
  verified: string;
  date_verified: Date;
  date_created: Date;
  token: string;
  roles: Role[]
}