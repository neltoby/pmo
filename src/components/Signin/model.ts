export type UserSignInType = {
  email: string;
  password: string;
}

export enum Role {
  Staff = 'staff',
  Admin = 'admin',
  ParastatalsHeads = 'hop',
  DepartmentHeads = 'hod',
  SuperAdmin = 'sadmin',
}

export type ReturnValueType = {
  parastatal: string;
  department: string;
  role: Role;
  token: string;
}