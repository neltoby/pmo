import { atom, selector } from "recoil";
import { NoticeBoardPostType, NoticeDataType, NoticeMessageBy, NoticeMessageTo, ShowParastatalFieldType } from "./model";

export const postFromBoard = atom<NoticeBoardPostType[]>({
  key: 'postFromBoard',
  default: []
})

export const noticeBoardForm = atom<NoticeDataType>({
  key: 'noticeBoardForm',
  default: {
    title: '',
    message: '',
    by: NoticeMessageBy.PLATFORM,
    to: NoticeMessageTo.PMO_STAFF,
    to_user: '',
    to_parastatal: [],
  }
})

export const noticeBoardFormToSelector = selector({
  key: 'noticeBoardFormSelector',
  get: ({ get }) => {
    const formState = get(noticeBoardForm);

    switch (formState.to) {
      case NoticeMessageTo.HEADS:
        return true 
      case NoticeMessageTo.INDIVIDUAL:
        return false
      case NoticeMessageTo.PARASTATAL:
        return true
      default:
        return false
    }
  }
})

export const noticeBoardSendBy = selector({
  key: 'noticeBoardSendBy',
  get: ({ get }) => {
    const formState = get(noticeBoardForm);

    switch (formState.to) {
      case NoticeMessageTo.HEADS:
        return true
      case NoticeMessageTo.INDIVIDUAL:
        return true
      case NoticeMessageTo.PARASTATAL:
        return false
      default:
        return false
    }
  }
})

export const showEmailFieldSelector = selector({
  key: 'showEmailFieldSelector',
  get: ({ get }) => {
    const formState = get(noticeBoardForm);
    if (formState.to === NoticeMessageTo.INDIVIDUAL && formState.by === NoticeMessageBy.EMAIL)
      return true
    return false;
  }
})