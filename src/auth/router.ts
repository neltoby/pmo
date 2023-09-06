import { USER_BASE_URL } from "@/components/UserSignin/router"

export const getLoginUrl = () => {
  return '/auth'
}

export const getUserDetailsUrl = () => `${USER_BASE_URL}`
