import { ApiRequest } from '@/model/api'
import { getLoginUrl } from '../router'

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
