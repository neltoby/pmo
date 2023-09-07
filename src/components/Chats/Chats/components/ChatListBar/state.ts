import { atom } from "recoil";
import { ChatListType, MessageType } from "./model";

const chatListData = [
  {          
    id: '0',
    avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
    alt: 'kursat_avatar',
    title: 'Shola Ogunbode',
    subtitle: "Should we join now?",
    date: new Date(),
    unread: 3,
  },
  {          
    id: '1',
    avatar: 'https://avatars.githubusercontent.com/u/41473129?v=4',
    alt: 'kursat_avatar',
    title: 'Kehinde Olabowale',
    subtitle: "Aiit, will send it now",
    date: new Date(),
    unread: 6,
  },
]

export const chatListAtom = atom<ChatListType>({
  key: 'chatListAtom',
  default: chatListData
})

export const currentUserAtom = atom<MessageType[]>({
  key: 'currentUserAtom',
  default: []
})