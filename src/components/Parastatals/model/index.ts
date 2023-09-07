export type ParastatalsThemesListType = {
  Id: string;
  name: string;
  parastatals: ParastatalsList[]
}

export type ParastatalsList = {
  Id: string;
  category: string;
  name: string;
  department: Department[]
}

export type Department = {
  name: string;
}

export type TableType = {
  data: ParastatalsList[]
  name: string,
}