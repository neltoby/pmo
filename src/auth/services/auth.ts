import { ApiRequest } from '@/model/api'
import { getLoginUrl, getUserDetailsUrl } from '../router'

/**
 * Login
 */
export type LoginApiParams = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  expiresAt: string
}

export const loginApi = (params: LoginApiParams): ApiRequest => {
  const url = getLoginUrl()
  return {
    url,
    method: 'post',
    body: {
      Email: params.email,
      password: params.password,
    },
  }
}

export const getUserDetailsApi = (): ApiRequest => {
  const url = getUserDetailsUrl()
  return {
    url,
    method: 'get',
  }
}
