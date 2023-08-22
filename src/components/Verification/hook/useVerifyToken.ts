import useApiQuery from '@/hooks/useApiQuery'
import { useEffect } from 'react'
import { getVerifySuperAdminTokenApi } from '../services'
import { GET_TOKEN_CHECK } from '../constants'
import { useSetRecoilState } from 'recoil'
import { verificationCheck } from '../state/atoms'
import { VerificationCheckType } from '../model'

export const useVerifyToken = (token: string | null) => {
  const setTokenVerify = useSetRecoilState<VerificationCheckType>(verificationCheck)
  const { refetch, data, error, isFetching } = useApiQuery(GET_TOKEN_CHECK, getVerifySuperAdminTokenApi(token as string))
  
  useEffect(() => {
      if(token)
      refetch()
  }, [refetch, token])

  useEffect(() => { 
    if (data?.success && data?.sub) {
      setTokenVerify({sub: data.sub, username: data.username})
    }
  },[data, setTokenVerify])

  return {
    data, error, isFetching
  }
}