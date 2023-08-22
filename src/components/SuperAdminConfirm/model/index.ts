export enum Status  {
  Accept = 'accept',
  Reject = 'reject',
}

export type UpdateStatusType = {
  id: string;
  status: Status | null
}

export type VerifyadminType = {
  verified: boolean
}