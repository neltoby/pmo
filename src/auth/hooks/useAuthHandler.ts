import { useRecoilState } from 'recoil'

import { hasExpired } from '@/auth/utils/tokenUtils'
import { KiaGoAuth } from '@/auth/models/auth'
import { kiaGoAuthAtom } from '@/auth/state/atoms'

type UseAuthHandlerProps = {
  auth: KiaGoAuth
  opts?: {}
}

type UseAuthHandlerOutput = {
  signedOut: boolean
  expired: boolean
}

const useAuthHandler = (props: UseAuthHandlerProps): UseAuthHandlerOutput => {
  const { auth: authParam } = props
  const [auth, setAuth] = useRecoilState(kiaGoAuthAtom)

  let expired = false
  if (authParam && !auth.token && authParam.token) setAuth(authParam)
  if (!authParam  && auth.token) {
    expired = true
    //   window.location.href = '/login'
    //   setAuth({
    //     expiresAt: 0,
    //     token: '',
    //     kiaGoUrl: '',
    //   })
  }
  return {
    signedOut: !auth.token,
    expired,
  }
}

export default useAuthHandler
