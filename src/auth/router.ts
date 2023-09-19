import { USER_BASE_URL } from "@/components/SignUp/router"


export const getLoginUrl = () => {
  return '/auth'
}

export const getUserDetailsUrl = () => `${USER_BASE_URL}`
