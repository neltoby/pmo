export type UserSignUpDataType = {
  firstname: string;
  middlename?: string;
  lastname: string;
  parastatal: string;
  email: string;
  password: string;
  isHod: boolean;
}

export enum IsHodEnum {
  YES = 'Yes',
  NO = 'No'
}

export enum StagesEnum {
  One = 1,
  Two = 2,
  Three = 3,
}

export type Department = {
  name: string;
}

export type ParastatalList = {
  Id: string;
  category: string;
  name: string;
  department: Department[]
}