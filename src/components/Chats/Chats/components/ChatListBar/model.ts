export type UserListChat = {        
  id: string;
  avatar: string;
  alt: string;
  title: string;
  subtitle: string;
  date: Date;
  unread: number;
}
export type ChatListType = UserListChat[]

export enum PositionEnum {
  Right = 'right',
  Left = 'left',
}

export type MessageType = {
  id: string;
  position: PositionEnum;
  title: string;
  type: string;
  text: string
  date: Date,
  status: string;
}