import camelize from 'camelize'

export type KiaGoAuthResponse = {
  kia_go_url: string
  token: string
}

export type KiaGoAuth = {
  kiaGoUrl: string
  token: string
}

export const toKiaGoAuth = (response: KiaGoAuthResponse) => camelize(response)
