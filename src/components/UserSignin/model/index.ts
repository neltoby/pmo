export type AdminSigninType = {
  email: string;
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
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role[];
  parastatals: string;
  department: string;
  date: Date;
  token: string;
}