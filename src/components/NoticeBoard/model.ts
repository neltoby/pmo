import { type } from "os";

export type NoticeBoardPostType = NoticeDataType & {
  Id: string;
  parastatal: ParastatalName[];
  updatedAt: string;
  user: UserType[];
  profile_image: string;
}

export type ParastatalName = {
  name: string
}

export type UserType = {
  firstname: string;
  lastname: string;
  middlename: string;
}

export enum AddressTo {
  HEADS_OF_PARASTATALS = 'heads of parastatals',
  PMO_STAFFS = 'pmo staffs',
  PARASTATAL = 'parastatal',
  PERSONAL = 'personal',
}

export enum Medium {
  EMAIL = 'email',
  TEXT_MESSAGE = 'text message',
  IN_PLATFORM = 'in-platform'
}

export type PostType = {
  data: NoticeBoardPostType
}

export enum NoticeMessageBy {
  PLATFORM = 'platform',
  EMAIL = 'email',
}

export enum NoticeMessageTo {
  HEADS = 'heads-of-parastatal',
  PMO_STAFF = 'pmo-staffs',
  PARASTATAL = 'parastatal',
  INDIVIDUAL = 'individual',
}

export type NoticeDataType = {
  message: string;
  title: string;
  by: NoticeMessageBy;
  to: NoticeMessageTo;
  to_user?: string;
  to_parastatal: string[];
};

export type ShowParastatalFieldType = {
  show: boolean;
  multiple: boolean;
  individual: boolean;
}