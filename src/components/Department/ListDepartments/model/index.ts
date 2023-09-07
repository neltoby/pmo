export type DepartmentName = {
  name: string;
}

export type DepartmentListReturnDataType = DepartmentName & {
  Id: string;
  department: DepartmentName[]
}

export type ListDepartmentType = {
  data: DepartmentName[]
}

export type AdddDepartmentType = {
  name: string;
  pid: string;
}