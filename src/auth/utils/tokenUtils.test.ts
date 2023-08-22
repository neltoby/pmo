import { hasExpired } from './tokenUtils'

const EXPIRED_TOKEN = 939389182
const VALID_TOKEN = 4126685182

describe('auth token utils', () => {
  it('should return true if auth token has expired', () => {
    expect(hasExpired(EXPIRED_TOKEN)).toBeTruthy()
  })

  it('should return false if auth token is still valid', () => {
    expect(hasExpired(VALID_TOKEN)).toBeFalsy()
  })
})
